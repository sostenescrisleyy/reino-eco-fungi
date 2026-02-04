import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.title': 'Cultivo de Cogumelos e Consultoria em Micologia para Climas Tropicais',
    'hero.subtitle': 'Soluções práticas e baseadas na ciência para produtores, pesquisadores e pequenos cultivadores em regiões de clima quente.',
    'hero.cta.consultation': 'Agendar Consultoria',
    'hero.cta.courses': 'Ver Cursos',
    
    // About
    'about.title': 'Quem Sou Eu',
    'about.description': 'Sou Jéssika, bióloga no Brasil, especializada em cultivo de cogumelos em condições tropicais. Auxilio produtores e pequenos cultivadores a otimizar a produção de spawn (sementes), a formulação de substratos e o controle de contaminações, utilizando métodos práticos e cientificamente fundamentados.',
    'about.highlight.1': 'Bióloga',
    'about.highlight.2': 'Experiência prática em produção de spawn',
    'about.highlight.3': 'Foco em climas tropicais e subtropicais',
    
    // Target
    'target.title': 'Para Quem É',
    'target.1': 'Iniciantes no cultivo de cogumelos',
    'target.2': 'Pequenos produtores',
    'target.3': 'Cultivadores em clima tropical',
    'target.4': 'Pesquisadores e laboratórios',
    'target.5': 'Projetos de agricultura sustentável',
    
    // Services
    'services.title': 'Serviços',
    'services.consultation.title': 'Consultoria Online',
    'services.consultation.includes': 'Inclui:',
    'services.consultation.item1': 'Diagnóstico de contaminações',
    'services.consultation.item2': 'Otimização da produção de spawn',
    'services.consultation.item3': 'Formulação de substratos',
    'services.consultation.item4': 'Ajustes de incubação e ambiente',
    'services.consultation.format': 'Formato:',
    'services.consultation.format1': 'Chamada online de 60 minutos',
    'services.consultation.format2': 'Plano de ação escrito após a consultoria',
    'services.consultation.payment': 'Pagamento: USD / EUR',
    'services.courses.title': 'Cursos e Mentorias',
    'services.courses.item1': 'Fundamentos do cultivo de cogumelos',
    'services.courses.item2': 'Produção de spawn do zero',
    'services.courses.item3': 'Desafios do cultivo em clima tropical',
    'services.courses.format': 'Formato: cursos gravados + mentorias ao vivo.',
    
    // Differentials
    'diff.title': 'Diferenciais',
    'diff.1': 'Bióloga com experiência prática',
    'diff.2': 'Especialização em clima tropical',
    'diff.3': 'Métodos práticos e replicáveis',
    'diff.4': 'Abordagem científica',
    'diff.5': 'Foco em sustentabilidade',
    
    // How it works
    'how.title': 'Como Funciona',
    'how.step1': 'Escolha o serviço',
    'how.step2': 'Agende a consultoria ou inscreva-se no curso',
    'how.step3': 'Realize a sessão online ou acesse o conteúdo',
    'how.step4': 'Aplique as técnicas no seu cultivo',
    
    // Testimonials
    'testimonials.title': 'Depoimentos',
    'testimonials.1': '"A consultoria ajudou a resolver problemas de contaminação em poucas semanas."',
    'testimonials.2': '"Explicações claras e orientações muito práticas."',
    'testimonials.author1': '— Produtor Rural, SP',
    'testimonials.author2': '— Pesquisadora, RJ',
    
    // CTA
    'cta.title': 'Pronta para melhorar seus resultados no cultivo de cogumelos?',
    'cta.button': 'Agende sua Consultoria Agora',
    
    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Tire suas dúvidas sobre cultivo de cogumelos em clima tropical',
    'faq.q1': 'Quais cogumelos são mais indicados para clima tropical?',
    'faq.a1': 'As espécies mais adaptadas ao clima tropical incluem Pleurotus ostreatus (cogumelo ostra), Pleurotus djamor (cogumelo rosa), Lentinula edodes (shiitake) e Volvariella volvacea. Cada espécie tem suas particularidades de temperatura e umidade ideais.',
    'faq.q2': 'Como controlar a temperatura em regiões quentes?',
    'faq.a2': 'É possível utilizar técnicas como cultivo em ambientes sombreados, uso de materiais isolantes, ventilação adequada, e até sistemas de climatização simples. A escolha de espécies tolerantes ao calor também é fundamental.',
    'faq.q3': 'Qual o maior desafio do cultivo em clima tropical?',
    'faq.a3': 'O controle de contaminações é o principal desafio. Temperaturas elevadas e alta umidade favorecem o crescimento de fungos competidores e bactérias. Boas práticas de higiene e substratos bem pasteurizados são essenciais.',
    'faq.q4': 'Quanto tempo leva para ter a primeira colheita?',
    'faq.a4': 'Depende da espécie. Cogumelos ostra podem frutificar em 3-4 semanas após a inoculação. Shiitake pode levar de 2 a 6 meses. O spawn de qualidade e condições adequadas aceleram o processo.',
    'faq.q5': 'Preciso de equipamentos caros para começar?',
    'faq.a5': 'Não necessariamente. É possível iniciar com estruturas simples e materiais acessíveis. O mais importante é entender os princípios básicos de higiene, pasteurização e controle ambiental.',
    'faq.q6': 'O que é spawn e como produzi-lo?',
    'faq.a6': 'Spawn é o "semente" do cogumelo, grãos colonizados pelo micélio. A produção requer técnicas de esterilização e inoculação. Na consultoria, ensino métodos práticos adaptados à sua realidade.',
    'faq.q7': 'Posso cultivar cogumelos em apartamento?',
    'faq.a7': 'Sim! Cogumelos ostra e outras espécies podem ser cultivados em espaços pequenos, desde que haja controle de luz, umidade e ventilação. Kits de cultivo são uma ótima opção para iniciantes.',
    'faq.q8': 'Como a consultoria pode me ajudar?',
    'faq.a8': 'A consultoria oferece diagnóstico personalizado dos seus desafios, orientações práticas baseadas na ciência, e um plano de ação específico para suas condições de cultivo e objetivos.',
    'faq.more': 'Ainda tem dúvidas?',
    'faq.contact': 'Entre em contato →',

    // Footer
    'footer.about': 'Sobre',
    'footer.services': 'Serviços',
    'footer.contact': 'Contato',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.rights': 'Todos os direitos reservados.',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Cultivo de Hongos y Consultoría en Micología para Climas Tropicales',
    'hero.subtitle': 'Soluciones prácticas y basadas en la ciencia para productores, investigadores y pequeños cultivadores en regiones de clima cálido.',
    'hero.cta.consultation': 'Agendar Consultoría',
    'hero.cta.courses': 'Ver Cursos',
    
    // About
    'about.title': 'Quién Soy',
    'about.description': 'Soy Jéssika, bióloga en Brasil, especializada en cultivo de hongos en condiciones tropicales. Ayudo a productores y pequeños cultivadores a optimizar la producción de spawn (semillas), la formulación de sustratos y el control de contaminaciones, utilizando métodos prácticos y científicamente fundamentados.',
    'about.highlight.1': 'Bióloga',
    'about.highlight.2': 'Experiencia práctica en producción de spawn',
    'about.highlight.3': 'Enfoque en climas tropicales y subtropicales',
    
    // Target
    'target.title': '¿Para Quién Es?',
    'target.1': 'Principiantes en el cultivo de hongos',
    'target.2': 'Pequeños productores',
    'target.3': 'Cultivadores en clima tropical',
    'target.4': 'Investigadores y laboratorios',
    'target.5': 'Proyectos de agricultura sostenible',
    
    // Services
    'services.title': 'Servicios',
    'services.consultation.title': 'Consultoría Online',
    'services.consultation.includes': 'Incluye:',
    'services.consultation.item1': 'Diagnóstico de contaminaciones',
    'services.consultation.item2': 'Optimización de la producción de spawn',
    'services.consultation.item3': 'Formulación de sustratos',
    'services.consultation.item4': 'Ajustes de incubación y ambiente',
    'services.consultation.format': 'Formato:',
    'services.consultation.format1': 'Llamada online de 60 minutos',
    'services.consultation.format2': 'Plan de acción escrito después de la consultoría',
    'services.consultation.payment': 'Pago: USD / EUR',
    'services.courses.title': 'Cursos y Mentorías',
    'services.courses.item1': 'Fundamentos del cultivo de hongos',
    'services.courses.item2': 'Producción de spawn desde cero',
    'services.courses.item3': 'Desafíos del cultivo en clima tropical',
    'services.courses.format': 'Formato: cursos grabados + mentorías en vivo.',
    
    // Differentials
    'diff.title': 'Diferenciales',
    'diff.1': 'Bióloga con experiencia práctica',
    'diff.2': 'Especialización en clima tropical',
    'diff.3': 'Métodos prácticos y replicables',
    'diff.4': 'Enfoque científico',
    'diff.5': 'Enfoque en sostenibilidad',
    
    // How it works
    'how.title': 'Cómo Funciona',
    'how.step1': 'Elige el servicio',
    'how.step2': 'Agenda la consultoría o inscríbete en el curso',
    'how.step3': 'Realiza la sesión online o accede al contenido',
    'how.step4': 'Aplica las técnicas en tu cultivo',
    
    // Testimonials
    'testimonials.title': 'Testimonios',
    'testimonials.1': '"La consultoría ayudó a resolver problemas de contaminación en pocas semanas."',
    'testimonials.2': '"Explicaciones claras y orientaciones muy prácticas."',
    'testimonials.author1': '— Productor Rural, SP',
    'testimonials.author2': '— Investigadora, RJ',
    
    // CTA
    'cta.title': '¿Lista para mejorar tus resultados en el cultivo de hongos?',
    'cta.button': 'Agenda tu Consultoría Ahora',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Resuelve tus dudas sobre el cultivo de hongos en clima tropical',
    'faq.q1': '¿Qué hongos son más indicados para clima tropical?',
    'faq.a1': 'Las especies más adaptadas al clima tropical incluyen Pleurotus ostreatus (seta ostra), Pleurotus djamor (seta rosa), Lentinula edodes (shiitake) y Volvariella volvacea. Cada especie tiene sus particularidades de temperatura y humedad ideales.',
    'faq.q2': '¿Cómo controlar la temperatura en regiones calientes?',
    'faq.a2': 'Es posible utilizar técnicas como cultivo en ambientes sombreados, uso de materiales aislantes, ventilación adecuada, e incluso sistemas de climatización simples. La elección de especies tolerantes al calor también es fundamental.',
    'faq.q3': '¿Cuál es el mayor desafío del cultivo en clima tropical?',
    'faq.a3': 'El control de contaminaciones es el principal desafío. Temperaturas elevadas y alta humedad favorecen el crecimiento de hongos competidores y bacterias. Buenas prácticas de higiene y sustratos bien pasteurizados son esenciales.',
    'faq.q4': '¿Cuánto tiempo tarda la primera cosecha?',
    'faq.a4': 'Depende de la especie. Las setas ostra pueden fructificar en 3-4 semanas después de la inoculación. Shiitake puede tardar de 2 a 6 meses. El spawn de calidad y condiciones adecuadas aceleran el proceso.',
    'faq.q5': '¿Necesito equipos caros para empezar?',
    'faq.a5': 'No necesariamente. Es posible iniciar con estructuras simples y materiales accesibles. Lo más importante es entender los principios básicos de higiene, pasteurización y control ambiental.',
    'faq.q6': '¿Qué es spawn y cómo producirlo?',
    'faq.a6': 'Spawn es la "semilla" del hongo, granos colonizados por el micelio. La producción requiere técnicas de esterilización e inoculación. En la consultoría, enseño métodos prácticos adaptados a tu realidad.',
    'faq.q7': '¿Puedo cultivar hongos en apartamento?',
    'faq.a7': '¡Sí! Las setas ostra y otras especies pueden cultivarse en espacios pequeños, siempre que haya control de luz, humedad y ventilación. Los kits de cultivo son una excelente opción para principiantes.',
    'faq.q8': '¿Cómo puede ayudarme la consultoría?',
    'faq.a8': 'La consultoría ofrece diagnóstico personalizado de tus desafíos, orientaciones prácticas basadas en la ciencia, y un plan de acción específico para tus condiciones de cultivo y objetivos.',
    'faq.more': '¿Todavía tienes dudas?',
    'faq.contact': 'Contáctanos →',

    // Footer
    'footer.about': 'Acerca de',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Mushroom Cultivation & Mycology Consulting for Tropical Climates',
    'hero.subtitle': 'Science-based practical solutions for producers, researchers, and small-scale cultivators in warm climate regions.',
    'hero.cta.consultation': 'Book a Consultation',
    'hero.cta.courses': 'View Courses',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I\'m Jéssika, a biologist in Brazil specializing in mushroom cultivation under tropical conditions. I help producers and small-scale cultivators optimize spawn production, substrate formulation, and contamination control using practical, science-based methods.',
    'about.highlight.1': 'Biologist',
    'about.highlight.2': 'Hands-on experience in spawn production',
    'about.highlight.3': 'Focus on tropical and subtropical climates',
    
    // Target
    'target.title': 'Who Is This For?',
    'target.1': 'Beginners in mushroom cultivation',
    'target.2': 'Small-scale producers',
    'target.3': 'Tropical climate cultivators',
    'target.4': 'Researchers and laboratories',
    'target.5': 'Sustainable agriculture projects',
    
    // Services
    'services.title': 'Services',
    'services.consultation.title': 'Online Consultation',
    'services.consultation.includes': 'Includes:',
    'services.consultation.item1': 'Contamination diagnosis',
    'services.consultation.item2': 'Spawn production optimization',
    'services.consultation.item3': 'Substrate formulation',
    'services.consultation.item4': 'Incubation and environment adjustments',
    'services.consultation.format': 'Format:',
    'services.consultation.format1': '60-minute online call',
    'services.consultation.format2': 'Written action plan after consultation',
    'services.consultation.payment': 'Payment: USD / EUR',
    'services.courses.title': 'Courses & Mentorship',
    'services.courses.item1': 'Mushroom cultivation fundamentals',
    'services.courses.item2': 'Spawn production from scratch',
    'services.courses.item3': 'Tropical climate cultivation challenges',
    'services.courses.format': 'Format: recorded courses + live mentorship.',
    
    // Differentials
    'diff.title': 'Why Choose Me',
    'diff.1': 'Biologist with hands-on experience',
    'diff.2': 'Tropical climate specialization',
    'diff.3': 'Practical and replicable methods',
    'diff.4': 'Scientific approach',
    'diff.5': 'Sustainability focus',
    
    // How it works
    'how.title': 'How It Works',
    'how.step1': 'Choose the service',
    'how.step2': 'Schedule consultation or enroll in course',
    'how.step3': 'Attend online session or access content',
    'how.step4': 'Apply techniques to your cultivation',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.1': '"The consultation helped solve contamination issues in just a few weeks."',
    'testimonials.2': '"Clear explanations and very practical guidance."',
    'testimonials.author1': '— Rural Producer, SP',
    'testimonials.author2': '— Researcher, RJ',
    
    // CTA
    'cta.title': 'Ready to improve your mushroom cultivation results?',
    'cta.button': 'Book Your Consultation Now',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Get answers about mushroom cultivation in tropical climates',
    'faq.q1': 'Which mushrooms are best suited for tropical climates?',
    'faq.a1': 'Species most adapted to tropical climates include Pleurotus ostreatus (oyster mushroom), Pleurotus djamor (pink oyster), Lentinula edodes (shiitake), and Volvariella volvacea. Each species has its own ideal temperature and humidity requirements.',
    'faq.q2': 'How to control temperature in hot regions?',
    'faq.a2': 'You can use techniques such as cultivation in shaded environments, insulating materials, proper ventilation, and even simple cooling systems. Choosing heat-tolerant species is also essential.',
    'faq.q3': 'What is the biggest challenge of tropical cultivation?',
    'faq.a3': 'Contamination control is the main challenge. High temperatures and humidity favor the growth of competing fungi and bacteria. Good hygiene practices and properly pasteurized substrates are essential.',
    'faq.q4': 'How long until the first harvest?',
    'faq.a4': 'It depends on the species. Oyster mushrooms can fruit in 3-4 weeks after inoculation. Shiitake can take 2 to 6 months. Quality spawn and proper conditions speed up the process.',
    'faq.q5': 'Do I need expensive equipment to start?',
    'faq.a5': 'Not necessarily. You can start with simple structures and accessible materials. The most important thing is understanding the basic principles of hygiene, pasteurization, and environmental control.',
    'faq.q6': 'What is spawn and how to produce it?',
    'faq.a6': 'Spawn is the mushroom "seed" - grains colonized by mycelium. Production requires sterilization and inoculation techniques. In consultation, I teach practical methods adapted to your reality.',
    'faq.q7': 'Can I grow mushrooms in an apartment?',
    'faq.a7': 'Yes! Oyster mushrooms and other species can be grown in small spaces, as long as there is control of light, humidity, and ventilation. Growing kits are a great option for beginners.',
    'faq.q8': 'How can consultation help me?',
    'faq.a8': 'The consultation offers personalized diagnosis of your challenges, science-based practical guidance, and a specific action plan for your growing conditions and goals.',
    'faq.more': 'Still have questions?',
    'faq.contact': 'Get in touch →',

    // Footer
    'footer.about': 'About',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
