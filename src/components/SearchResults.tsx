import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchItem } from './SearchItem';
import { MedicalTest } from '../utils/types';
import { Loader2Icon } from 'lucide-react';
interface SearchResultsProps {
  results: MedicalTest[];
  isLoading: boolean;
  searchQuery?: string;
}
export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  searchQuery = ''
}) => {
  return <div className="mt-6">
      <AnimatePresence>
        {isLoading && results.length === 0 && <motion.div className="flex justify-center py-12" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <Loader2Icon className="h-8 w-8 text-indigo-500 animate-spin" />
          </motion.div>}
        {!isLoading && results.length === 0 && <motion.div className="text-center py-12 text-gray-500" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            Enter a search term to find medical tests
          </motion.div>}
        {results.length > 0 && <motion.div className="space-y-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }}>
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              {results.length} {results.length === 1 ? 'result' : 'results'}{' '}
              found
            </h2>
            {results.map((test, index) => <SearchItem key={test.id} test={test} index={index} searchQuery={searchQuery} />)}
          </motion.div>}
      </AnimatePresence>
    </div>;
};