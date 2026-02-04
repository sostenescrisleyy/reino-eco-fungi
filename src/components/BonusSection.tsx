import { motion } from 'framer-motion';
import { Gift, FileText, Users, Headphones, Download, Star } from 'lucide-react';

const bonuses = [
  {
    icon: FileText,
    title: "E-book Exclusivo",
    description: "Guia completo de identificação de contaminações com fotos reais",
    value: "R$ 97",
    color: "bg-emerald-500"
  },
  {
    icon: Users,
    title: "Comunidade VIP",
    description: "Acesso ao grupo exclusivo de alunos no Telegram para networking",
    value: "R$ 197",
    color: "bg-teal-500"
  },
  {
    icon: Headphones,
    title: "Suporte por 90 dias",
    description: "Tire suas dúvidas diretamente com a especialista",
    value: "R$ 297",
    color: "bg-cyan-500"
  },
  {
    icon: Download,
    title: "Planilhas de Controle",
    description: "Templates prontos para gerenciar sua produção",
    value: "R$ 47",
    color: "bg-amber-500"
  }
];

export const BonusSection = () => {
  const totalValue = bonuses.reduce((acc, bonus) => {
    const value = parseInt(bonus.value.replace(/\D/g, ''));
    return acc + value;
  }, 0);

  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6"
          >
            <Gift className="w-4 h-4 text-secondary" />
            Bônus Exclusivos
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            Leve Mais Por Menos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Ao se inscrever hoje, você recebe esses bônus especiais sem custo adicional
          </p>
        </motion.div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-12 h-12 ${bonus.color} rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <bonus.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {bonus.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {bonus.description}
                </p>

                {/* Value */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground line-through">{bonus.value}</span>
                  <span className="text-sm font-semibold text-primary">GRÁTIS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Value Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Valor total dos bônus
              </span>
              <Star className="w-5 h-5 text-secondary fill-secondary" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl md:text-3xl text-muted-foreground line-through">
                R$ {totalValue}
              </span>
              <span className="font-display text-4xl md:text-5xl font-bold text-primary">
                GRÁTIS
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Incluído na sua inscrição hoje
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};