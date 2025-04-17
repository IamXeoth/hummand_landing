import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  X, 
  Menu, 
  ArrowLeft, 
  Server, 
  Database, 
  Shield, 
  Brain, 
  ChartBar, 
  Users, 
  Code, 
  Cloud, 
  LineChart,
  Cpu,
  BarChart2,
  MessageSquare,
  FileText,
  Settings,
  MonitorSmartphone
} from 'lucide-react';

const Services = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
    
    // Adiciona background com padrão sutilmente animado
    const canvas = document.getElementById('servicesBgCanvas');
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

  // Lista completa de serviços 
  const servicesData = [
    {
      id: 1,
      title: 'Infraestrutura TI',
      description: 'Instalação, manutenção e gerenciamento de toda infraestrutura tecnológica para sua prefeitura.',
      icon: <Server className="text-red-500" size={24} />,
      category: 'infra',
      features: [
        'Instalação e configuração de servidores',
        'Gerenciamento de redes',
        'Suporte técnico presencial e remoto',
        'Soluções de armazenamento e backup',
        'Virtualização de ambientes'
      ],
      caseStudy: 'Reduziu em 35% o tempo de inatividade dos sistemas de uma prefeitura de médio porte, otimizando os processos internos.'
    },
    {
      id: 2,
      title: 'Cibersegurança',
      description: 'Proteja dados sensíveis e sistemas municipais contra ameaças digitais com nossas soluções avançadas de segurança.',
      icon: <Shield className="text-red-500" size={24} />,
      category: 'seguranca',
      features: [
        'Análise de vulnerabilidades',
        'Configuração de firewalls dedicados',
        'Políticas de segurança LGPD',
        'Treinamento de funcionários',
        'Planos de resposta a incidentes'
      ],
      caseStudy: 'Implementou protocolo de segurança que impediu vazamento de dados em tentativa de ataque, preservando informações de 30.000 cidadãos.'
    },
    {
      id: 3,
      title: 'Análise de Dados',
      description: 'Transforme os dados municipais em insights acionáveis para melhorar a tomada de decisões estratégicas.',
      icon: <ChartBar className="text-red-500" size={24} />,
      category: 'dados',
      features: [
        'Dashboards personalizados',
        'Análise de tendências',
        'Visualização de dados',
        'Relatórios automáticos',
        'Integração de múltiplas fontes de dados'
      ],
      caseStudy: 'Ajudou uma prefeitura a otimizar a arrecadação municipal em 18% após análise de dados históricos e implementação de estratégias baseadas em dados.'
    },
    {
      id: 4,
      title: 'Inteligência Artificial',
      description: 'Implemente soluções de IA para automatizar processos e fornecer serviços públicos mais eficientes.',
      icon: <Brain className="text-red-500" size={24} />,
      category: 'ia',
      features: [
        'Análise preditiva para planejamento urbano',
        'Automação de processos administrativos',
        'Assistentes virtuais para atendimento ao cidadão',
        'Algoritmos de detecção de fraudes',
        'Reconhecimento de padrões para otimização de recursos'
      ],
      caseStudy: 'Sistema de IA implementado reduziu o tempo de análise de documentos em 70%, permitindo resposta mais rápida às solicitações dos cidadãos.'
    },
    {
      id: 5,
      title: 'Gestão de Bancos de Dados',
      description: 'Organize, armazene e gerencie eficientemente todos os dados municipais com soluções robustas e seguras.',
      icon: <Database className="text-red-500" size={24} />,
      category: 'dados',
      features: [
        'Modelagem e otimização de bancos de dados',
        'Migração de dados legados',
        'Integração entre diferentes sistemas',
        'Backup e recuperação',
        'Consultas e relatórios personalizados'
      ],
      caseStudy: 'Migração e consolidação de 5 sistemas isolados em uma única plataforma integrada, eliminando redundâncias e aumentando a eficiência operacional.'
    },
    {
      id: 6,
      title: 'Desenvolvimento de Sistemas',
      description: 'Crie soluções de software personalizadas para atender necessidades específicas da sua administração municipal.',
      icon: <Code className="text-red-500" size={24} />,
      category: 'software',
      features: [
        'Sistemas web e mobile',
        'Portais para cidadãos',
        'Aplicativos de gestão interna',
        'Integrações com sistemas existentes',
        'Desenvolvimento ágil e evolutivo'
      ],
      caseStudy: 'Desenvolvimento de portal cidadão que aumentou em 45% o acesso a serviços públicos digitais em uma cidade de pequeno porte.'
    },
    {
      id: 7,
      title: 'Consultoria Estratégica',
      description: 'Assessoria especializada para impulsionar a transformação digital da sua gestão municipal.',
      icon: <Users className="text-red-500" size={24} />,
      category: 'consultoria',
      features: [
        'Diagnóstico de maturidade digital',
        'Planejamento estratégico de TI',
        'Mapeamento de processos',
        'Gestão de projetos tecnológicos',
        'Capacitação de equipes'
      ],
      caseStudy: 'Consultoria resultou em plano de transformação digital que economizou R$ 240 mil/ano em processos otimizados para uma prefeitura de médio porte.'
    },
    {
      id: 8,
      title: 'Cloud Computing',
      description: 'Migre para a nuvem e aproveite os benefícios de escalabilidade, segurança e redução de custos.',
      icon: <Cloud className="text-red-500" size={24} />,
      category: 'infra',
      features: [
        'Migração para a nuvem',
        'Infraestrutura como serviço (IaaS)',
        'Plataforma como serviço (PaaS)',
        'Otimização de custos',
        'Implementação de nuvem híbrida'
      ],
      caseStudy: 'Migração para a nuvem reduziu custos de infraestrutura em 40% e melhorou a disponibilidade de sistemas críticos para 99.9%.'
    },
    {
      id: 9,
      title: 'Business Intelligence',
      description: 'Transforme seus dados em informações estratégicas para uma gestão pública mais eficiente e baseada em evidências.',
      icon: <LineChart className="text-red-500" size={24} />,
      category: 'dados',
      features: [
        'Painéis executivos',
        'KPIs de gestão pública',
        'Análise orçamentária',
        'Monitoramento de desempenho',
        'Relatórios dinâmicos'
      ],
      caseStudy: 'Implementação de BI permitiu à prefeitura identificar áreas críticas para investimento, melhorando a eficiência do gasto público em 25%.'
    },
    {
      id: 10,
      title: 'Suporte Técnico 24/7',
      description: 'Assistência técnica especializada disponível a qualquer momento para garantir o funcionamento contínuo de seus sistemas.',
      icon: <MessageSquare className="text-red-500" size={24} />,
      category: 'suporte',
      features: [
        'Helpdesk 24 horas',
        'Resolução de problemas remotamente',
        'Monitoramento proativo',
        'Gestão de incidentes',
        'Base de conhecimento personalizada'
      ],
      caseStudy: 'Tempo médio de resolução de incidentes críticos reduzido de 3 horas para 45 minutos, garantindo continuidade dos serviços públicos essenciais.'
    },
    {
      id: 11,
      title: 'Gestão Documental',
      description: 'Digitalize e organize todo o acervo documental da sua prefeitura, facilitando a busca e garantindo a preservação de informações.',
      icon: <FileText className="text-red-500" size={24} />,
      category: 'software',
      features: [
        'Digitalização de documentos',
        'Sistema de gerenciamento eletrônico',
        'Fluxos de trabalho automatizados',
        'Assinaturas digitais',
        'Armazenamento seguro e indexado'
      ],
      caseStudy: 'Digitalização reduziu em 90% o tempo de busca de documentos e liberou 120m² de espaço físico anteriormente usado para arquivo.'
    },
    {
      id: 12,
      title: 'Automação de Processos',
      description: 'Automatize processos administrativos repetitivos para aumentar a eficiência e reduzir erros humanos.',
      icon: <Settings className="text-red-500" size={24} />,
      category: 'software',
      features: [
        'Mapeamento e redesenho de processos',
        'Implementação de RPA',
        'Workflows digitais',
        'Integração entre departamentos',
        'Painéis de monitoramento'
      ],
      caseStudy: 'Automação de processos de aprovação documental reduziu o tempo médio de tramitação de 15 dias para apenas 3 dias.'
    }
  ];
  
  // Função para filtrar serviços com base na categoria ativa
  const filteredServices = activeTab === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-gray-300 font-sans relative overflow-hidden">
      {/* Background Canvas */}
      <canvas id="servicesBgCanvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      
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
                className="text-white transition-colors relative group"
              >
                Serviços
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
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
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-red-900/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-3 bg-red-900/20 text-white rounded-md transition-colors"
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
              <div className="text-center">
                <div className="inline-block px-3 py-1 mb-4 bg-red-900/20 border border-red-500/20 rounded-full text-red-400 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    <span>Nossos Serviços</span>
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Soluções <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">completas</span> para sua instituição pública
                </h1>
                
                <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                  Da infraestrutura à inteligência artificial, oferecemos todas as ferramentas necessárias 
                  para modernizar sua administração e melhorar o atendimento ao cidadão.
                </p>
                
                {/* Botão de contato direto abaixo do texto principal */}
                <div className="flex justify-center mb-8">
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-red-600 text-white hover:bg-red-500 rounded-md transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center gap-2"
                  >
                    <span>Solicite uma Consultoria</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
                
                {/* Ícones de categorias de serviços */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="p-4 bg-black/30 border border-red-900/10 rounded-lg">
                    <div className="flex flex-col items-center">
                      <Server size={24} className="text-red-500 mb-2" />
                      <span className="text-sm text-gray-300">Infraestrutura</span>
                    </div>
                  </div>
                  <div className="p-4 bg-black/30 border border-red-900/10 rounded-lg">
                    <div className="flex flex-col items-center">
                      <Shield size={24} className="text-red-500 mb-2" />
                      <span className="text-sm text-gray-300">Segurança</span>
                    </div>
                  </div>
                  <div className="p-4 bg-black/30 border border-red-900/10 rounded-lg">
                    <div className="flex flex-col items-center">
                      <Code size={24} className="text-red-500 mb-2" />
                      <span className="text-sm text-gray-300">Software</span>
                    </div>
                  </div>
                  <div className="p-4 bg-black/30 border border-red-900/10 rounded-lg">
                    <div className="flex flex-col items-center">
                      <Brain size={24} className="text-red-500 mb-2" />
                      <span className="text-sm text-gray-300">Inteligência</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção de Serviços Detalhados */}
          <section className="py-12 px-4 bg-black/40 backdrop-blur-sm border-y border-red-900/20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Conheca Nossos Serviços
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Soluções completas em tecnologia, dados e inteligência artificial para modernizar 
                  a gestão pública e transformar a experiência do cidadão.
                </p>
              </div>
              
              {/* Abas de filtro por categoria */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'all' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Todos
                </button>
                <button 
                  onClick={() => setActiveTab('infra')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'infra' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Infraestrutura
                </button>
                <button 
                  onClick={() => setActiveTab('seguranca')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'seguranca' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Segurança
                </button>
                <button 
                  onClick={() => setActiveTab('dados')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'dados' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Dados & BI
                </button>
                <button 
                  onClick={() => setActiveTab('ia')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'ia' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  IA
                </button>
                <button 
                  onClick={() => setActiveTab('software')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'software' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Software
                </button>
                <button 
                  onClick={() => setActiveTab('consultoria')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'consultoria' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Consultoria
                </button>
                <button 
                  onClick={() => setActiveTab('suporte')}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeTab === 'suporte' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-black/30 border border-red-900/20 text-gray-300 hover:bg-red-900/10'
                  }`}
                >
                  Suporte
                </button>
              </div>
              
              {/* Cards de Serviços */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredServices.map((service) => (
    <div key={service.id} className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-900/10">
      <div className="p-4">
        <div className="flex items-start mb-3">
          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-red-900/30 rounded-lg mr-3">
            {service.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">{service.title}</h3>
            <p className="text-sm text-gray-400">
              {service.description}
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-white mb-2">Recursos Principais:</h4>
          <ul className="space-y-1.5 pl-4 list-disc text-sm text-gray-400">
            {service.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-4 p-3 bg-black/30 rounded-lg border border-red-900/10">
          <h4 className="text-xs font-medium text-white mb-1">Caso de Sucesso:</h4>
          <p className="text-xs text-gray-400 italic">
            "{service.caseStudy}"
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors"
          >
            <span>Saiba mais</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</section>

 {/* Seção Como Trabalhamos */}
 <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Como Trabalhamos</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Nossa metodologia garante que cada solução seja implementada com excelência, 
                  seguindo um processo estruturado e colaborativo.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Etapa 1 */}
                <div className="relative bg-black/30 border border-red-900/20 rounded-xl p-4">
                  <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold">
                    1
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white mb-2">Diagnóstico</h3>
                    <p className="text-sm text-gray-400">
                      Realizamos uma análise completa das necessidades, desafios e infraestrutura existente da sua prefeitura.
                    </p>
                  </div>
                </div>
                
                {/* Etapa 2 */}
                <div className="relative bg-black/30 border border-red-900/20 rounded-xl p-4">
                  <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold">
                    2
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white mb-2">Planejamento</h3>
                    <p className="text-sm text-gray-400">
                      Desenvolvemos um plano personalizado com soluções específicas para atender às necessidades identificadas.
                    </p>
                  </div>
                </div>
                
                {/* Etapa 3 */}
                <div className="relative bg-black/30 border border-red-900/20 rounded-xl p-4">
                  <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold">
                    3
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white mb-2">Implementação</h3>
                    <p className="text-sm text-gray-400">
                      Executamos as soluções com metodologias ágeis, garantindo transparência e adaptabilidade durante todo o processo.
                    </p>
                  </div>
                </div>
                
                {/* Etapa 4 */}
                <div className="relative bg-black/30 border border-red-900/20 rounded-xl p-4">
                  <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white font-bold">
                    4
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white mb-2">Suporte Contínuo</h3>
                    <p className="text-sm text-gray-400">
                      Fornecemos treinamento, manutenção e suporte contínuo para garantir que sua solução continue funcionando perfeitamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção FAQ */}
          <section className="py-12 px-4 bg-black/30 backdrop-blur-sm border-y border-red-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Perguntas Frequentes</h2>
                <p className="text-lg text-gray-400">
                  Tire suas dúvidas sobre nossos serviços e como podemos ajudar sua prefeitura.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/50 border border-red-900/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Vocês atendem prefeituras de pequeno porte?</h3>
                  <p className="text-gray-400">
                    Sim! Na verdade, temos um foco especial em prefeituras de pequeno e médio porte. Nossas soluções são 
                    escaláveis e adaptáveis a diferentes tamanhos de administrações municipais, com pacotes específicos 
                    para atender orçamentos menores sem comprometer a qualidade.
                  </p>
                </div>
                
                <div className="bg-black/50 border border-red-900/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Qual o investimento necessário para implementar essas soluções?</h3>
                  <p className="text-gray-400">
                    O investimento varia de acordo com as necessidades específicas de cada prefeitura e as soluções escolhidas. 
                    Trabalhamos com um modelo de precificação transparente e flexível, com opções de pagamento mensal ou anual. 
                    Entre em contato conosco para uma avaliação personalizada e uma proposta detalhada.
                  </p>
                </div>
                
                <div className="bg-black/50 border border-red-900/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Quanto tempo leva para implementar os serviços?</h3>
                  <p className="text-gray-400">
                    O tempo de implementação depende da complexidade dos serviços escolhidos. Projetos menores, como configuração 
                    de infraestrutura básica ou suporte técnico, podem ser implementados em semanas. Projetos mais complexos, 
                    como desenvolvimento de sistemas ou soluções de IA, podem levar alguns meses. Nosso processo é transparente e 
                    você saberá exatamente o cronograma durante a fase de planejamento.
                  </p>
                </div>
                
                <div className="bg-black/50 border border-red-900/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">As soluções estão em conformidade com a LGPD?</h3>
                  <p className="text-gray-400">
                    Absolutamente! Todas as nossas soluções são desenvolvidas com conformidade à Lei Geral de Proteção de Dados 
                    (LGPD) como prioridade. Implementamos medidas técnicas e organizacionais para garantir a segurança dos dados 
                    dos cidadãos e o cumprimento de todas as exigências legais.
                  </p>
                </div>
                
                <div className="bg-black/50 border border-red-900/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">É preciso ter uma equipe de TI para utilizar os serviços?</h3>
                  <p className="text-gray-400">
                    Não necessariamente. Nossos serviços podem funcionar em diferentes modelos, desde complemento a equipes existentes 
                    até outsourcing completo das necessidades de TI. Para prefeituras sem equipe de TI, oferecemos suporte abrangente 
                    e treinamento para servidores designados, garantindo que todos possam utilizar as soluções com facilidade.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para transformar sua instituição pública?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Agende uma consultoria gratuita e descubra como nossas soluções podem modernizar sua administração.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors text-lg font-medium"
                >
                  Agendar Consultoria
                </Link>
                <a 
                  href="tel:+551134567890" 
                  className="px-8 py-4 border border-red-500/30 text-white hover:bg-red-900/20 hover:border-red-500/50 rounded-md transition-colors text-lg font-medium flex items-center justify-center gap-2"
                >
                  <span>(11) 3456-7890</span>
                </a>
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

export default Services;
