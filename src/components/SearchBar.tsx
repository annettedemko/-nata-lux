'use client'

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { searchIndex, SearchItem } from '@/data/searchIndex';
import { motion, AnimatePresence } from 'framer-motion';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Search function - searches across both languages
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const filtered = searchIndex.filter((item) => {
      // Search in both German and Russian regardless of selected language
      const titleDe = item.title.de.toLowerCase();
      const titleRu = item.title.ru.toLowerCase();
      const descriptionDe = item.description.de.toLowerCase();
      const descriptionRu = item.description.ru.toLowerCase();
      const keywordsDe = item.keywords.de.join(' ').toLowerCase();
      const keywordsRu = item.keywords.ru.join(' ').toLowerCase();
      const categoryDe = item.category.de.toLowerCase();
      const categoryRu = item.category.ru.toLowerCase();

      return (
        titleDe.includes(lowerQuery) ||
        titleRu.includes(lowerQuery) ||
        descriptionDe.includes(lowerQuery) ||
        descriptionRu.includes(lowerQuery) ||
        keywordsDe.includes(lowerQuery) ||
        keywordsRu.includes(lowerQuery) ||
        categoryDe.includes(lowerQuery) ||
        categoryRu.includes(lowerQuery)
      );
    });

    setResults(filtered.slice(0, 8)); // Limit to 8 results
  };

  useEffect(() => {
    performSearch(query);
  }, [query, language]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (path: string) => {
    const fullPath = language === 'ru' ? `/ru${path}` : path;
    router.push(fullPath);
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input with modern effects */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 rounded-3xl blur-xl opacity-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(197,151,80,0.15), transparent 70%)',
            opacity: isOpen ? 0.4 : 0,
          }}
        />

        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-coffee/40 transition-colors"
            style={{ color: isOpen ? '#9C7438' : '' }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder={t('search.placeholder')}
            className="w-full pl-14 pr-12 py-4 rounded-3xl bg-white/95 backdrop-blur-xl border-2 transition-all duration-300 font-medium text-base"
            style={{
              borderColor: isOpen ? 'rgba(197,151,80,0.4)' : 'rgba(197,151,80,0.15)',
              boxShadow: isOpen
                ? '0 8px 32px rgba(197,151,80,0.15), 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)'
                : '0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
              color: '#2B1F18',
            }}
          />
          {query && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={handleClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: 'rgba(197,151,80,0.1)',
                color: '#9C7438',
              }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full mt-3 w-full bg-white/98 backdrop-blur-xl rounded-3xl border-2 overflow-hidden z-50 max-h-96 overflow-y-auto"
            style={{
              borderColor: 'rgba(197,151,80,0.2)',
              boxShadow: '0 12px 48px rgba(197,151,80,0.12), 0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
            {results.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => handleResultClick(item.path)}
                className="w-full px-6 py-4 text-left transition-all duration-200 border-b last:border-0 group"
                style={{
                  borderColor: 'rgba(197,151,80,0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(197,151,80,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(197,151,80,0.1)',
                    }}
                  >
                    <Search className="w-4 h-4" style={{ color: '#9C7438' }} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="font-semibold text-brand-espresso mb-1.5 group-hover:text-brand-gold transition-colors">
                      {item.title[language]}
                    </div>
                    <div className="text-sm text-brand-coffee/70 line-clamp-1 mb-2">
                      {item.description[language]}
                    </div>
                    <div className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: 'rgba(197,151,80,0.1)',
                        color: '#9C7438',
                      }}
                    >
                      {item.category[language]}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full mt-3 w-full bg-white/98 backdrop-blur-xl rounded-3xl border-2 p-8 text-center z-50"
            style={{
              borderColor: 'rgba(197,151,80,0.2)',
              boxShadow: '0 12px 48px rgba(197,151,80,0.12), 0 4px 16px rgba(0,0,0,0.08)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(197,151,80,0.08)',
              }}
            >
              <Search className="w-8 h-8" style={{ color: '#9C7438' }} />
            </div>
            <p className="text-brand-espresso font-semibold text-lg mb-2">
              {t('search.noResults')}
            </p>
            <p className="text-sm text-brand-coffee/60">
              {t('search.tryOther')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
