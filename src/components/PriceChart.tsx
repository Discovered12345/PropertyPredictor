import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  predictedPrice: number;
  averagePrice: number;
}

export default function PriceChart({ predictedPrice, averagePrice }: Props) {
  const data = [
    {
      name: 'Predicted Price',
      price: predictedPrice
    },
    {
      name: 'Average Market Price',
      price: averagePrice
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 backdrop-blur-sm p-3 rounded-lg border border-white/10">
          <p className="text-gray-300">{payload[0].payload.name}</p>
          <p className="text-white font-bold">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.7)' }}
          />
          <YAxis 
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: 'rgba(255,255,255,0.7)' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="price" 
            fill="url(#gradient)"
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}