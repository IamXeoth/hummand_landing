// src/components/EasterEgg.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
  const [eyeBlink, setEyeBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative max-w-[360px] w-full bg-white shadow-2xl overflow-hidden">
        {/* Título Superior */}
        <div className="bg-[#DC2626] text-white py-2.5">
          <h1 className="text-2xl font-mono font-bold text-center tracking-wide">
            ÁREA DE DÉJÀ VU
          </h1>
        </div>

        <div className="p-5 space-y-7">
          {/* Bloco de Texto Superior */}
          <div className="bg-[#1C1C1C] text-white p-4 rounded-sm">
            <p className="text-center font-mono text-[13px] leading-5">
              ESTA É SUA PRIMEIRA VEZ AQUI.
              <br /><br />
              SE ESTA ÁREA PARECE FAMILIAR,
              <br />
              ALERTE IMEDIATAMENTE UM
              <br />
              DESENVOLVEDOR
            </p>
          </div>

          {/* Ícone Central */}
          <div className="w-20 h-20 mx-auto bg-[#DC2626] rounded-sm flex items-center justify-center">
            <div className="relative w-full h-full p-2">
              <div className={`absolute inset-0 transition-transform duration-200 ${eyeBlink ? 'scale-y-0' : 'scale-100'}`}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="black" 
                    strokeWidth="4"
                  />
                  {[...Array(12)].map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="15"
                      stroke="black"
                      strokeWidth="2.5"
                      transform={`rotate(${i * 30} 50 50)`}
                    />
                  ))}
                  <circle cx="50" cy="50" r="20" fill="black"/>
                  <path
                    d="M50,15 L45,10 L50,5 L55,10 L50,15"
                    fill="black"
                    transform="rotate(0 50 50)"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Texto Inferior */}
          <div className="text-center font-mono text-[13px] space-y-0">
            <p>
              SE VOCÊ <span className="text-[#DC2626]">VIR</span> ALGO,
            </p>
            <p>
              <span className="text-[#DC2626]">DIGA</span> ALGO
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <div className="bg-[#1C1C1C] text-white py-2 text-center text-[13px] font-mono">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Retorne imediatamente para o site da Hummand!
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default EasterEgg;