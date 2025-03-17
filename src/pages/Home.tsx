import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to AI Housing Price Predictor
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Empowering sustainable communities through AI-driven housing price predictions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <Building2 className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Smart Predictions</h2>
          <p className="text-gray-300">
            Advanced machine learning algorithms analyze multiple factors to provide accurate housing price predictions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Market Insights</h2>
          <p className="text-gray-300">
            Get detailed market analysis and comparisons to make informed housing decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <Target className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">SDG Goals</h2>
          <p className="text-gray-300">
            Supporting UN SDG 11 by promoting sustainable and affordable housing solutions.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <Link
          to="/predictor"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-lg font-medium"
        >
          Try Price Predictor
        </Link>
      </motion.div>
    </main>
  );
}