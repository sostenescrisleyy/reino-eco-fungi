import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5562993933972';

export const FloatingWhatsApp = () => {
    return (
        <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#20BA5C] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="sr-only">Falar no WhatsApp</span>

            {/* Pulse effect */}
            <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.a>
    );
};
