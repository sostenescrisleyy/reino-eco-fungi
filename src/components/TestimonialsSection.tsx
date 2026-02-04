import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  
  const y = useParallax(scrollYProgress, 70);
  const cardRotate1 = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
  const cardRotate2 = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);

  const testimonials = [
    { quote: 'testimonials.1', author: 'testimonials.author1' },
    { quote: 'testimonials.2', author: 'testimonials.author2' },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24" ref={ref}>
      {/* Parallax background decoration */}
      <motion.div 
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:h-80 sm:w-80"
        style={{ y }}
      />
      <motion.div 
        className="pointer-events-none absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
        style={{ y: useTransform(y, v => -v * 0.6) }}
      />
      
      <div className="section-container relative z-10">
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
            {t('testimonials.title')}
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.quote}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:rounded-3xl sm:p-8"
              initial={{ opacity: 0, x: index === 0 ? -80 : 80, rotateY: index === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.7, type: 'spring' }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -15px rgba(0,0,0,0.15)' }}
              style={{ rotateZ: index === 0 ? cardRotate1 : cardRotate2 }}
            >
              {/* Decorative gradient */}
              <motion.div 
                className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 transition-all group-hover:scale-[2] group-hover:bg-primary/20 sm:-right-8 sm:-top-8 sm:h-24 sm:w-24"
              />
              
              <div className="relative">
                {/* Quote icon */}
                <motion.div
                  className="mb-4 sm:mb-6"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Quote className="h-8 w-8 text-primary/30 sm:h-10 sm:w-10" />
                </motion.div>

                {/* Stars with stagger animation */}
                <div className="mb-3 flex gap-1 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.2 + i * 0.08, 
                        duration: 0.4,
                        type: 'spring'
                      }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      <Star className="h-4 w-4 fill-secondary text-secondary sm:h-5 sm:w-5" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="mb-4 font-display text-lg font-medium italic text-foreground sm:mb-6 sm:text-xl">
                  {t(testimonial.quote)}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-primary/20 sm:h-10 sm:w-10"
                    whileHover={{ scale: 1.1 }}
                  />
                  <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {t(testimonial.author)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
