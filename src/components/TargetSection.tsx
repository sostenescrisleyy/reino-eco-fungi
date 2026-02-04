import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { Sprout, Users, Sun, FlaskConical, Leaf } from 'lucide-react';

export const TargetSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  
  const y = useParallax(scrollYProgress, 60);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  const targets = [
    { icon: Sprout, key: 'target.1' },
    { icon: Users, key: 'target.2' },
    { icon: Sun, key: 'target.3' },
    { icon: FlaskConical, key: 'target.4' },
    { icon: Leaf, key: 'target.5' },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24" ref={ref}>
      {/* Parallax background */}
      <motion.div 
        className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="pointer-events-none absolute -right-20 bottom-1/3 h-48 w-48 rounded-full bg-secondary/10 blur-3xl"
        style={{ y: useTransform(y, v => -v * 0.5) }}
      />

      <div className="section-container">
        <motion.div
          className="mb-10 text-center sm:mb-12 md:mb-16"
          style={{ scale }}
        >
          <motion.h2
            className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {t('target.title')}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {targets.map((target, index) => (
            <motion.div
              key={target.key}
              className="card-nature group cursor-pointer p-4 text-center sm:p-6"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: 'spring',
                stiffness: 80
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)'
              }}
            >
              <motion.div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20 sm:mb-4 sm:h-16 sm:w-16"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <target.icon className="h-6 w-6 text-primary sm:h-8 sm:w-8" />
              </motion.div>
              <p className="font-body text-xs font-medium text-foreground sm:text-sm">{t(target.key)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
