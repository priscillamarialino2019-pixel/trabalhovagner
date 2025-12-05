import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'strategy', label: 'Playbook Estratégico' },
    { id: 'creator', label: 'Creative Studio (IA)' },
    { id: 'analytics', label: 'Performance' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('strategy')}>
            {/* Simple CSS adidas logo approximation for simplicity */}
            <svg viewBox="0 0 100 65" className="h-10 w-auto fill-white transform -skew-x-12">
               <rect x="10" y="40" width="18" height="25" />
               <rect x="35" y="25" width="18" height="40" />
               <rect x="60" y="10" width="18" height="55" />
            </svg>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight uppercase">adidas</span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">Brasil Digital Hub</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                  activeTab === item.id
                    ? 'text-white border-b-2 border-white pb-1'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-zinc-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeTab === item.id
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;