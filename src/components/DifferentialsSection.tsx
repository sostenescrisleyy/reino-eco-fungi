import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { FlaskConical, Sun, Cog, Microscope, Leaf } from 'lucide-react';

export const DifferentialsSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  
  const y = useParallax(scrollYProgress, 100);
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  const differentials = [
    { icon: FlaskConical, key: 'diff.1', color: 'primary' },
    { icon: Sun, key: 'diff.2', color: 'secondary' },
    { icon: Cog, key: 'diff.3', color: 'primary' },
    { icon: Microscope, key: 'diff.4', color: 'secondary' },
    { icon: Leaf, key: 'diff.5', color: 'primary' },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24" ref={ref}>
      {/* Parallax background orbs */}
      <motion.div 
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="pointer-events-none absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
        style={{ y: useTransform(y, v => -v * 0.6) }}
      />

      <div className="section-container">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <motion.h2 
            className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t('diff.title')}
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border/30 lg:block">
            <motion.div 
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary via-secondary to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-6 lg:space-y-0">
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.key}
                className={`flex items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -120 : 120,
                  rotateY: index % 2 === 0 ? -20 : 20
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.12, 
                  duration: 0.7,
                  type: 'spring',
                  stiffness: 60
                }}
              >
                {/* Content */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className={`card-nature inline-flex items-center gap-4 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                    whileHover={{ 
                      boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)',
                      y: -5
                    }}
                  >
                    <motion.div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                        diff.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/20'
                      }`}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <diff.icon
                        className={`h-7 w-7 ${
                          diff.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`}
                      />
                    </motion.div>
                    <span className="font-body text-lg font-medium text-foreground">
                      {t(diff.key)}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Center dot with pulse */}
                <motion.div
                  className="relative hidden h-5 w-5 shrink-0 lg:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.3, type: 'spring' }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                  <div className="absolute inset-0.5 rounded-full border-4 border-background bg-primary shadow-lg" />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
