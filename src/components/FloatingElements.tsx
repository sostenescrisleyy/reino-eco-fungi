import { motion } from 'framer-motion';

export const FloatingElements = () => {
  const spores = [
    { size: 80, left: '10%', top: '20%', delay: 0 },
    { size: 60, left: '85%', top: '15%', delay: 1 },
    { size: 100, left: '75%', top: '60%', delay: 2 },
    { size: 40, left: '5%', top: '70%', delay: 0.5 },
    { size: 70, left: '90%', top: '80%', delay: 1.5 },
    { size: 50, left: '20%', top: '85%', delay: 2.5 },
    { size: 90, left: '60%', top: '10%', delay: 3 },
    { size: 45, left: '40%', top: '75%', delay: 0.8 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {spores.map((spore, index) => (
        <motion.div
          key={index}
          className="floating-spore"
          style={{
            width: spore.size,
            height: spore.size,
            left: spore.left,
            top: spore.top,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8 + index * 0.5,
            delay: spore.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Decorative mushroom silhouettes */}
      <motion.div
        className="absolute -left-20 bottom-0 h-64 w-64 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='30' rx='40' ry='25' fill='%23234d20'/%3E%3Crect x='40' y='30' width='20' height='50' rx='5' fill='%23234d20'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-10 top-1/3 h-48 w-48 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='30' rx='35' ry='20' fill='%23234d20'/%3E%3Crect x='42' y='30' width='16' height='40' rx='4' fill='%23234d20'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  );
};
