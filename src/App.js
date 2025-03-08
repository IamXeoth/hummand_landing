import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, BarChart2, Users, FileText, MessageCircle } from 'lucide-react';
import { init } from '@emailjs/browser';
import './styles.css';
import Contact from './components/Contact';
import EasterEgg from './components/EasterEgg';

init("MWA3Zz7e2OhZLHHSC");

// Logo refinado com estrutura neural
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

const HummandLanding = () => {
  const [loaded, setLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Adiciona background com padrão sutilmente animado
    const canvas = document.getElementById('bgCanvas');
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

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-gray-300 font-sans relative overflow-hidden">
      {/* Background Canvas */}
      <canvas id="bgCanvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      
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
          className="text-gray-300 hover:text-white transition-colors relative group"
        >
          Sobre Nós
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
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
      
      {/* Botão Acessar Sistema à direita */}
      <div className="hidden md:block">
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
          <Link 
            to="/about" 
            className="px-4 py-3 text-gray-300 hover:text-white hover:bg-red-900/10 rounded-md transition-colors"
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
<section className="py-20 px-4 relative">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left Side - Slogan */}
      <div className="lg:w-1/2 lg:pt-16"> {/* Aumentei padding-top */}
        <div className="inline-block px-3 py-1 mb-6 bg-red-900/20 border border-red-500/20 rounded-full text-red-400 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            <span>Bem-vindo a Hummand!</span>
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Humanizando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">transformação digital</span> da sua prefeitura
        </h1>
        
        <p className="text-lg text-gray-400 mb-10 max-w-lg">
          Automatizamos tarefas burocráticas, liberando seus servidores para atividades mais estratégicas, criativas e de alto valor para o cidadão.
        </p>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white hover:bg-red-500 rounded-md transition-all font-medium"
        >
          <span>Solicitar Demonstração</span>
          <ArrowRight size={18} />
        </Link>
      </div>
      
      {/* Right Side - Dashboards */}
      <div className="lg:w-1/2 space-y-6">
        {/* Dashboard 1: Estado dos Serviços */}
        <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Status dos Serviços</h3>
              <span className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">Online</span>
            </div>
            
            <div className="space-y-3">
              {[
                { name: 'Consultoria.service', status: 'em execução', uptime: '99.9%', color: 'emerald' },
                { name: 'LabDados.service', status: 'ativo', uptime: '100%', color: 'emerald' },
                { name: 'SistemaIA.service', status: 'processando', uptime: '99.8%', color: 'emerald' },
                { name: 'Suporte.service', status: 'monitorando', uptime: '99.9%', color: 'emerald' }
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-2.5 bg-black/30 border border-red-900/10 rounded-md hover:border-red-900/30 transition-colors">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full relative status-dot`} />
                    <span className="font-mono text-xs md:text-sm ml-3 text-red-400">{service.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs text-${service.color}-500`}>{service.status}</span>
                    <span className="text-xs text-gray-500">{service.uptime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard 2: Consultoria */}
        <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Consultoria Especializada</h3>
              <span className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">Ativo</span>
            </div>
            <div className="space-y-4">
              <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white">Projetos acompanhados</span>
                    <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">27 ativos</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Consultoria exclusiva para cada secretaria municipal
                  </div>
                </div>
              </div>
              <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white">Áreas atendidas</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Administração</span>
                  <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Educação</span>
                  <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Finanças</span>
                  <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Obras e Infraestrutura</span>
                  <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">Saúde</span>
                  <span className="text-xs bg-red-900/20 px-2 py-1 rounded text-red-400">+3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Espaçamento uniforme entre os cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 mb-6"> {/* Ajustado margin-top para 6 */}
      {/* Dashboard: Suporte (à esquerda do Sistema IA) */}
      <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Suporte 24/7</h3>
            <span className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">Monitorando</span>
          </div>
          
          <div className="bg-black/60 rounded-lg p-4 mb-3">
            <div className="text-sm bg-red-600 text-white p-2 rounded-lg rounded-bl-none inline-block mb-3">
              Como posso ajudar sua secretaria hoje?
            </div>
            <div className="text-sm bg-gray-800 text-gray-300 p-2 rounded-lg rounded-br-none float-right clear-both">
              Preciso de orientação sobre o novo sistema.
            </div>
            <div className="text-sm bg-red-600 text-white p-2 rounded-lg rounded-bl-none inline-block clear-both mt-3">
              Claro! Vou agendar um treinamento personalizado.
            </div>
          </div>
          
          <div className="flex gap-2 mb-3">
            <div className="flex-1 p-2 bg-black/30 border border-red-900/10 rounded text-center">
              <div className="text-xs text-gray-400 mb-1">Tempo médio de resposta</div>
              <div className="text-lg font-medium text-white">5 min</div>
            </div>
            <div className="flex-1 p-2 bg-black/30 border border-red-900/10 rounded text-center">
              <div className="text-xs text-gray-400 mb-1">Satisfação</div>
              <div className="text-lg font-medium text-white">98%</div>
            </div>
          </div>
          
          <div className="text-xs text-gray-400 p-2 bg-black/20 rounded border border-gray-800/50">
            <strong className="text-white">Suporte técnico e de gestão</strong>: desde manutenção de hardware e sistemas até direcionamentos estratégicos para prefeituras parceiras.
          </div>
        </div>
      </div>
      
      {/* Dashboard: Sistema IA (à direita do Suporte) */}
      <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Sistema de IA</h3>
            <span className="text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">Processando</span>
          </div>
          
          <div className="space-y-4">
            {/* Primeiro indicador: Análise Preditiva - Arrecadação */}
            <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white">Análise preditiva</span>
                <span className="text-xs text-emerald-500">95.5% precisão</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-black/50 px-2 py-1 rounded text-gray-400">Arrecadação</span>
                <div className="h-1.5 flex-1 bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-pink-500 rounded-full" style={{width: "95.5%"}}></div>
                </div>
              </div>
            </div>
            
            {/* Segundo indicador: Detecção de Anomalias */}
            <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white">Detecção de anomalias</span>
                <span className="text-xs text-emerald-500">98.3% precisão</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-black/50 px-2 py-1 rounded text-gray-400">Gastos públicos</span>
                <div className="h-1.5 flex-1 bg-black rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-600 to-pink-500 rounded-full" style={{width: "98.3%"}}></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">15+</div>
                  <div className="text-xs text-gray-400">Modelos IA</div>
                </div>
              </div>
              <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500 mb-1">5TB</div>
                  <div className="text-xs text-gray-400">Dados/dia</div>
                </div>
              </div>
            </div>
            
            <div className="p-3 border border-red-900/10 rounded-lg bg-black/30">
              <div className="flex items-center text-xs text-gray-400">
                <span className="text-emerald-500 mr-2">●</span>
                Sistema ativamente analisando padrões de dados municipais
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Métricas Section - Redesenhado com 3 colunas */}
<section className="py-16 px-4 bg-black/40 backdrop-blur-sm border-y border-red-900/20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-white mb-3">Métricas de Excelência</h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Resultados comprovados que demonstram o impacto de nossas soluções na gestão pública.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Consultoria & Gestão */}
      <div className="bg-black/30 border border-red-900/20 rounded-lg p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Consultoria &amp; Gestão</h3>
          <div className="p-2 bg-red-900/30 rounded-lg">
            <BarChart2 size={20} className="text-red-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">150+</div>
            <div className="text-sm text-gray-400">Projetos Ativos</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">98%</div>
            <div className="text-sm text-gray-400">Satisfação Clientes</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">45%</div>
            <div className="text-sm text-gray-400">Ganho Produtividade</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">30%</div>
            <div className="text-sm text-gray-400">Economia Média</div>
          </div>
        </div>
      </div>
      
      {/* Análise de Dados */}
      <div className="bg-black/30 border border-red-900/20 rounded-lg p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Análise de Dados</h3>
          <div className="p-2 bg-red-900/30 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">5TB</div>
            <div className="text-sm text-gray-400">Processamento Diário</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">15+</div>
            <div className="text-sm text-gray-400">Modelos IA</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">95.5%</div>
            <div className="text-sm text-gray-400">Taxa Precisão</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="flex items-center justify-center h-full">
              <span className="flex items-center gap-1.5 text-sm text-emerald-500">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Tempo Real
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resultados Municipais - Nova terceira coluna */}
      <div className="bg-black/30 border border-red-900/20 rounded-lg p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-white">Resultados Municipais</h3>
          <div className="p-2 bg-red-900/30 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">42%</div>
            <div className="text-sm text-gray-400">Redução Burocracia</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">3.2x</div>
            <div className="text-sm text-gray-400">Velocidade Processos</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">18%</div>
            <div className="text-sm text-gray-400">Aumento Arrecadação</div>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg border border-red-900/10">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-1">67%</div>
            <div className="text-sm text-gray-400">Satisfação Cidadãos</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Main Dashboard Preview - Seção Atualizada */}
<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">LABDADOS</h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Visualize todos os dados da sua prefeitura em um único lugar com nosso sistema intuitivo e completo.
      </p>
    </div>
    
    {/* Large Dashboard Preview */}
    <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-red-900/20 bg-black/70">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-gray-400">LABDADOS Hummand - Módulo Central</div>
      </div>
      <div className="p-6 font-sans">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-black/30 p-4 rounded-lg border border-red-900/10 card-hover-enhanced stagger-item animate-slide-up">
            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-400">Projetos Ativos</div>
              <FileText size={16} className="text-red-500" />
            </div>
            <div className="text-2xl font-bold text-white">27</div>
            <div className="text-xs text-emerald-500">+3 este mês</div>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-red-900/10 card-hover-enhanced stagger-item animate-slide-up">
            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-400">Orçamento</div>
              <BarChart2 size={16} className="text-red-500" />
            </div>
            <div className="text-2xl font-bold text-white">R$ 3.6M</div>
            <div className="text-xs text-emerald-500">92% executado</div>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-red-900/10 card-hover-enhanced stagger-item animate-slide-up">
            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-400">Funcionários</div>
              <Users size={16} className="text-red-500" />
            </div>
            <div className="text-2xl font-bold text-white">342</div>
            <div className="text-xs text-red-500">5 afastados</div>
          </div>
          <div className="bg-black/30 p-4 rounded-lg border border-red-900/10 card-hover-enhanced stagger-item animate-slide-up">
            <div className="flex justify-between mb-2">
              <div className="text-xs text-gray-400">Atendimentos</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M9 14h.01"></path>
                <path d="M13 18h.01"></path>
                <path d="M9 10h6"></path>
              </svg>
            </div>
            <div className="text-2xl font-bold text-white">1,254</div>
            <div className="text-xs text-emerald-500">+12% em 30 dias</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 bg-black/30 p-5 rounded-lg border border-red-900/10 card-hover-enhanced">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white">Execução Orçamentária</h3>
              <div className="flex space-x-2">
                {/* Dropdown de ano atualizado */}
                <div className="relative">
                  <select 
                    className="appearance-none bg-black/60 text-xs border border-red-900/20 rounded px-3 py-1.5 text-gray-300 pr-8 cursor-pointer hover:border-red-900/40 transition-colors"
                    disabled
                  >
                    <option>2025</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                {/* Botão Exportar atualizado */}
                <button 
                  className="bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded text-xs flex items-center gap-1 transition-colors"
                  disabled
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Exportar
                </button>
              </div>
            </div>
            
            {/* Chart Simulation com gráfico de linhas simplificado */}
            <div className="h-64 w-full">
              <div className="h-full flex flex-col justify-between">
                {/* Área do gráfico */}
                <div className="h-52 w-full relative">
                  {/* Linhas de grade sutis */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gray-800/15"></div>
                  <div className="absolute left-0 right-0 top-1/3 h-px bg-gray-800/15"></div>
                  <div className="absolute left-0 right-0 top-2/3 h-px bg-gray-800/15"></div>
                  <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-800/15"></div>
                  
                  {/* SVG para os gráficos de linha */}
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    {/* Linha de projeção (tracejada) - agora em branco */}
                    <path 
                      d="M50 160 L130 130 L210 90 L290 110 L370 125 L450 60" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.7)" 
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="4 3"
                    />
                    
                    {/* Linha de realizado (sólida) - agora em branco */}
                    <path 
                      d="M50 140 L130 105 L210 65 L290 95 L370 115 L450 40" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.9)" 
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    
                    {/* Pontos discretos na linha de realizado - agora em branco */}
                    <circle cx="50" cy="140" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                    <circle cx="130" cy="105" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                    <circle cx="210" cy="65" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                    <circle cx="290" cy="95" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                    <circle cx="370" cy="115" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                    <circle cx="450" cy="40" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                  </svg>
                </div>
                
                {/* Eixo X com meses */}
                <div className="flex justify-between px-10 mt-3">
                  <div className="text-xs text-gray-400 font-medium">Jan</div>
                  <div className="text-xs text-gray-400 font-medium">Fev</div>
                  <div className="text-xs text-gray-400 font-medium">Mar</div>
                  <div className="text-xs text-gray-400 font-medium">Abr</div>
                  <div className="text-xs text-gray-400 font-medium">Mai</div>
                  <div className="text-xs text-gray-400 font-medium">Jun</div>
                </div>
                
                {/* Legenda aprimorada com branco para ambas as linhas */}
                <div className="flex items-center justify-center mt-2 space-x-6">
                  <div className="flex items-center">
                    <div className="w-8 h-px bg-white/70 mr-2 relative">
                      <div className="absolute w-full h-full" style={{borderTop: '1.5px dashed rgba(255, 255, 255, 0.7)'}}></div>
                    </div>
                    <span className="text-xs text-gray-300">Projeção</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-2 mr-2 relative">
                      <div className="absolute w-full h-px top-1/2 bg-white/90"></div>
                      <div className="absolute w-2 h-2 rounded-full bg-white/90 left-3 top-0"></div>
                    </div>
                    <span className="text-xs text-gray-300">Realizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black/30 p-5 rounded-lg border border-red-900/10 card-hover-enhanced">
            <h3 className="text-lg font-semibold text-white mb-6">Projetos por Secretaria</h3>
            
            {/* Pie Chart Simulation */}
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xl font-bold text-white">
                  27
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-xs">Urbanismo</span>
                </div>
                <span className="text-xs font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
                  <span className="text-xs">Educação</span>
                </div>
                <span className="text-xs font-medium">8</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                  <span className="text-xs">Outros</span>
                </div>
                <span className="text-xs font-medium">7</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black/30 p-5 rounded-lg border border-red-900/10 card-hover-enhanced">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">Projetos Recentes</h3>
            {/* Botão "Ver Todos" atualizado */}
            <button className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors" disabled>
              Ver Todos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-800">
                  <th className="text-left pb-3">Projeto</th>
                  <th className="text-left pb-3">Secretaria</th>
                  <th className="text-left pb-3">Status</th>
                  <th className="text-left pb-3">Progresso</th>
                  <th className="text-right pb-3">Prazo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/50 hover:bg-black/20 transition-colors">
                  <td className="py-3">
                    <div className="font-medium text-white">Revitalização da Praça Central</div>
                    <div className="text-xs text-gray-400">ID: #PRJ-2025-001</div>
                  </td>
                  <td className="py-3">Urbanismo</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-emerald-900/20 text-emerald-500 rounded-full text-xs">Em Andamento</span>
                  </td>
                  <td className="py-3">
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-600 to-pink-500" style={{width: "75%"}}></div>
                    </div>
                  </td>
                  <td className="py-3 text-right">30/06/2025</td>
                </tr>
                <tr className="border-b border-gray-800/50 hover:bg-black/20 transition-colors">
                  <td className="py-3">
                    <div className="font-medium text-white">Modernização Escolas Municipais</div>
                    <div className="text-xs text-gray-400">ID: #PRJ-2025-008</div>
                  </td>
                  <td className="py-3">Educação</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-yellow-900/20 text-yellow-500 rounded-full text-xs">Planejamento</span>
                  </td>
                  <td className="py-3">
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-600 to-pink-500" style={{width: "35%"}}></div>
                    </div>
                  </td>
                  <td className="py-3 text-right">15/09/2025</td>
                </tr>
                <tr className="hover:bg-black/20 transition-colors">
                  <td className="py-3">
                    <div className="font-medium text-white">Sistema de Gestão Tributária</div>
                    <div className="text-xs text-gray-400">ID: #PRJ-2025-012</div>
                  </td>
                  <td className="py-3">Fazenda</td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-red-900/20 text-red-500 rounded-full text-xs">Atrasado</span>
                  </td>
                  <td className="py-3">
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-600 to-pink-500" style={{width: "48%"}}></div>
                    </div>
                  </td>
                  <td className="py-3 text-right">10/04/2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Call to Action */}
<section className="py-16 px-4 bg-black/40 backdrop-blur-sm border-t border-red-900/20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Pronto para modernizar sua gestão pública?
    </h2>
    <p className="text-xl text-gray-300 mb-8">
      Agende uma conversa com nossa equipe e descubra como podemos ajudar sua prefeitura.
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
        to="/system" 
        className="px-8 py-4 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors text-lg font-medium"
      >
        Acessar Sistema
      </Link>
    </div>
  </div>
</section>

          {/* Footer */}
<footer className="py-8 px-4 bg-black border-t border-red-900/20">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center text-sm mb-4">
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
      <p>R. Josefa Eugenia, S/N - Centro, Paraíba - PB, 58291-000, Brasil</p>
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