import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const creators = [
  {
    name: 'Andrew',
    github: 'https://github.com/Discovered12345',
  },
  {
    name: 'Reina',
    github: 'https://github.com/psycho-asian',
  },
  {
    name: 'Srihith',
    github: 'https://github.com/SrihithChennareddy',
  },
  {
    name: 'Sundew',
    github: 'https://github.com/sundew64',
  },
];

export default function Creators() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
      >
        Meet the Creators
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {creators.map((creator, index) => (
          <motion.a
            key={creator.github}
            href={creator.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 hover:border-blue-400/50 transition-all duration-200 group"
          >
            <div className="flex flex-col items-center text-center">
              <Github className="w-16 h-16 text-blue-400 mb-4 group-hover:text-purple-400 transition-colors" />
              <h2 className="text-xl font-semibold mb-2">{creator.name}</h2>
              <p className="text-gray-400 text-sm">View GitHub Profile</p>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}