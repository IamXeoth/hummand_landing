// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import { Terminal, Send, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

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

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        'service_ukoqmui',
        'template_xlmiyv3',
        formState,
        'MWA3Zz7e2OhZLHHSC'
      );
      
      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const locationArt = `
    [HUMMAND LAB]
    ===============
    Curral de Cima
    Paraíba - Brasil
    ===============
  `;

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      <div className="grid-bg fixed inset-0 opacity-5"></div>

      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between h-16 px-6">
            <Link to="/" className="flex items-center gap-3 float-element">
              <NeuralLogo />
              <span className="text-sm text-indigo-800 font-semibold tracking-wider">HUMMAND</span>
            </Link>
            <div className="flex items-center gap-4">
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
          </nav>
        </div>
      </header>

      {/* Main Contact Interface */}
      <main className="pt-16 min-h-screen relative">
        <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Terminal Header */}
          <div className="p-6 border-b border-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-2 text-indigo-400">
                <Terminal className="w-4 h-4" />
                <span className="text-xs">Terminal Hummand v2.5.0</span>
              </div>
              <div className="command-line">
                <span className="text-gray-500">$</span>
                <span className="text-indigo-400"> init</span>
                <span className="text-gray-400"> contact-system</span>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="p-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Location Section */}
              <div className="space-y-4">
                <div className="text-xs text-gray-500">&gt; Carregando localização...</div>
                <div className="metric-card p-4 bg-gray-900/30 border border-gray-800/50 rounded">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm text-indigo-400">Location Status: ONLINE</span>
                  </div>
                  <pre className="text-xs text-gray-400 whitespace-pre-wrap">{locationArt}</pre>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <div className="text-xs text-gray-500">&gt; Iniciando sistema de mensagens...</div>
                <div className="text-xs text-gray-500">&gt; Digite seu nome:</div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="flex-1 bg-transparent text-indigo-400 outline-none text-sm caret-indigo-400"
                      required
                    />
                  </div>

                  <div className="text-xs text-gray-500">&gt; Digite seu email:</div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="flex-1 bg-transparent text-indigo-400 outline-none text-sm caret-indigo-400"
                      required
                    />
                  </div>

                  <div className="text-xs text-gray-500">&gt; Digite sua mensagem:</div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500">$</span>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="flex-1 bg-transparent text-indigo-400 outline-none text-sm min-h-[100px] resize-none caret-indigo-400"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-indigo-900 text-indigo-100 hover:bg-indigo-800 rounded transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span className="text-sm">
                        {isSubmitting ? 'Processando...' : 'Enviar Mensagem'}
                      </span>
                    </button>
                  </div>
                </form>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="text-xs text-emerald-500">
                    &gt; Mensagem enviada com sucesso! Em breve entraremos em contato.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-xs text-red-500">
                    &gt; Erro ao enviar mensagem. Por favor, tente novamente.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-800/50 p-6 mt-12">
            <div className="max-w-4xl mx-auto flex justify-between items-center text-xs text-gray-500">
              <div>© 2025 Hummand. Site por <a href="https://viniciuslisboa.com.br" className="text-indigo-400 hover:text-indigo-300">Vinícius Lisboa</a></div>
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

export default Contact;