import { motion } from 'framer-motion';
import { Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Left side - Visual */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                  className="relative mb-6"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150" />
                  
                  {/* Shield icon */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                    <Shield className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="font-display text-6xl md:text-8xl font-bold text-white">7</span>
                  <p className="text-lg md:text-xl font-medium text-white/90 mt-2">dias de garantia</p>
                </motion.div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                    Garantia Incondicional
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Estou tão confiante na qualidade do curso que ofereço 7 dias de garantia total. 
                    Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento.
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Sem perguntas ou burocracia",
                      "Reembolso em até 7 dias úteis",
                      "Risco zero para você"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href="#servicos"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Quero Começar Sem Risco
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Dados Protegidos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};