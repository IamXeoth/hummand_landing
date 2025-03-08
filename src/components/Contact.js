import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Menu, ArrowLeft, Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader, Home } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
    sector: 'Administração'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLoaded(true);
    
    // Adiciona background com padrão sutilmente animado
    const canvas = document.getElementById('contactBgCanvas');
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: ''
    });

    emailjs.sendForm('service_hummand', 'template_contact_hummand', formRef.current)
      .then(
        (result) => {
          setFormStatus({
            submitting: false,
            submitted: true,
            error: false,
            message: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.'
          });
          // Limpar formulário após envio bem-sucedido
          setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            message: '',
            sector: 'Administração'
          });
        },
        (error) => {
          console.error('Erro ao enviar mensagem:', error);
          setFormStatus({
            submitting: false,
            submitted: true,
            error: true,
            message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente pelos canais abaixo.'
          });
        }
      );
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
      <canvas id="contactBgCanvas" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      
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
                className="text-white transition-colors relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300"></span>
              </Link>
            </div>
            
            {/* Botões à direita - Adicionado botão Voltar */}
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
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-red-900/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 py-3 bg-red-900/20 text-white rounded-md transition-colors"
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
          <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 scale-in">Entre em Contato</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Interessado em nossas soluções para transformação digital da sua prefeitura? 
                  Entre em contato com nossa equipe especializada.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Formulário de Contato */}
                <div className="lg:col-span-8 bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
                  <div className="p-4 md:p-6">
                    {formStatus.submitted ? (
                      <div className={`p-4 flex flex-col items-center justify-center text-center h-full min-h-64 ${formStatus.error ? 'text-red-500' : 'text-emerald-500'}`}>
                        {formStatus.error ? (
                          <AlertCircle size={48} className="mb-3" />
                        ) : (
                          <CheckCircle size={48} className="mb-3" />
                        )}
                        <h3 className="text-xl font-bold mb-2">{formStatus.error ? 'Erro no Envio' : 'Mensagem Enviada!'}</h3>
                        <p className="text-gray-300 mb-4">{formStatus.message}</p>
                        <button 
                          onClick={() => setFormStatus({...formStatus, submitted: false})}
                          className="px-5 py-2 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors"
                        >
                          {formStatus.error ? 'Tentar Novamente' : 'Enviar Outra Mensagem'}
                        </button>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                          <Mail className="mr-2 text-red-500" size={20} />
                          Formulário de Contato
                        </h2>
                        
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                          {/* Dados Básicos */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                Nome Completo*
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-black/40 border border-red-900/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                placeholder="Digite seu nome completo"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                E-mail*
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-black/40 border border-red-900/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                placeholder="seu.email@exemplo.com"
                              />
                            </div>
                          </div>
                          
                          {/* Segunda Linha */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                                Telefone*
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-black/40 border border-red-900/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                placeholder="(00) 00000-0000"
                              />
                            </div>
                            <div>
                              <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
                                Cidade/Prefeitura*
                              </label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-black/40 border border-red-900/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                placeholder="Nome da sua cidade"
                              />
                            </div>
                          </div>
                          
                          {/* Setor de Interesse */}
                          <div>
                            <label htmlFor="sector" className="block text-sm font-medium text-gray-300 mb-1">
                              Setor de Interesse
                            </label>
                            <select
                              id="sector"
                              name="sector"
                              value={formData.sector}
                              onChange={handleChange}
                              className="w-full px-3 py-2 bg-black/40 border border-red-900/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                            >
                              <option value="Administração">Administração</option>
                              <option value="Finanças">Finanças</option>
                              <option value="Educação">Educação</option>
                              <option value="Saúde">Saúde</option>
                              <option value="Urbanismo">Urbanismo</option>
                              <option value="Assistência Social">Assistência Social</option>
                              <option value="Meio Ambiente">Meio Ambiente</option>
                              <option value="Outro">Outro</option>
                            </select>
                          </div>
                          
                          {/* Mensagem */}
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                              Mensagem*
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows="5"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              className="w-full px-3 py-2 bg-black/40 border border-red-900/20 text-white rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                              placeholder="Descreva como podemos ajudar sua prefeitura..."
                            ></textarea>
                          </div>
                          
                          {/* Botão Enviar */}
                          <div className="flex justify-end">
                            <button
                              type="submit"
                              disabled={formStatus.submitting}
                              className="px-6 py-3 bg-red-600 text-white hover:bg-red-500 rounded-md transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {formStatus.submitting ? (
                                <>
                                  <Loader size={16} className="animate-spin" />
                                  <span>Enviando...</span>
                                </>
                              ) : (
                                <>
                                  <Send size={16} />
                                  <span>Enviar Mensagem</span>
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Informações de Contato e Suporte */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Card de Informações de Contato */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
                    <div className="p-4">
                      <h2 className="text-xl font-bold text-white mb-4">Informações de Contato</h2>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Mail className="text-red-500 mt-1 mr-3" size={18} />
                          <div>
                            <h3 className="text-sm font-medium text-white">E-mail</h3>
                            <a href="mailto:contato@hummand.com.br" className="text-gray-400 hover:text-red-400 transition-colors">
                              contato@hummand.com.br
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="text-red-500 mt-1 mr-3" size={18} />
                          <div>
                            <h3 className="text-sm font-medium text-white">Telefone</h3>
                            <a href="tel:+551134567890" className="text-gray-400 hover:text-red-400 transition-colors">
                              (11) 3456-7890
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin className="text-red-500 mt-1 mr-3" size={18} />
                          <div>
                            <h3 className="text-sm font-medium text-white">Endereço</h3>
                            <p className="text-gray-400">
                              R. Josefa Eugenia, S/N - Centro<br />
                              Paraíba - PB, 58291-000
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock className="text-red-500 mt-1 mr-3" size={18} />
                          <div>
                            <h3 className="text-sm font-medium text-white">Horário de Atendimento</h3>
                            <p className="text-gray-400">
                              Segunda a Sexta: 9h às 18h<br />
                              Suporte online: 24/7
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card de Suporte 24/7 */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-900/20 rounded-xl overflow-hidden shadow-xl">
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold text-white">Suporte 24/7</h3>
                        <span className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-900/30 text-emerald-400 rounded-full">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          Online
                        </span>
                      </div>
                      
                      <div className="p-3 bg-black/40 rounded-lg border border-red-900/10 mb-3">
                        <div className="text-sm text-gray-300">
                          <p className="mb-2">Nossa equipe está pronta para ajudar sua prefeitura:</p>
                          <ul className="space-y-1.5 pl-5 list-disc">
                            <li>Implantação e configuração</li>
                            <li>Treinamento para servidores</li>
                            <li>Consultoria em transformação digital</li>
                            <li>Suporte técnico especializado</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-center">
                        <div className="flex-1 p-2 bg-black/30 border border-red-900/10 rounded">
                          <div className="text-xs text-gray-400 mb-1">Tempo de Resposta</div>
                          <div className="text-lg font-medium text-white">5 min</div>
                        </div>
                        <div className="w-4"></div>
                        <div className="flex-1 p-2 bg-black/30 border border-red-900/10 rounded">
                          <div className="text-xs text-gray-400 mb-1">Satisfação</div>
                          <div className="text-lg font-medium text-white">98%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <p>R. Josefa Eugenia, S/N - Centro, Paraíba - PB, 58291-000, Brasil</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Contact;