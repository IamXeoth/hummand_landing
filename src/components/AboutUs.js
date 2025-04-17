import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Menu, ArrowLeft, Brain, Cpu, Database, Users, TrendingUp, Code, Server, Shield, Compass } from 'lucide-react';

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);

    // Adiciona background com padrão sutilmente animado
    const canvas = document.getElementById('aboutBgCanvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const squares = [];
      const numSquares = 100;
      
      for (let i = 0; i < numSquares; i++) {
        squares.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.03,
          speed: Math.random() * 0.2 + 0.1,
        });
      }
      
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        squares.forEach(square => {
          ctx.fillStyle = `rgba(220, 38, 38, ${square.opacity})`;
          ctx.fillRect(square.x, square.y, square.size, square.size);
          
          square.y += square.speed;
          
          if (square.y > canvas.height) {
            square.y = 0;
            square.x = Math.random() * canvas.width;
          }
        });
        
        requestAnimationFrame(animate);
      }
      
      animate();
      
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    }
    
    // Detectar scroll para efeito no header
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Logo simplificado apenas em branco
  const HummandLogo = () => (
    <div className="flex items-center gap-3">
      {/* Ícone neural simplificado - apenas branco */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        className="text-white"
      >
        <g>
          {/* Pontos conectados em formato neural */}
          <circle cx="12" cy="4" r="1.5" fill="white" />
          <circle cx="6" cy="8" r="1.5" fill="white" />
          <circle cx="18" cy="8" r="1.5" fill="white" />
          <circle cx="4" cy="14" r="1.5" fill="white" />
          <circle cx="12" cy="14" r="1.5" fill="white" />
          <circle cx="20" cy="14" r="1.5" fill="white" />
          <circle cx="8" cy="20" r="1.5" fill="white" />
          <circle cx="16" cy="20" r="1.5" fill="white" />
          
          {/* Linhas de conexão - todas brancas */}
          <line x1="12" y1="4" x2="6" y2="8" stroke="white" strokeWidth="0.7" />
          <line x1="12" y1="4" x2="18" y2="8" stroke="white" strokeWidth="0.7" />
          <line x1="6" y1="8" x2="4" y2="14" stroke="white" strokeWidth="0.7" />
          <line x1="6" y1="8" x2="12" y2="14" stroke="white" strokeWidth="0.7" />
          <line x1="18" y1="8" x2="12" y2="14" stroke="white" strokeWidth="0.7" />
          <line x1="18" y1="8" x2="20" y2="14" stroke="white" strokeWidth="0.7" />
          <line x1="4" y1="14" x2="8" y2="20" stroke="white" strokeWidth="0.7" />
          <line x1="12" y1="14" x2="8" y2="20" stroke="white" strokeWidth="0.7" />
          <line x1="12" y1="14" x2="16" y2="20" stroke="white" strokeWidth="0.7" />
          <line x1="20" y1="14" x2="16" y2="20" stroke="white" strokeWidth="0.7" />
        </g>
      </svg>
      
      {/* Texto HUMMAND sem corte vermelho ou gradientes */}
      <span className="text-xl font-bold tracking-wide text-white">HUMMAND</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-gray-300 font-sans relative overflow-hidden">
      {/* Background Canvas */}
      <canvas id="aboutBgCanvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      
      {/* Header Aprimorado com Links Centralizados */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-red-900/20 py-2' 
          : 'bg-black/70 py-4'
      }`}>
        <div className="container mx-auto">
          <nav className="flex items-center justify-between px-4 md:px-6">
            {/* Logo à esquerda */}
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <div className="relative overflow-hidden">
                <HummandLogo />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/30 group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
            
            {/* Links de navegação centralizados */}
            <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              <Link 
                to="/about" 
                className="text-white transition-colors relative group"
              >
                Sobre Nós
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
              </Link>
              <Link 
                to="/services" 
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            
            {/* Botões à direita */}
            <div className="hidden md:flex items-center gap-3">
              {/* Botão Voltar */}
              <Link 
                to="/" 
                className="px-4 py-2 border border-white/20 text-white hover:bg-white/10 rounded-md transition-all duration-300 flex items-center gap-2"
                title="Voltar à página inicial"
              >
                <ArrowLeft size={16} />
                <span>Voltar</span>
              </Link>
              
              {/* Botão Acessar Sistema */}
              <Link 
                to="/system" 
                className="px-6 py-2.5 bg-red-600 text-white hover:bg-red-500 rounded-md transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Acessar Sistema</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? 
                <X className="w-6 h-6 transition-transform duration-300 transform rotate-90" /> : 
                <Menu className="w-6 h-6 transition-transform duration-300" />
              }
            </button>
          </nav>

          {/* Mobile Navigation - Animated Dropdown */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-black/95 border-t border-red-900/20 px-4 py-2">
              <div className="flex flex-col space-y-3 py-3">
                {/* Botão Voltar no menu mobile */}
                <Link 
                  to="/" 
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowLeft size={16} />
                  Voltar para Home
                </Link>
                <Link 
                  to="/about" 
                  className="px-4 py-3 bg-red-900/20 text-white rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-red-900/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-red-900/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
                <Link 
                  to="/system" 
                  className="px-4 py-3 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors text-center font-medium shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Acessar Sistema
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20 min-h-screen relative">
        <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Hero Section */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Lado esquerdo - Texto introdutório */}
                <div className="lg:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 bg-red-900/20 border border-red-500/20 rounded-full text-red-400 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span>Nossa História</span>
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    Transformando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">setor público</span> através da tecnologia
                  </h1>
                  
                  <p className="text-lg text-gray-400 mb-4">
                    Somos uma empresa de tecnologia dedicada a humanizar a transformação digital no setor público, 
                    demonstrando que a inovação não é um "bicho de sete cabeças" e pode ser acessível a todas as prefeituras,
                    independente do seu tamanho.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-900/30">
                        <Brain size={16} className="text-red-500" />
                      </span>
                      <span className="text-sm text-gray-300">Inteligência Artificial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-900/30">
                        <Database size={16} className="text-red-500" />
                      </span>
                      <span className="text-sm text-gray-300">Análise de Dados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-900/30">
                        <Cpu size={16} className="text-red-500" />
                      </span>
                      <span className="text-sm text-gray-300">Infraestrutura</span>
                    </div>
                  </div>
                </div>
                
                {/* Lado direito - Visão gereral em cards */}
                <div className="lg:w-1/2 space-y-4">
                  <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden p-4">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-900/30 rounded-lg mr-3">
                        <Users className="text-red-500" size={20} />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white mb-1">Quem Somos</h2>
                        <p className="text-gray-400 text-sm">
                          A Hummand é uma empresa especializada em Tecnologia da Informação, Dados e Inteligência Artificial, 
                          com foco no setor público, especialmente em prefeituras de cidades menores, ajudando-as a modernizar seus serviços.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden p-4">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-900/30 rounded-lg mr-3">
                        <Compass className="text-red-500" size={20} />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white mb-1">Nossa Missão</h2>
                        <p className="text-gray-400 text-sm">
                          Humanizar a transformação digital do setor público através de soluções tecnológicas acessíveis e eficientes, 
                          aproximando a tecnologia da realidade das pequenas e médias prefeituras brasileiras.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden p-4">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-900/30 rounded-lg mr-3">
                        <TrendingUp className="text-red-500" size={20} />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white mb-1">Visão de Futuro</h2>
                        <p className="text-gray-400 text-sm">
                          Transformar a Hummand em uma startup inovadora e escalável no setor govtech, identificando e resolvendo 
                          problemas reais das administrações públicas, com potencial para crescimento exponencial.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção Modelo de Negócio Atual */}
          <section className="py-12 px-4 bg-black/40 backdrop-blur-sm border-y border-red-900/20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Modelo de Negócio</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Oferecemos suporte e gestão completa para todo o ecossistema de TI, 
                  desde infraestrutura até consultoria estratégica.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-black/30 border border-red-900/20 rounded-lg p-4 shadow-xl">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-900/20 mb-4">
                    <Server size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Infraestrutura & Suporte</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                      <p className="text-sm text-gray-400">
                        Oferecemos suporte técnico completo em hardware e software, garantindo que toda infraestrutura 
                        tecnológica da sua prefeitura funcione perfeitamente.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Redes</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Servidores</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Equipamentos</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Manutenção</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 2 */}
                <div className="bg-black/30 border border-red-900/20 rounded-lg p-4 shadow-xl">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-900/20 mb-4">
                    <Shield size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Segurança & Gestão</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                      <p className="text-sm text-gray-400">
                        Implementamos protocolos de segurança e ferramentas de gestão para proteger dados sensíveis 
                        e otimizar processos administrativos repetitivos.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Cibersegurança</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Backup</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Compliance</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">LGPD</span>
                    </div>
                  </div>
                </div>
                
                {/* Card 3 */}
                <div className="bg-black/30 border border-red-900/20 rounded-lg p-4 shadow-xl">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-900/20 mb-4">
                    <Brain size={24} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">IA & Dados</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                      <p className="text-sm text-gray-400">
                        Desenvolvemos soluções avançadas de análise de dados e inteligência artificial 
                        para otimizar a tomada de decisões e aperfeiçoar o desempenho dos serviços públicos.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Machine Learning</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Análise Preditiva</span>
                      <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Automação</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção Nosso Diferencial */}
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Por Que Somos Diferentes</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Nossa abordagem única combina tecnologia avançada com um profundo entendimento 
                  das necessidades específicas do setor público.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card Esquerdo */}
                <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden p-4">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-900/30 mr-2">
                      <Users size={16} className="text-red-500" />
                    </span>
                    Foco em Cidades Menores
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Entendemos os desafios específicos das pequenas e médias prefeituras brasileiras, 
                    muitas vezes negligenciadas por grandes empresas de tecnologia. Nossas soluções são 
                    desenvolvidas pensando especificamente nas necessidades e orçamentos destes municípios.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-red-900/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-300">Soluções adaptadas à realidade local</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-red-900/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-300">Preços acessíveis para orçamentos municipais</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-red-900/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-300">Treinamento personalizado para servidores</span>
                    </div>
                  </div>
                </div>
                
                {/* Card Direito */}
                <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden p-4">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-900/30 mr-2">
                      <Code size={16} className="text-red-500" />
                    </span>
                    Inovação Responsável
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Nossa abordagem para inovação é meticulosa e responsável. Buscamos áreas 
                    com menor competição imediata, criando soluções únicas e diferenciadas que 
                    resolvem problemas reais e possuem potencial de escala.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-red-900/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-300">Foco em resolver problemas reais e específicos</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-red-900/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-300">Desenvolvimento de tecnologias próprias</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg border border-red-900/10">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-sm text-gray-300">Humanização da tecnologia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção Visão de Futuro */}
          <section className="py-12 px-4 bg-black/30 backdrop-blur-sm border-y border-red-900/20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Lado Esquerdo - Imagem representativa */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-1 flex items-center justify-center">
                    <div className="absolute inset-1 rounded-full border border-gray-800 bg-black flex items-center justify-center">
                      <svg 
                        width="80" 
                        height="80" 
                        viewBox="0 0 24 24" 
                        className="text-white"
                      >
                        <g>
                          <circle cx="12" cy="4" r="1.5" fill="white" />
                          <circle cx="6" cy="8" r="1.5" fill="white" />
                          <circle cx="18" cy="8" r="1.5" fill="white" />
                          <circle cx="4" cy="14" r="1.5" fill="white" />
                          <circle cx="12" cy="14" r="1.5" fill="white" />
                          <circle cx="20" cy="14" r="1.5" fill="white" />
                          <circle cx="8" cy="20" r="1.5" fill="white" />
                          <circle cx="16" cy="20" r="1.5" fill="white" />
                          
                          <line x1="12" y1="4" x2="6" y2="8" stroke="white" strokeWidth="0.7" />
                          <line x1="12" y1="4" x2="18" y2="8" stroke="white" strokeWidth="0.7" />
                          <line x1="6" y1="8" x2="4" y2="14" stroke="white" strokeWidth="0.7" />
                          <line x1="6" y1="8" x2="12" y2="14" stroke="white" strokeWidth="0.7" />
                          <line x1="18" y1="8" x2="12" y2="14" stroke="white" strokeWidth="0.7" />
                          <line x1="18" y1="8" x2="20" y2="14" stroke="white" strokeWidth="0.7" />
                          <line x1="4" y1="14" x2="8" y2="20" stroke="white" strokeWidth="0.7" />
                          <line x1="12" y1="14" x2="8" y2="20" stroke="white" strokeWidth="0.7" />
                          <line x1="12" y1="14" x2="16" y2="20" stroke="white" strokeWidth="0.7" />
                          <line x1="20" y1="14" x2="16" y2="20" stroke="white" strokeWidth="0.7" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Lado Direito - Texto */}
                <div className="md:w-1/2">
                  <div className="inline-block px-3 py-1 mb-4 bg-red-900/20 border border-red-500/20 rounded-full text-red-400 text-sm">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span>O Futuro da Hummand</span>
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    De <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">startup</span> a big tech
                  </h2>
                  
                  <p className="text-gray-400 mb-4">
                    Nossa visão estratégica para o futuro é transformar a Hummand em uma startup escalável 
                    e, posteriormente, em uma big tech brasileira focada no setor público. Buscamos 
                    inovação significativa em áreas específicas, identificando e resolvendo problemas reais.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-900/30 mr-3 mt-1">
                        <TrendingUp size={16} className="text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Crescimento Exponencial</h3>
                        <p className="text-sm text-gray-400">
                          Desenvolvimento de soluções escaláveis que possam ser replicadas em 
                          múltiplas prefeituras de forma eficiente.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-900/30 mr-3 mt-1">
                        <Compass size={16} className="text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Inovação Estratégica</h3>
                        <p className="text-sm text-gray-400">
                          Foco em áreas com menor competição imediata, criando soluções únicas 
                          que nos permitam liderar segmentos específicos.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-900/30 mr-3 mt-1">
                        <Brain size={16} className="text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">Tecnologia Proprietária</h3>
                        <p className="text-sm text-gray-400">
                          Desenvolvimento de propriedade intelectual e tecnologias exclusivas 
                          para atender necessidades específicas do setor público.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vamos transformar sua instituição pública?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Estamos prontos para ajudar sua administração a entrar na era digital com soluções 
                personalizadas e acessíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 border border-red-500/30 text-white hover:bg-red-900/20 hover:border-red-500/50 rounded-md transition-colors text-lg font-medium group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Fale Conosco
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-4 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors text-lg font-medium"
                >
                  Conhecer Serviços
                </Link>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="py-6 px-4 bg-black border-t border-red-900/20">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm mb-3">
                <div className="text-gray-500">© 2025 Hummand.</div>
                
                <div className="flex gap-8 my-4 md:my-0">
                  <a href="mailto:contato@hummand.com.br" className="text-gray-400 hover:text-white transition-colors">
                    contato@hummand.com.br
                  </a>
                  <a href="tel:+551134567890" className="text-gray-400 hover:text-white transition-colors">
                    (11) 3456-7890
                  </a>
                </div>
                
                {/* Redes Sociais */}
                <div className="flex items-center gap-5">
                  <a 
                    href="https://www.instagram.com/hummand.lab" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-red-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/hummand" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-red-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/IamXeoth" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-red-400 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4l11.5 11.5M4 20l15-15" />
                      <path d="M20 4v7.5M12.5 11.5l7.5 7.5M20 12.5V20" />
                    </svg>
                  </a>
                </div>
              </div>
              
             {/* Endereço */}
             <div className="text-center text-xs text-gray-500 border-t border-gray-800/50 pt-4">
                <p>R. Josefa Eugenia, S/N - Centro, Curral de Cima - PB, 58291-000, Brasil</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;