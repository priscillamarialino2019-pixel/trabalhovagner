import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { TrendingUp, MousePointer, Share2, MessageCircle } from 'lucide-react';

const dataEngagement = [
  { name: 'Seg', value: 2400 },
  { name: 'Ter', value: 1398 },
  { name: 'Qua', value: 9800 },
  { name: 'Qui', value: 3908 },
  { name: 'Sex', value: 4800 },
  { name: 'Sab', value: 3800 },
  { name: 'Dom', value: 4300 },
];

const dataSales = [
  { name: 'Semana 1', sales: 4000, organic: 2400 },
  { name: 'Semana 2', sales: 3000, organic: 1398 },
  { name: 'Semana 3', sales: 2000, organic: 9800 },
  { name: 'Semana 4', sales: 2780, organic: 3908 },
];

const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zinc-900 p-6 border-l-4 border-white">
          <div className="flex items-center justify-between">
            <h4 className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Engajamento Total</h4>
            <MessageCircle size={16} className="text-white" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">48.2k</p>
          <p className="text-xs text-green-500 mt-1 flex items-center"><TrendingUp size={12} className="mr-1" /> +12% essa semana</p>
        </div>

        <div className="bg-zinc-900 p-6 border-l-4 border-white">
          <div className="flex items-center justify-between">
            <h4 className="text-zinc-400 text-xs uppercase font-bold tracking-widest">CTR (Stories)</h4>
            <MousePointer size={16} className="text-white" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">2.8%</p>
          <p className="text-xs text-zinc-500 mt-1">Meta: 3.0%</p>
        </div>

        <div className="bg-zinc-900 p-6 border-l-4 border-white">
          <div className="flex items-center justify-between">
            <h4 className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Compartilhamentos</h4>
            <Share2 size={16} className="text-white" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">12.5k</p>
          <p className="text-xs text-green-500 mt-1 flex items-center"><TrendingUp size={12} className="mr-1" /> Viralizou no TikTok</p>
        </div>

        <div className="bg-zinc-900 p-6 border-l-4 border-white">
           <div className="flex items-center justify-between">
            <h4 className="text-zinc-400 text-xs uppercase font-bold tracking-widest">Cupom TIKTOK10</h4>
            <TrendingUp size={16} className="text-white" />
          </div>
          <p className="text-3xl font-bold mt-2 text-white">843</p>
          <p className="text-xs text-zinc-500 mt-1">Vendas diretas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 p-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Engajamento Diário</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataEngagement}>
                <XAxis dataKey="name" stroke="#52525b" tick={{fill: '#52525b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{fill: '#27272a'}}
                />
                <Bar dataKey="value" fill="#fff" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6">
          <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Performance Orgânica vs Vendas</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataSales}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" tick={{fill: '#52525b', fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }}
                   itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{r: 6}} />
                <Line type="monotone" dataKey="organic" stroke="#fff" strokeWidth={2} dot={false} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800/50 p-6 border-l-4 border-yellow-500">
          <h4 className="font-bold text-white mb-2 uppercase text-sm">Insight da Semana</h4>
          <p className="text-zinc-300">
            Conteúdos do tipo <strong>"Como usar" (Heritage)</strong> estão gerando 40% mais salvamentos do que posts de produto estáticos. 
            Aumentar a frequência desse formato no Instagram Reels para a próxima semana.
          </p>
      </div>
    </div>
  );
};

export default AnalyticsView;