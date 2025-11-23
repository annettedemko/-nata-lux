'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setDisplayedChildren(children);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isLoading) {
      setDisplayedChildren(children);
    }
  }, [children, isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(197,151,80,0.3) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative flex flex-col items-center">
              {/* Outer spinning ring */}
              <div className="absolute w-48 h-48 md:w-56 md:h-56">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{
                    border: '2px solid transparent',
                    borderTopColor: 'rgba(197,151,80,0.8)',
                    borderRightColor: 'rgba(197,151,80,0.3)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Middle pulsing ring */}
              <div className="absolute w-44 h-44 md:w-52 md:h-52">
                <motion.div
                  className="w-full h-full rounded-full border border-brand-gold/20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>

              {/* Inner gradient ring */}
              <div className="absolute w-40 h-40 md:w-48 md:h-48">
                <motion.div
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(197,151,80,0.4), transparent)',
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>

              {/* Glowing backdrop */}
              <motion.div
                className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(197,151,80,0.3) 0%, rgba(197,151,80,0.1) 50%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Logo container */}
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.img
                  src="/112.png"
                  alt="Nata Lux"
                  className="w-full h-full object-contain"
                  animate={{
                    scale: [1, 1.03, 1],
                    filter: [
                      'drop-shadow(0 4px 20px rgba(197,151,80,0.3))',
                      'drop-shadow(0 8px 40px rgba(197,151,80,0.5))',
                      'drop-shadow(0 4px 20px rgba(197,151,80,0.3))',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>

              {/* Loading text */}
              <motion.div
                className="mt-8 flex items-center gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-sm font-light tracking-[0.3em] text-brand-espresso/60 uppercase">
                  Loading
                </span>
                <motion.span
                  className="flex gap-1 ml-1"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full bg-brand-gold"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </motion.span>
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="mt-4 w-32 h-0.5 bg-gray-200 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-gold/60 via-brand-gold to-brand-gold/60 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 1.8,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {displayedChildren}
    </>
  );
}
