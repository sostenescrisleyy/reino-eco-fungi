import { motion } from 'framer-motion';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

export const Footer = () => {
  const { ref, scrollYProgress } = useScrollAnimation();
  const y = useParallax(scrollYProgress, 30);

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card py-8 md:py-12" ref={ref}>
      {/* Parallax background */}
      <motion.div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y }}
      />

      <div className="section-container relative z-10 flex flex-col items-center justify-center gap-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Reino Eco Fungi. Todos os direitos reservados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href="https://mavenestudio.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Desenvolvido por Maven Estúdio
          </a>
        </motion.div>
      </div>
    </footer>
  );
};
