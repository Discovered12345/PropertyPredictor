import React, { useState } from 'react';
import { Square, Bed, Bath, MapPin, Calendar } from 'lucide-react';

interface Props {
  onPredict: (input: any) => void;
}

export default function PredictionForm({ onPredict }: Props) {
  const [input, setInput] = useState({
    squareFootage: 1500,
    bedrooms: 3,
    bathrooms: 2,
    location: 'urban',
    yearBuilt: 2000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(input);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Square className="w-4 h-4 text-blue-400" />
            Square Footage
          </label>
          <input
            type="number"
            value={input.squareFootage}
            onChange={(e) => setInput({ ...input, squareFootage: Number(e.target.value) })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Bed className="w-4 h-4 text-blue-400" />
            Bedrooms
          </label>
          <input
            type="number"
            value={input.bedrooms}
            onChange={(e) => setInput({ ...input, bedrooms: Number(e.target.value) })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Bath className="w-4 h-4 text-blue-400" />
            Bathrooms
          </label>
          <input
            type="number"
            value={input.bathrooms}
            onChange={(e) => setInput({ ...input, bathrooms: Number(e.target.value) })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <MapPin className="w-4 h-4 text-blue-400" />
            Location
          </label>
          <select
            value={input.location}
            onChange={(e) => setInput({ ...input, location: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white [&>option]:bg-gray-900"
          >
            <option value="urban">Urban</option>
            <option value="suburban">Suburban</option>
            <option value="rural">Rural</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
            <Calendar className="w-4 h-4 text-blue-400" />
            Year Built
          </label>
          <input
            type="number"
            value={input.yearBuilt}
            onChange={(e) => setInput({ ...input, yearBuilt: Number(e.target.value) })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2 font-medium text-lg"
      >
        Predict Price
      </button>
    </form>
  );
}