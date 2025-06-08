import React from 'react';
import { motion } from 'framer-motion';
import { MedicalTest } from '../utils/types';
import { Activity, HeartPulse, Microscope, Scan, Syringe, Thermometer } from 'lucide-react';
interface SearchItemProps {
  test: MedicalTest;
  index: number;
  searchQuery?: string;
}
export const SearchItem: React.FC<SearchItemProps> = ({
  test,
  index,
  searchQuery = ''
}) => {
  const getIcon = () => {
    switch (test.category) {
      case 'Blood Test':
        return <div className="h-5 w-5 text-red-500" />;
      case 'Imaging':
        return <Scan className="h-5 w-5 text-blue-500" />;
      case 'Cardiac':
        return <HeartPulse className="h-5 w-5 text-pink-500" />;
      case 'Laboratory':
        return <div className="h-5 w-5 text-purple-500" />;
      case 'Pathology':
        return <Microscope className="h-5 w-5 text-green-500" />;
      case 'Procedure':
        return <Syringe className="h-5 w-5 text-indigo-500" />;
      case 'Vital Signs':
        return <Thermometer className="h-5 w-5 text-orange-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <span key={i} className="text-pink-500 font-medium">
          {part}
        </span> : part);
  };
  return <motion.div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} transition={{
    delay: index * 0.05
  }} whileHover={{
    scale: 1.01
  }}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {test.imageUrl ? <img src={test.imageUrl} alt={test.name} className="w-16 h-16 object-cover rounded-md" /> : <div className="w-16 h-16 bg-indigo-50 rounded-md flex items-center justify-center">
              {getIcon()}
            </div>}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-lg text-gray-900">
              {highlightText(test.name, searchQuery)}
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {test.category}
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-1">
            {highlightText(test.description, searchQuery)}
          </p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            {test.duration && <span className="mr-4">{test.duration}</span>}
            {test.preparation && <span>Prep: {test.preparation}</span>}
          </div>
        </div>
      </div>
    </motion.div>;
};