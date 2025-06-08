import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X as XIcon, MapPin as MapPinIcon, Loader2Icon } from 'lucide-react';
interface LocationEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (location: string) => void;
  currentLocation: string | null;
}
export const LocationEditModal: React.FC<LocationEditModalProps> = ({
  isOpen,
  onClose,
  onSave,
  currentLocation
}) => {
  const [location, setLocation] = useState(currentLocation || '');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    onSave(location);
    setIsLoading(false);
    onClose();
  };
  return <AnimatePresence>
      {isOpen && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <motion.div initial={{
        scale: 0.95,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.95,
        opacity: 0
      }} className="relative bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-6">
              <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <MapPinIcon className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Update Location
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter city, state or zip code" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" />
                <div className="mt-6 flex gap-3">
                  <button type="button" onClick={onClose} className="flex-1 px-4 py-2 text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button type="submit" disabled={isLoading} className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50">
                    {isLoading ? <Loader2Icon className="w-5 h-5 animate-spin mx-auto" /> : 'Save Location'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>}
    </AnimatePresence>;
};