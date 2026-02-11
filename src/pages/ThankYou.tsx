import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, BookOpen, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[350px] w-[350px] rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          {/* Success Icon */}
          <motion.div
            className="mb-6 inline-flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring', stiffness: 100 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary sm:h-24 sm:w-24">
                <CheckCircle className="h-10 w-10 text-primary-foreground sm:h-12 sm:w-12" />
              </div>
            </div>
          </motion.div>

          {/* Brand */}
          <motion.div
            className="mb-4 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-2xl">🍄</span>
            <span className="font-display text-lg font-bold uppercase tracking-wider text-primary">
              Reino Eco Fungi
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Parabéns pela sua compra! 🎉
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-8 text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Você deu o primeiro passo para dominar o cultivo de cogumelos em clima tropical!
          </motion.p>

          {/* Info Card */}
          <motion.div
            className="mb-8 rounded-2xl border border-border bg-card p-6 text-left shadow-lg sm:p-8"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
          >
            <h2 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold text-foreground">
              <BookOpen className="h-5 w-5 text-primary" />
              Próximos Passos
            </h2>

            <ul className="space-y-4 text-muted-foreground">
              <motion.li
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</span>
                <span>Verifique seu e-mail para acessar o conteúdo do curso na plataforma Kiwify.</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</span>
                <span>Acesse a área de membros e comece seus estudos imediatamente.</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">3</span>
                <span>Entre no grupo exclusivo de alunos para tirar dúvidas e compartilhar experiências.</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a
              href="mailto:contato@reinoecofungi.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Dúvidas? Entre em contato
            </a>
            <span className="hidden text-muted-foreground/30 sm:block">|</span>
            <a
              href="https://wa.me/5562993933972"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Suporte via WhatsApp
            </a>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Voltar para o site
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="absolute bottom-6 text-center text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          © {new Date().getFullYear()} Reino Eco Fungi. Todos os direitos reservados.
        </motion.p>
      </div>
    </div>
  );
};

export default ThankYou;
