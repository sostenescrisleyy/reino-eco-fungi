import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)']);
  const headerShadow = useTransform(scrollY, [0, 100], ['0 0 0 0 transparent', '0 4px 30px -10px rgba(0,0,0,0.1)']);

  const navItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <motion.header
      className="fixed left-0 right-0 top-[36px] sm:top-[40px] z-40 border-b border-border/30 backdrop-blur-md bg-background/80"
      style={{ boxShadow: headerShadow }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-container">
        <div className="flex h-12 items-center justify-between sm:h-14 md:h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary sm:h-10 sm:w-10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-lg sm:text-xl">🍄</span>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold uppercase tracking-wider text-primary sm:text-base md:text-lg">
                Reino Eco Fungi
              </span>
              <span className="hidden text-[10px] text-muted-foreground sm:block">
                Micologia Tropical
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="group relative font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                {t(item.key)}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform group-hover:scale-x-100"
                />
              </motion.a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSelector />
            
            {/* Mobile menu button */}
            <motion.button
              className="rounded-lg p-2 text-foreground hover:bg-muted lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className="overflow-hidden lg:hidden"
          initial={false}
          animate={{ 
            height: mobileMenuOpen ? 'auto' : 0,
            opacity: mobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="border-t border-border/30 py-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="block py-3 font-body text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 8 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};
