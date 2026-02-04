import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, X, Flame } from 'lucide-react';

export const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [spots, setSpots] = useState(7);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.4, type: 'spring' }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary to-emerald-600 text-primary-foreground"
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between py-2">
            {/* Left side - Mobile: simplified, Desktop: full */}
            <div className="flex items-center gap-2 md:gap-6 flex-1">
              {/* Flame icon */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="hidden sm:flex items-center gap-1.5"
              >
                <Flame className="w-4 h-4 text-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wide">Oferta</span>
              </motion.div>

              {/* Timer */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 opacity-80" />
                <div className="flex items-center gap-1 font-mono font-bold text-sm md:text-base">
                  <span className="bg-white/20 px-1.5 py-0.5 rounded">{formatNumber(timeLeft.hours)}</span>
                  <span>:</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded">{formatNumber(timeLeft.minutes)}</span>
                  <span>:</span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded">{formatNumber(timeLeft.seconds)}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-5 bg-white/30" />

              {/* Spots left */}
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 opacity-80" />
                <span className="text-xs md:text-sm">
                  <span className="font-bold">{spots} vagas</span>
                  <span className="hidden sm:inline"> restantes</span>
                </span>
              </div>
            </div>

            {/* CTA Button - Desktop only */}
            <motion.a
              href="#servicos"
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 bg-white text-primary rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Garantir Minha Vaga
            </motion.a>

            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="ml-3 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div 
          className="h-0.5 bg-secondary"
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: 86400, ease: 'linear' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};