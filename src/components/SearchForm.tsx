import React, { useEffect, useState, useRef } from 'react';
import { SearchIcon, Loader2Icon, XCircleIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockMedicalTests } from '../utils/mockData';
interface SearchFormProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}
export const SearchForm: React.FC<SearchFormProps> = ({
  onSearch,
  isLoading
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showPopular, setShowPopular] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();
  const popularTests = mockMedicalTests.slice(0, 5).sort((a, b) => a.name.localeCompare(b.name));
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
      setIsTyping(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(true);
    setShowPopular(false);
    // Reset typing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 500);
  };
  const handleClearSearch = () => {
    setQuery('');
    setShowPopular(false);
    inputRef.current?.focus();
  };
  const handlePopularClick = (testName: string) => {
    setQuery(testName);
    setShowPopular(false);
    inputRef.current?.focus();
  };
  return <motion.div className="relative mb-6" initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3
  }}>
      <motion.div className={`relative rounded-lg overflow-hidden ${isFocused ? 'ring-2 ring-indigo-500 shadow-lg' : 'shadow-md hover:shadow-indigo-200'}`} whileHover={{
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)'
    }}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input ref={inputRef} type="text" value={query} onChange={handleInputChange} onFocus={() => {
        setIsFocused(true);
        setShowPopular(true);
      }} onBlur={() => {
        setIsFocused(false);
        // Delay hiding popular to allow for clicks
        setTimeout(() => setShowPopular(false), 200);
      }} onClick={() => setShowPopular(true)} className="block w-full bg-white pl-10 pr-12 py-4 border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500 rounded-lg" placeholder="Search for medical tests, imaging, or procedures..." aria-label="Search for medical tests" />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {query && <>
              {isTyping ? <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0,
            scale: 0.8
          }}>
                  <Loader2Icon className="h-5 w-5 text-indigo-500 animate-spin" />
                </motion.div> : <motion.button onClick={handleClearSearch} whileTap={{
            scale: 0.9
          }} className="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <XCircleIcon className="h-5 w-5" />
                </motion.button>}
            </>}
        </div>
      </motion.div>
      <AnimatePresence>
        {showPopular && popularTests.length > 0 && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -10
      }} className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">
                Popular Tests
              </div>
              {popularTests.map(test => <button key={test.id} onClick={() => handlePopularClick(test.name)} className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                  <span className="text-sm text-gray-700">{test.name}</span>
                  <span className="ml-2 text-xs text-gray-400">
                    {test.category}
                  </span>
                </button>)}
            </div>
          </motion.div>}
      </AnimatePresence>
      {isFocused && <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-lg blur opacity-30 -z-10" initial={{
      opacity: 0
    }} animate={{
      opacity: 0.3
    }} exit={{
      opacity: 0
    }} />}
    </motion.div>;
};