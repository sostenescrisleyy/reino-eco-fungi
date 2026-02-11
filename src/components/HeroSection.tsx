import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FloatingElements } from './FloatingElements';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.9]);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 flex items-center">
      <FloatingElements />

      {/* Background gradient orbs with parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 150]) }}
      >
        <div className="absolute -left-1/4 top-0 h-[200px] w-[200px] rounded-full bg-primary/5 blur-3xl sm:h-[300px] sm:w-[300px] md:h-[500px] md:w-[500px]" />
        <div className="absolute -right-1/4 bottom-0 h-[150px] w-[150px] rounded-full bg-secondary/10 blur-3xl sm:h-[250px] sm:w-[250px] md:h-[400px] md:w-[400px]" />
      </motion.div>

      <motion.div
        className="section-container relative z-10 w-full grid gap-8 lg:gap-12 lg:grid-cols-2 items-center py-12 md:py-20"
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
      >
        <motion.div
          className="max-w-4xl px-2 text-center sm:px-0 lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Brand Badge */}
          <motion.div
            className="mb-3 inline-flex flex-col items-center lg:items-start gap-1 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <motion.div
              className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 sm:px-4 sm:py-1.5"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-3 w-3 text-secondary" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">Reino Eco Fungi</span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-3 font-display text-2xl font-bold leading-tight text-foreground sm:mb-4 sm:text-3xl md:mb-5 md:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-gradient">{t('hero.title')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mx-auto lg:mx-0 mb-5 max-w-xs font-body text-sm text-muted-foreground sm:mb-6 sm:max-w-md sm:text-base md:mb-8 md:max-w-xl md:text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary group w-full px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.cta.consultation')}
              <motion.span
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.span>
            </motion.a>

            <motion.a
              href="#services"
              className="btn-secondary w-full px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.cta.courses')}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src="/imagem01.jpeg"
              alt="Cultivo de Cogumelos"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            className="absolute -left-12 bottom-12 bg-background/90 backdrop-blur-md p-4 rounded-xl border border-primary/20 shadow-xl z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/20 p-2 rounded-full">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-semibold">Resultados</p>
                <p className="text-sm font-bold text-foreground">Comprovados</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/30 p-1.5 sm:h-12 sm:w-7 sm:p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="h-1.5 w-1 rounded-full bg-primary sm:h-2"
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
