import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

export const FAQSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();
  
  const y = useParallax(scrollYProgress, 50);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);

  const faqItems = [
    { question: 'faq.q1', answer: 'faq.a1' },
    { question: 'faq.q2', answer: 'faq.a2' },
    { question: 'faq.q3', answer: 'faq.a3' },
    { question: 'faq.q4', answer: 'faq.a4' },
    { question: 'faq.q5', answer: 'faq.a5' },
    { question: 'faq.q6', answer: 'faq.a6' },
    { question: 'faq.q7', answer: 'faq.a7' },
    { question: 'faq.q8', answer: 'faq.a8' },
  ];

  return (
    <section 
      id="faq" 
      className="relative overflow-hidden bg-muted/30 py-24" 
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div 
        className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
        style={{ y: useTransform(y, v => -v) }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="mb-16 text-center"
          style={{ opacity, scale }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </motion.div>
          
          <motion.h2 
            className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('faq.title')}
          </motion.h2>
          
          <motion.p
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('faq.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl border border-border/50 bg-background px-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md data-[state=open]:border-primary/50 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground transition-colors hover:no-underline hover:text-primary sm:text-lg [&[data-state=open]]:text-primary">
                    <motion.span
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                        {index + 1}
                      </span>
                      {t(item.question)}
                    </motion.span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pt-0 text-muted-foreground">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-11"
                    >
                      {t(item.answer)}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            {t('faq.more')}
          </p>
          <motion.a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('faq.contact')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
