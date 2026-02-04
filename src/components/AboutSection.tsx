import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { FlaskConical, Leaf, Sun } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();

  const y = useParallax(scrollYProgress, 80);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
  const rotateCard = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);

  const highlights = [
    { icon: FlaskConical, key: 'about.highlight.1' },
    { icon: Leaf, key: 'about.highlight.2' },
    { icon: Sun, key: 'about.highlight.3' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-muted/30 py-24" ref={ref}>
      {/* Parallax background elements */}
      <motion.div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
        style={{ y: useTransform(y, v => -v * 0.5) }}
      />

      <div className="section-container">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          style={{ opacity, scale }}
        >
          {/* Image/Visual side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            style={{ rotateZ: rotateCard }}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <div className="h-full w-full overflow-hidden rounded-3xl bg-card">
                <img
                  src="/sobre.jpeg"
                  alt="Jéssika - Bióloga & Micologista"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating badges with enhanced parallax */}
            <motion.div
              className="absolute -right-4 top-8 rounded-xl border border-border bg-background px-4 py-3 shadow-lg"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -5 }}
              animate={{ y: [0, -10, 0] }}
            >
              <span className="text-2xl">🇧🇷</span>
              <span className="ml-2 text-sm font-medium text-foreground">Brasil</span>
            </motion.div>

            <motion.div
              className="absolute -left-4 bottom-8 rounded-xl border border-border bg-background px-4 py-3 shadow-lg"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.1, y: 5 }}
              animate={{ y: [0, 10, 0] }}
            >
              <span className="text-sm font-medium text-primary">🌡️ Clima Tropical</span>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
          >
            <motion.h2
              className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              className="mb-8 font-body text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t('about.description')}
            </motion.p>

            {/* Highlights with stagger animation */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.key}
                  className="flex items-center gap-4 rounded-xl border border-border/50 bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md"
                  initial={{ opacity: 0, x: 80, rotateX: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 80
                  }}
                  whileHover={{ x: 12, scale: 1.02, boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)' }}
                >
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <span className="font-body font-medium text-foreground">{t(item.key)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
