import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Terminal, Menu, X } from 'lucide-react';
import { init } from '@emailjs/browser';
import './styles.css';
import Contact from './components/Contact';
import EasterEgg from './components/EasterEgg';

init("MWA3Zz7e2OhZLHHSC");

const NeuralLogo = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    className="text-indigo-800 fill-current"
  >
    <g>
      <circle cx="4" cy="12" r="1.5" className="neural-node" />
      <circle cx="9" cy="8" r="1.5" className="neural-node" />
      <circle cx="9" cy="16" r="1.5" className="neural-node" />
      <circle cx="14" cy="6" r="1.5" className="neural-node" />
      <circle cx="14" cy="12" r="1.5" className="neural-node" />
      <circle cx="14" cy="18" r="1.5" className="neural-node" />
      <circle cx="19" cy="10" r="1.5" className="neural-node" />
      <circle cx="19" cy="14" r="1.5" className="neural-node" />
      <path d="M4,12 L9,8 M4,12 L9,16 M9,8 L14,6 M9,8 L14,12 M9,16 L14,12 M9,16 L14,18 M14,6 L19,10 M14,12 L19,10 M14,12 L19,14 M14,18 L19,14" 
        fill="none" 
        className="neural-connection"
      />
    </g>
  </svg>
);

const HummandLanding = () => {
  const [loaded, setLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const metrics = {
    consulting: `{
      "projetos_ativos": "150+",
      "satisfacao_clientes": "98%",
      "ganho_produtividade": "45%",
      "economia_media": "30%"
    }`,
    analytics: `{
      "processamento_diario": "5TB",
      "modelos_ia": "15+",
      "taxa_precisao": "95.5%",
      "monitoramento": "tempo_real"
    }`
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <div className="grid-bg fixed inset-0 opacity-5"></div>

      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between h-16 px-4 md:px-6">
            <Link to="/" className="flex items-center gap-3 float-element">
              <NeuralLogo />
              <span className="text-sm text-indigo-800 font-semibold tracking-wider">HUMMAND</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/contact" 
                className="px-4 py-1.5 text-xs border border-indigo-900 text-indigo-400 hover:bg-indigo-900/20 rounded transition-colors"
              >
                CONTATO
              </Link>
              <Link 
                to="/system" 
                className="px-4 py-1.5 text-xs bg-indigo-900 text-indigo-100 hover:bg-indigo-800 rounded transition-colors"
              >
                ACESSAR SISTEMA
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-indigo-400 hover:text-indigo-300"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-gray-800/50">
              <div className="flex flex-col p-4 space-y-3">
                <Link 
                  to="/contact" 
                  className="px-4 py-2 text-xs border border-indigo-900 text-indigo-400 hover:bg-indigo-900/20 rounded transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTATO
                </Link>
                <Link 
                  to="/system" 
                  className="px-4 py-2 text-xs bg-indigo-900 text-indigo-100 hover:bg-indigo-800 rounded transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ACESSAR SISTEMA
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16 min-h-screen relative">
        <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Terminal Header */}
          <div className="p-4 md:p-6 border-b border-gray-800/50 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-2 text-indigo-400 justify-center">
                <Terminal className="w-4 h-4" />
                <span className="text-xs">Terminal Hummand v2.5.0</span>
              </div>
              <div className="command-line">
                <span className="text-gray-500">$</span>
                <span className="text-indigo-400"> hummand init</span>
                <span className="text-gray-400"> --novo-projeto</span>
              </div>
            </div>
          </div>

          {/* System Output */}
          <div className="p-4 md:p-6">
            <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
              {/* Section 1: Welcome */}
              <div className="space-y-2 float-element text-center px-4">
                <div className="text-xs text-gray-500">&gt; Iniciando ambiente Hummand...</div>
                <div className="text-2xl md:text-3xl font-bold text-indigo-400 my-4">
                  Humanizando a transformação digital
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  Consultoria em tecnologia, gestão e inovação: potencializamos seu negócio 
                  com soluções de inteligência artificial personalizadas e orientadas por dados.
                </div>
              </div>

              {/* Section 2: Services Status */}
              <div className="space-y-4">
                <div className="text-xs text-gray-500">&gt; Verificando serviços ativos...</div>
                <div className="grid gap-2">
                  {[{ name: 'Consultoria.service', status: 'em execução', uptime: '99.9%' },
                    { name: 'LabDados.service', status: 'ativo', uptime: '100%' },
                    { name: 'SistemaIA.service', status: 'processando', uptime: '99.8%' },
                    { name: 'Suporte.service', status: 'monitorando', uptime: '99.9%' }
                  ].map((service) => (
                    <div key={service.name} className="service-card flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-900/30 border border-gray-800/50 rounded space-y-2 sm:space-y-0">
                      <div className="flex items-center gap-3">
                        <div className="status-dot w-2 h-2 bg-emerald-500 rounded-full relative" />
                        <span className="text-sm text-indigo-300">{service.name}</span>
                      </div>
                      <div className="flex items-center gap-4 ml-5 sm:ml-0">
                        <span className="text-xs text-emerald-500">{service.status}</span>
                        <span className="text-xs text-gray-500">{service.uptime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: System Analytics */}
              <div className="space-y-4">
                <div className="text-xs text-gray-500">&gt; Carregando métricas...</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="metric-card p-4 bg-gray-900/30 border border-gray-800/50 rounded space-y-3">
                    <div className="text-sm text-indigo-400">Consultoria &amp; Gestão</div>
                    <pre className="text-xs text-gray-400 overflow-x-auto">{metrics.consulting}</pre>
                  </div>
                  <div className="metric-card p-4 bg-gray-900/30 border border-gray-800/50 rounded space-y-3">
                    <div className="text-sm text-indigo-400">Análise de Dados</div>
                    <pre className="text-xs text-gray-400 overflow-x-auto">{metrics.analytics}</pre>
                  </div>
                </div>
              </div>

              {/* Section 4: Command Interface */}
              <div className="space-y-4">
                <div className="text-xs text-gray-500">&gt; Comandos disponíveis</div>
                <div className="space-y-2 overflow-x-auto">
                  {[{ command: 'hummand init', desc: '--novo-projeto' },
                    { command: 'labdados connect', desc: '--analytics' },
                    { command: 'suporte request', desc: '--prioridade-alta' }
                  ].map((cmd, index) => (
                    <div className="command-line text-sm whitespace-nowrap" key={index}>
                      <span className="text-gray-500">$</span>
                      <span className="text-indigo-400"> {cmd.command}</span>
                      <span className="text-gray-500"> {cmd.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Messages */}
              <div className="space-y-2">
                <div className="type-animation text-xs text-gray-500">
                  &gt; Sistema pronto para iniciar novo projeto...
                </div>
                <div className="command-line text-sm">
                  <span className="text-gray-500">$</span>
                  <span className="text-indigo-400"> aguardando comando</span>
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-800/50 p-4 md:p-6 mt-12">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
              <div className="text-center md:text-left">© 2025 Hummand. Site por <a href="https://viniciuslisboa.com.br" className="text-indigo-400 hover:text-indigo-300">Vinícius Lisboa</a></div>
              <div className="flex gap-4">
                <a href="https://instagram.com/lab.hummand" className="hover:text-indigo-400 transition-colors">Instagram</a>
                <a href="https://linkedin.com/company/hummand" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HummandLanding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/system" element={<EasterEgg />} />
      </Routes>
    </Router>
  );
};

export default App;