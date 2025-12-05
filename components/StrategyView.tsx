import React from 'react';
import { Users, Zap, Trophy, Leaf, ShoppingBag, Target, Heart, Footprints } from 'lucide-react';

const StrategyView: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Intro Section */}
      <section className="text-center py-10 bg-zinc-900/50 rounded-lg border border-zinc-800">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
          Impossible is Nothing
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Plano Mestre de Mídias Digitais focado em diversidade, lifestyle e sazonalidade.
        </p>
        <div className="mt-6 inline-block bg-white text-black font-bold px-4 py-1 uppercase text-sm tracking-widest">
          Campanha: O Melhor de Nós
        </div>
      </section>

      {/* Personas Section */}
      <section>
        <div className="flex items-center space-x-4 mb-6">
          <Target className="text-blue-500" size={32} />
          <h2 className="text-2xl font-bold uppercase tracking-wider">Nossas Personas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900 p-6 rounded-none border-l-4 border-purple-500 hover:bg-zinc-800 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Hypebeast / Gen Z</h3>
              <Zap size={20} className="text-purple-500" />
            </div>
            <p className="text-sm text-zinc-400 mb-4">Obcecado por tendências e exclusividade.</p>
            <ul className="text-xs space-y-2 text-zinc-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 mr-2 rounded-full"></span>Samba, Gazelle, Campus</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 mr-2 rounded-full"></span>TikTok Trends</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-500 mr-2 rounded-full"></span>Sneakerheads</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-none border-l-4 border-yellow-500 hover:bg-zinc-800 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Atleta Performance</h3>
              <Trophy size={20} className="text-yellow-500" />
            </div>
            <p className="text-sm text-zinc-400 mb-4">Busca tecnologia, dados e superação.</p>
            <ul className="text-xs space-y-2 text-zinc-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 mr-2 rounded-full"></span>Corredores, Crossfit</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 mr-2 rounded-full"></span>Tecnologia Boost/4D</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-500 mr-2 rounded-full"></span>Foco em resultados</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-none border-l-4 border-blue-500 hover:bg-zinc-800 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Casual / Família</h3>
              <ShoppingBag size={20} className="text-blue-500" />
            </div>
            <p className="text-sm text-zinc-400 mb-4">Busca conforto, durabilidade e presentes.</p>
            <ul className="text-xs space-y-2 text-zinc-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 mr-2 rounded-full"></span>Uso diário</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 mr-2 rounded-full"></span>Promoções</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-500 mr-2 rounded-full"></span>Sazonalidade (Natal)</li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-6 rounded-none border-l-4 border-green-500 hover:bg-zinc-800 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">O Consciente</h3>
              <Leaf size={20} className="text-green-500" />
            </div>
            <p className="text-sm text-zinc-400 mb-4">Preocupa-se com impacto ambiental.</p>
            <ul className="text-xs space-y-2 text-zinc-300">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full"></span>Linha Parley</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full"></span>Materiais Reciclados</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full"></span>Moda Circular</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section>
        <div className="flex items-center space-x-4 mb-6">
          <Footprints className="text-white" size={32} />
          <h2 className="text-2xl font-bold uppercase tracking-wider">Pilares de Conteúdo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-800 p-6 bg-gradient-to-br from-zinc-900 to-black">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="bg-white text-black px-2 py-0.5 text-xs mr-3 uppercase">Pilar A</span>
                    Heritage & Originals
                </h3>
                <p className="text-zinc-400 text-sm mb-4">Cultura urbana, música e história da marca.</p>
                <div className="space-y-2">
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: "Como usar" Samba (Look Pinterest)</div>
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: História do Run DMC & Superstar</div>
                </div>
            </div>

            <div className="border border-zinc-800 p-6 bg-gradient-to-br from-zinc-900 to-black">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="bg-white text-black px-2 py-0.5 text-xs mr-3 uppercase">Pilar B</span>
                    Tech & Performance
                </h3>
                <p className="text-zinc-400 text-sm mb-4">Educação sobre o produto. Tecnologia e valor.</p>
                <div className="space-y-2">
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: Raio-X do Ultraboost</div>
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: Desafios de performance na chuva</div>
                </div>
            </div>

            <div className="border border-zinc-800 p-6 bg-gradient-to-br from-zinc-900 to-black">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="bg-white text-black px-2 py-0.5 text-xs mr-3 uppercase">Pilar C</span>
                    Comunidade & Local
                </h3>
                <p className="text-zinc-400 text-sm mb-4">Brasilidade. Conectar o global com o local.</p>
                <div className="space-y-2">
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: Bastidores adidas Runners SP</div>
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: Entrevistas com atletas BR</div>
                </div>
            </div>

             <div className="border border-zinc-800 p-6 bg-gradient-to-br from-zinc-900 to-black">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="bg-white text-black px-2 py-0.5 text-xs mr-3 uppercase">Pilar D</span>
                    Sustentabilidade
                </h3>
                <p className="text-zinc-400 text-sm mb-4">End Plastic Waste. Compromisso ambiental.</p>
                <div className="space-y-2">
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: Transformação de garrafas em tênis</div>
                    <div className="bg-zinc-800/50 p-2 text-xs border-l-2 border-white">Ideia: Guia de limpeza e conservação</div>
                </div>
            </div>
        </div>
      </section>

      {/* Campaigns Spotlight */}
      <section className="bg-blue-900/20 border border-blue-900/50 p-8 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-blue-500 blur-3xl opacity-20"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
                <Heart className="text-blue-400" />
                <h2 className="text-xl font-bold uppercase tracking-wider text-blue-100">Foco Atual: Temporada de Presentes</h2>
            </div>
            <p className="text-blue-200 mb-6 max-w-3xl">
                Baseado no diagnóstico, o foco é Natal e Fim de Ano. Conceito: <strong>"O presente que não tem erro"</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-black/50 p-4 rounded border border-blue-800/50">
                    <h4 className="font-bold text-white mb-2">Guia de Presentes</h4>
                    <p className="text-xs text-zinc-400">Carrossel: Presentes até R$200, Para Corredores, etc.</p>
                </div>
                <div className="bg-black/50 p-4 rounded border border-blue-800/50">
                    <h4 className="font-bold text-white mb-2">Emoção Real</h4>
                    <p className="text-xs text-zinc-400">Vídeos curtos de unboxing e reações genuínas.</p>
                </div>
                <div className="bg-black/50 p-4 rounded border border-blue-800/50">
                    <h4 className="font-bold text-white mb-2">Réveillon</h4>
                    <p className="text-xs text-zinc-400">Looks All White para a virada e início de treinos.</p>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default StrategyView;