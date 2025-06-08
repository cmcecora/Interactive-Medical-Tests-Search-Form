import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon, PencilIcon } from 'lucide-react';
import { LocationEditModal } from './LocationEditModal';
interface LocationDisplayProps {
  location: string | null;
  isLoading: boolean;
  error: string | null;
  onUpdateLocation: (location: string) => void;
}
export const LocationDisplay: React.FC<LocationDisplayProps> = ({
  location,
  isLoading,
  error,
  onUpdateLocation
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  if (error) return null;
  return <>
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
        <motion.div className="bg-white/90 backdrop-blur-md shadow-lg px-6 py-3 rounded-full flex items-center gap-2 text-sm pointer-events-auto relative group" initial={{
        opacity: 0,
        scale: 0.9,
        y: -20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} onClick={() => setIsEditing(true)}>
          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          type: 'spring',
          stiffness: 200,
          damping: 10,
          delay: 0.5
        }}>
            <MapPinIcon className="w-4 h-4 text-blue-500" />
          </motion.div>
          <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{
          scale: 1.02
        }} transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25
        }}>
            <motion.span initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.3,
            delay: 0.7
          }} className="text-gray-600">
              {isLoading ? 'Detecting location...' : location ? <span className="text-blue-500 font-medium text-base">
                  {location}
                </span> : null}
            </motion.span>
            <AnimatePresence>
              {isHovered && <motion.div initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.8
            }} transition={{
              duration: 0.15
            }}>
                  <PencilIcon className="w-3.5 h-3.5 text-blue-400" />
                </motion.div>}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
      <LocationEditModal isOpen={isEditing} onClose={() => setIsEditing(false)} onSave={onUpdateLocation} currentLocation={location} />
    </>;
};