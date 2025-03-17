import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2560&q=80"
        alt="Luxury Neighborhood"
        className="absolute w-full h-full object-cover opacity-20"
      />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))',
            'linear-gradient(to right, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
}