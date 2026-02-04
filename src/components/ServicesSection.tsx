import { motion, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';
import { Video, GraduationCap, Check, ArrowRight, MessageCircle, ShoppingCart } from 'lucide-react';

// Substitua pelo seu número de WhatsApp
const WHATSAPP_NUMBER = '5500000000000';
const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Tenho interesse na consultoria personalizada de cultivo de cogumelos.');

// Substitua pelo seu link de checkout da Kiwify
const KIWIFY_CHECKOUT_URL = 'https://pay.kiwify.com.br/SEU_LINK_AQUI';

export const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref, scrollYProgress } = useScrollAnimation();

  const y = useParallax(scrollYProgress, 60);

  const consultationItems = [
    'services.consultation.item1',
    'services.consultation.item2',
    'services.consultation.item3',
    'services.consultation.item4',
  ];

  const consultationFormats = [
    'services.consultation.format1',
    'services.consultation.format2',
  ];

  const courseItems = [
    'services.courses.item1',
    'services.courses.item2',
    'services.courses.item3',
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-muted/30 py-16 sm:py-20 md:py-24" ref={ref}>
      {/* Parallax background decorations */}
      <motion.div
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96"
        style={{ y }}
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-1/4 h-48 w-48 rounded-full bg-primary/5 blur-3xl sm:h-64 sm:w-64"
        style={{ y: useTransform(y, v => -v * 0.7) }}
      />

      <div className="section-container relative z-10">
        <motion.div
          className="mb-10 text-center sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          <motion.h2
            className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {t('services.title')}
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Consultation Card - WhatsApp */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-lg transition-all hover:shadow-2xl sm:rounded-3xl sm:p-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
            whileHover={{ y: -8 }}
          >
            {/* Badge personalizado */}
            <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Personalizado
            </div>

            {/* Imagem de Capa do Card */}
            <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden sm:-mx-8 sm:-mt-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)]">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
              <img
                src="/imagem03.jpeg"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Consultoria"
              />
            </div>

            {/* Gradient overlay on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground sm:h-14 sm:w-14">
                  <Video className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <span className="text-sm text-secondary">🧪</span>
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {t('services.consultation.title')}
                  </h3>
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-3 font-semibold text-foreground">{t('services.consultation.includes')}</p>
                <ul className="space-y-2">
                  {consultationItems.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground sm:text-base"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    >
                      <Check className="h-4 w-4 shrink-0 text-secondary sm:h-5 sm:w-5" />
                      <span>{t(item)}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="mb-3 font-semibold text-foreground">{t('services.consultation.format')}</p>
                <ul className="space-y-2">
                  {consultationFormats.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-muted-foreground sm:text-base"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-6 text-sm font-medium text-primary">{t('services.consultation.payment')}</p>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#20BA5C] sm:w-auto sm:px-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Image Overlay */}
            <div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-5 pointer-events-none">
              <img src="/imagem03.jpeg" className="w-full h-full object-cover grayscale" alt="" />
            </div>
          </motion.div>

          {/* Courses Card - Kiwify */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl border border-secondary/30 bg-background p-6 shadow-lg transition-all hover:shadow-2xl sm:rounded-3xl sm:p-8"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, type: 'spring', stiffness: 60 }}
            whileHover={{ y: -8 }}
          >
            {/* Badge destaque */}
            <div className="absolute right-4 top-4 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-sm">
              Mais vendido
            </div>

            {/* Imagem de Capa do Card */}
            <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden sm:-mx-8 sm:-mt-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)]">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
              <img
                src="/imagem02.jpeg"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Curso de Cogumelos"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground sm:h-14 sm:w-14">
                  <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <span className="text-sm">🎓</span>
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {t('services.courses.title')}
                  </h3>
                </div>
              </div>

              <ul className="mb-6 space-y-3">
                {courseItems.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-sm text-muted-foreground sm:text-base"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <Check className="h-4 w-4 shrink-0 text-secondary sm:h-5 sm:w-5" />
                    <span>{t(item)}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="mb-4 text-sm text-muted-foreground">{t('services.courses.format')}</p>

              {/* Preço */}
              <div className="mb-6 rounded-xl bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">Investimento:</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-foreground">R$ 297</span>
                  <span className="text-lg text-muted-foreground">,90</span>
                </div>
                <p className="text-xs text-muted-foreground">ou em até 12x no cartão</p>
              </div>

              <motion.a
                href={KIWIFY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-lg transition-all hover:bg-secondary/90 sm:w-auto sm:px-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="h-5 w-5" />
                Garantir Minha Vaga
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
