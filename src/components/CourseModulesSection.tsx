import { motion } from 'framer-motion';
import { BookOpen, Sprout, TrendingUp, Check, ArrowRight } from 'lucide-react';

const modules = [
  {
    id: 1,
    icon: BookOpen,
    title: "Biologia dos Fungos",
    number: "01",
    accent: "from-emerald-500/10 to-teal-500/5",
    iconBg: "bg-emerald-500",
    topics: [
      "Introdução",
      "Conhecimentos gerais",
      "Modo de vida e classificações",
      "Cogumelos"
    ]
  },
  {
    id: 2,
    icon: Sprout,
    title: "Começando do Zero",
    subtitle: "Cultivo de Shimeji branco (Pleurotus ostreatus)",
    number: "02",
    accent: "from-teal-500/10 to-cyan-500/5",
    iconBg: "bg-teal-500",
    topics: [
      "Facilidade no cultivo passo a passo",
      "Adquira Spawns",
      "Substrato para cultivo",
      "Higiene e incubação",
      "Armazenamento de cultivo",
      "Práticas de cultivo",
      "Frutificação e ventilação",
      "Formação de cogumelos e colheita",
      "Pós-colheita",
      "Erros comuns na produção",
      "Principais agentes contaminantes",
      "Equipamentos de cultivo para iniciantes",
      "Resultados de clientes"
    ]
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Avançando a Produção",
    subtitle: "Cultivo de Shiitake (Lentinula edodes)",
    number: "03",
    accent: "from-amber-500/10 to-orange-500/5",
    iconBg: "bg-amber-500",
    topics: [
      "Qualidade do Spawn",
      "Métodos de cultivo",
      "Higiene e controle de contaminação",
      "Práticas para cultivo em toras",
      "Práticas para cultivo em blocos",
      "Controle climático",
      "Indução da frutificação",
      "Colheita",
      "Pós-colheita",
      "Resultados de clientes"
    ]
  }
];

export const CourseModulesSection = () => {
  return (
    <section id="modulos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Conteúdo Completo
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            O Que Você Vai Aprender
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Uma jornada completa do básico ao avançado, com método comprovado
          </p>
        </motion.div>

        {/* Modules */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl md:rounded-3xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-r ${module.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6 md:p-8">
                  {/* Module Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                    {/* Number & Icon */}
                    <div className="flex items-center gap-4">
                      <span className="font-display text-4xl md:text-5xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-300">
                        {module.number}
                      </span>
                      <div className={`w-12 h-12 rounded-xl ${module.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                        <module.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                        {module.title}
                      </h3>
                      {module.subtitle && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {module.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Badge */}
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      {module.topics.length} aulas
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {module.topics.map((topic, topicIndex) => (
                      <motion.div
                        key={topicIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + topicIndex * 0.02 }}
                        className="flex items-center gap-3 py-2 group/item"
                      >
                        <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {topic}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-10">
            {[
              { value: "3", label: "Módulos" },
              { value: "27+", label: "Aulas" },
              { value: "100%", label: "Online" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <motion.a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Começar Agora
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
