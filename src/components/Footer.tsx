import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  const y = useParallax(scrollYProgress, 30);

  const links = [
    { key: 'footer.about', href: '#about' },
    { key: 'footer.services', href: '#services' },
    { key: 'footer.contact', href: '#contact' },
    { key: 'footer.privacy', href: '#' },
    { key: 'footer.terms', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card py-12 md:py-16" ref={ref}>
      {/* Parallax background */}
      <motion.div 
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="#"
              className="mb-4 flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary sm:h-12 sm:w-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xl sm:text-2xl">🍄</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold uppercase tracking-wider text-primary sm:text-xl">
                  Reino Eco Fungi
                </span>
                <span className="text-xs text-muted-foreground">
                  Micologia Tropical
                </span>
              </div>
            </motion.a>
            <p className="max-w-sm text-sm text-muted-foreground">
              Soluções práticas e científicas para o cultivo de cogumelos em climas tropicais.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Links
            </h4>
            <nav className="flex flex-col gap-2">
              {links.slice(0, 3).map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Social
            </h4>
            <div className="mb-6 flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <nav className="flex flex-col gap-2">
              {links.slice(3).map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  whileHover={{ x: 5 }}
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="mt-8 border-t border-border pt-8 text-center md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} Reino Eco Fungi. {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
