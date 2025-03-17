import React, { useState } from 'react';
import { Building2, TrendingUp } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';
import { motion } from 'framer-motion';
import PredictionForm from '../components/PredictionForm';
import PriceChart from '../components/PriceChart';

// Create a more sophisticated model with multiple layers
const model = tf.sequential({
  layers: [
    tf.layers.dense({ inputShape: [5], units: 64, activation: 'relu' }),
    tf.layers.dropout({ rate: 0.2 }),
    tf.layers.dense({ units: 32, activation: 'relu' }),
    tf.layers.dropout({ rate: 0.1 }),
    tf.layers.dense({ units: 16, activation: 'relu' }),
    tf.layers.dense({ units: 1, activation: 'linear' })
  ]
});

model.compile({
  optimizer: tf.train.adam(0.001),
  loss: 'meanSquaredError',
  metrics: ['mse']
});

export default function PricePredictor() {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');

  const handlePredict = async (input: any) => {
    setLoading(true);
    
    // Calculate base price based on square footage
    const basePrice = input.squareFootage * 200; // $200 per square foot base
    
    // Location multiplier
    const locationMultiplier = 
      input.location === 'urban' ? 1.5 : 
      input.location === 'suburban' ? 1.2 : 1.0;
    
    // Age factor (newer houses cost more)
    const currentYear = new Date().getFullYear();
    const age = currentYear - input.yearBuilt;
    const ageFactor = Math.max(0.7, 1 - (age * 0.005)); // Reduces by 0.5% per year, minimum 70% value
    
    // Room multiplier
    const roomMultiplier = (input.bedrooms * 0.1) + (input.bathrooms * 0.05) + 1;
    
    // Calculate final price
    const calculatedPrice = basePrice * locationMultiplier * ageFactor * roomMultiplier;
    
    // Round to 2 decimal places
    const finalPrice = Math.round(calculatedPrice * 100) / 100;
    
    setPrediction(finalPrice);
    setLoading(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <div className="flex items-center gap-2 mb-8">
            <Building2 className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-semibold">Property Details</h2>
          </div>
          
          <div className="mb-8">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter property address..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
            />
          </div>
          
          <PredictionForm onPredict={handlePredict} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
        >
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-semibold">Price Analysis</h2>
          </div>
          
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
            </div>
          ) : prediction ? (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-300 mb-2">Predicted Price</h3>
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ${prediction.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </p>
              </div>
              <PriceChart 
                predictedPrice={prediction} 
                averagePrice={prediction * 1.1}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <Building2 className="w-16 h-16 mb-4 text-blue-400/50" />
              <p className="text-lg">Enter property details to see the prediction</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}