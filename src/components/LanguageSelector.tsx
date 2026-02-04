import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === language);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-border/50 bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-background"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Globe className="h-4 w-4 text-primary" />
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-border/50 bg-background shadow-xl"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-muted ${
                    language === lang.code
                      ? 'bg-primary/5 text-primary'
                      : 'text-foreground'
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="font-medium">{lang.label}</span>
                  {language === lang.code && (
                    <motion.div
                      className="ml-auto h-2 w-2 rounded-full bg-primary"
                      layoutId="activeLanguage"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
