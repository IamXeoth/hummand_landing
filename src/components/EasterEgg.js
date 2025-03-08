import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal, Menu, X, ArrowRight } from 'lucide-react';

const EasterEgg = () => {
  const [loaded, setLoaded] = useState(false);
  const [bootSequence, setBootSequence] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [accessGranted, setAccessGranted] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [inputStage, setInputStage] = useState('email'); // 'email' ou 'password'
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Terminal boot sequence text
  const bootMessages = [
    '> Inicializando sistema Hummand OS v3.5.0...',
    '> Carregando kernel...',
    '> Verificando integridade do sistema...',
    '> Estabelecendo conexão com servidores remotos...',
    '> Carregando módulos de segurança...',
    '> Inicializando interfaces de rede...',
    '> Verificando atualizações...',
    '> Carregando banco de dados municipal...',
    '> Inicializando interface de usuário...',
  ];

  // Access denied message
  const accessDeniedMessage = '❌ ACESSO NEGADO: Sistema em manutenção. Entre em contato com o administrador do sistema.';

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
    
    // Adiciona background com padrão sutilmente animado
    const canvas = document.getElementById('terminalBgCanvas');
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

    // Inicia a sequência de boot apenas se não foi concluída
    if (!bootComplete) {
      const timer = setTimeout(() => {
        typeBootSequence(0);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    // Detectar scroll para efeito no header
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Animação do cursor piscante
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(cursorInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, bootComplete]);

  // Efeito para adicionar focus no input quando o usuário digita
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (bootComplete && !accessGranted) {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bootComplete, accessGranted]);

  // Efeito para scroll automático do terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typedText, userInput, passwordInput]);

  // Função para simular a digitação da sequência de boot
  const typeBootSequence = (index) => {
    if (index < bootMessages.length) {
      const currentMessage = bootMessages[index];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex <= currentMessage.length) {
          setTypedText(prev => prev + currentMessage.charAt(charIndex));
          charIndex++;
        } else {
          setTypedText(prev => prev + '\n\n');
          clearInterval(typingInterval);
          
          // Delay antes da próxima mensagem
          setTimeout(() => {
            typeBootSequence(index + 1);
          }, 300);
        }
      }, 30);
    } else {
      // Sequência de boot concluída, aguardando input do usuário
      setTypedText(prev => prev + '> Todos os sistemas ativos e prontos.\n\n' +
        '=================================================================================\n' +
        '                      SISTEMA DE ADMINISTRAÇÃO PÚBLICA                          \n' +
        '=================================================================================\n\n' +
        'Digite suas credenciais para acessar o sistema:\n\n'
      );
      
      setBootComplete(true);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    
    if (inputStage === 'email') {
      // Adiciona o email digitado ao histórico do terminal
      setTypedText(prev => prev + '$ E-mail: ' + userInput + '\n\n');
      // Avança para o estágio de senha
      setInputStage('password');
      setUserInput('');
    } else {
      // Adiciona asteriscos para a senha ao histórico do terminal
      setTypedText(prev => prev + '$ Senha: ' + '*'.repeat(passwordInput.length) + '\n\n');
      
      // Easter egg: se o usuário tentar qualquer login
      setTimeout(() => {
        setTypedText(prev => prev + accessDeniedMessage + '\n\n');
        setInputStage('email');
        setUserInput('');
        setPasswordInput('');
      }, 800);
    }
  };

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
      <canvas id="terminalBgCanvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      
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
              
              {/* Botão Acessar Sistema à direita - Destacado como ativo */}
              <Link 
                to="/system" 
                className="px-6 py-2.5 bg-red-600 text-white hover:bg-red-500 rounded-md transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center gap-2 transform hover:-translate-y-0.5 border-2 border-red-500/50"
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
                  className="px-4 py-3 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors text-center font-medium shadow-md border border-red-500/50"
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
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/70 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-red-900/20 bg-black/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Terminal size={14} className="text-red-500" />
                    <span>Hummand Terminal v3.5.0</span>
                  </div>
                  <div className="w-20"></div> {/* Espaçador para manter o header centralizado */}
                </div>
                
                {/* Terminal Content */}
                <div 
                  ref={terminalRef}
                  className="font-mono text-sm p-4 bg-black/90 h-[70vh] overflow-y-auto"
                >
                  <div className="text-gray-300 whitespace-pre-wrap">{typedText}</div>
                  
                  {bootComplete && (
                    <form onSubmit={handleInputSubmit} className="flex items-center mt-2">
                      <span className="text-red-500 mr-2">{inputStage === 'email' ? 'E-mail $' : 'Senha $'}</span>
                      <input
                        ref={inputRef}
                        type={inputStage === 'email' ? 'text' : 'password'}
                        value={inputStage === 'email' ? userInput : passwordInput}
                        onChange={inputStage === 'email' ? handleInputChange : handlePasswordChange}
                        className="flex-1 bg-transparent outline-none border-none text-white font-mono"
                        autoFocus
                      />
                      <span className={`terminal-cursor ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                    </form>
                  )}
                </div>
                
                {/* Terminal Footer */}
                <div className="px-4 py-2 border-t border-red-900/20 bg-black/80 flex justify-between items-center">
                  <div className="text-xs text-gray-500">Sistema em manutenção</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-red-500">Offline</span>
                  </div>
                </div>
              </div>
              
              {/* Informação adicional - Ajustado para não ser cortado */}
              <div className="mt-6 text-center mb-6">
                <p className="text-gray-400 mb-4">
                  O sistema administrativo da Hummand está temporariamente indisponível.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-500 rounded-md transition-all"
                >
                  <span>Entrar em Contato</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="py-6 px-4 bg-black border-t border-red-900/20 w-full">
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

export default EasterEgg;