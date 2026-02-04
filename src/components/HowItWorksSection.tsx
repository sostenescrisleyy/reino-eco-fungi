import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { MousePointerClick, Calendar, Video, Sprout } from 'lucide-react';

export const HowItWorksSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  
  const y = useParallax(scrollYProgress, 50);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  const steps = [
    { icon: MousePointerClick, key: 'how.step1', number: 1 },
    { icon: Calendar, key: 'how.step2', number: 2 },
    { icon: Video, key: 'how.step3', number: 3 },
    { icon: Sprout, key: 'how.step4', number: 4 },
  ];

  return (
    <section className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 md:py-24" ref={ref}>
      {/* Parallax backgrounds */}
      <motion.div 
        className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="pointer-events-none absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
        style={{ y: useTransform(y, v => -v * 0.7) }}
      />

      <div className="section-container">
        <motion.div
          className="mb-10 text-center sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <motion.h2
            className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t('how.title')}
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Animated connection line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-border/30 lg:block sm:top-12">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                className="relative text-center"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 80
                }}
              >
                {/* Step number with enhanced animations */}
                <motion.div
                  className="relative z-10 mx-auto mb-4 sm:mb-6"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div 
                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-primary shadow-xl sm:h-20 sm:w-20"
                    whileHover={{ boxShadow: '0 15px 40px -10px rgba(0,0,0,0.25)' }}
                  >
                    <step.icon className="h-6 w-6 text-primary-foreground sm:h-8 sm:w-8" />
                  </motion.div>
                  <motion.div 
                    className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground shadow-md sm:-right-2 sm:-top-2 sm:h-8 sm:w-8 sm:text-sm"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Step text */}
                <motion.div
                  className="card-nature p-3 sm:p-4"
                  whileHover={{ y: -8, boxShadow: '0 15px 30px -10px rgba(0,0,0,0.12)' }}
                >
                  <p className="font-body text-xs font-medium text-foreground sm:text-sm">
                    {t(step.key)}
                  </p>
                </motion.div>

                {/* Animated arrow between steps */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute -right-2 top-8 hidden text-xl text-primary/40 lg:block sm:-right-4 sm:top-10 sm:text-2xl"
                    animate={{ x: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
