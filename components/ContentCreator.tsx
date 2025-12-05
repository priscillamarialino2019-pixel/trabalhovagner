import React, { useState } from 'react';
import { Sparkles, Copy, CheckCircle, Loader2 } from 'lucide-react';
import { Persona, Platform } from '../types';
import { generateSocialContent } from '../services/geminiService';

const ContentCreator: React.FC = () => {
  const [persona, setPersona] = useState<Persona>(Persona.HYPEBEAST);
  const [platform, setPlatform] = useState<Platform>(Platform.TIKTOK);
  const [topic, setTopic] = useState('');
  const [context, setContext] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setIsGenerating(true);
    setResult('');
    
    const content = await generateSocialContent(persona, platform, topic, context);
    
    setResult(content);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full animate-fade-in">
      {/* Input Panel */}
      <div className="lg:col-span-1 space-y-6">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">Studio Criativo</h2>
          <p className="text-zinc-400 text-sm">Gere ideias, legendas e roteiros alinhados ao tom de voz adidas.</p>
        </div>

        <div className="space-y-4 bg-zinc-900 p-6 border border-zinc-800">
          <div>
            <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">1. Persona</label>
            <select 
              value={persona}
              onChange={(e) => setPersona(e.target.value as Persona)}
              className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-white focus:outline-none transition-colors rounded-none"
            >
              {Object.values(Persona).map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">2. Plataforma</label>
            <select 
              value={platform}
              onChange={(e) => setPlatform(e.target.value as Platform)}
              className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-white focus:outline-none transition-colors rounded-none"
            >
              {Object.values(Platform).map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">3. Produto / Tópico</label>
            <input 
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Tênis Samba, Corrida na Chuva..."
              className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-white focus:outline-none transition-colors rounded-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">4. Contexto Extra (Opcional)</label>
            <textarea 
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="Ex: Promoção de Natal, Lançamento nova cor..."
              className="w-full bg-black border border-zinc-700 text-white p-3 h-24 resize-none focus:border-white focus:outline-none transition-colors rounded-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!topic || isGenerating}
            className={`w-full py-4 font-bold uppercase tracking-widest flex items-center justify-center space-x-2 transition-all ${
              !topic || isGenerating 
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-zinc-200'
            }`}
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Criando...</span>
              </>
            ) : (
              <>
                <Sparkles size={20} />
                <span>Gerar Conteúdo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Panel */}
      <div className="lg:col-span-2 flex flex-col h-full min-h-[500px]">
        <div className="flex justify-between items-center mb-4">
           <h3 className="font-bold uppercase tracking-wider text-zinc-400">Resultado</h3>
           {result && (
             <button 
               onClick={handleCopy}
               className="flex items-center space-x-2 text-xs font-bold uppercase text-zinc-400 hover:text-white transition-colors"
             >
               {copied ? <CheckCircle size={16} className="text-green-500"/> : <Copy size={16} />}
               <span>{copied ? 'Copiado' : 'Copiar Texto'}</span>
             </button>
           )}
        </div>
        
        <div className="flex-grow bg-zinc-900 border border-zinc-800 p-8 overflow-y-auto relative">
          {!result && !isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 space-y-4">
              <Sparkles size={48} strokeWidth={1} />
              <p className="text-sm uppercase tracking-widest">Aguardando comando...</p>
            </div>
          )}
          
          {isGenerating && (
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
              <div className="w-16 h-1 bg-zinc-800 overflow-hidden">
                 <div className="h-full bg-white animate-progress"></div>
              </div>
              <p className="text-xs uppercase tracking-widest animate-pulse">Consultando Arquivos adidas...</p>
            </div>
          )}

          {result && (
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap leading-relaxed">
                {result.split('\n').map((line, index) => {
                  // Simple markdown-ish parsing for bolding
                  const bolded = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
                  return <p key={index} className="mb-2 text-zinc-300" dangerouslySetInnerHTML={{__html: bolded}} />;
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCreator;