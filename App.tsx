import React, { useState } from 'react';
import Header from './components/Header';
import StrategyView from './components/StrategyView';
import ContentCreator from './components/ContentCreator';
import AnalyticsView from './components/AnalyticsView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  const renderContent = () => {
    switch (activeTab) {
      case 'strategy':
        return <StrategyView />;
      case 'creator':
        return <ContentCreator />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <StrategyView />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      <footer className="border-t border-zinc-900 mt-12 py-8 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4 opacity-50">
             <svg viewBox="0 0 100 65" className="h-6 w-auto fill-white transform -skew-x-12">
               <rect x="10" y="40" width="18" height="25" />
               <rect x="35" y="25" width="18" height="40" />
               <rect x="60" y="10" width="18" height="55" />
            </svg>
        </div>
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          Ferramenta Interna de Estratégia Digital
        </p>
        <p className="text-zinc-700 text-[10px] mt-2">
          © {new Date().getFullYear()} adidas Brasil. Confidential.
        </p>
      </footer>
    </div>
  );
};

export default App;