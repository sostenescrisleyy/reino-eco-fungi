import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  
  const y = useParallax(scrollYProgress, 80);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 md:py-24" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Parallax decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-5 top-10 h-32 w-32 rounded-full bg-white/5 sm:left-10 sm:h-64 sm:w-64"
          style={{ y, rotate }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-5 h-24 w-24 rounded-full bg-secondary/20 sm:right-10 sm:h-48 sm:w-48"
          style={{ y: useTransform(y, v => -v * 0.6) }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        
        {/* Floating spores */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/20 sm:h-4 sm:w-4"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          style={{ scale }}
        >
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 sm:mb-6 sm:px-4 sm:py-2"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            <Sparkles className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-white/90 sm:text-sm">🍄 Reino Eco Fungi</span>
          </motion.div>

          <motion.h2
            className="mb-6 px-4 font-display text-2xl font-bold text-white sm:mb-8 sm:px-0 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            {t('cta.title')}
          </motion.h2>

          <motion.a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-2xl transition-all hover:bg-white/95 sm:gap-3 sm:px-8 sm:py-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg">👉</span>
            <span className="text-sm sm:text-base">{t('cta.button')}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
