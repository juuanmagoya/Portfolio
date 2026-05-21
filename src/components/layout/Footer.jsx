// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-[#0F172A] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://github.com/juuanmagoya" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-[#1E293B]/50 flex items-center justify-center text-xl text-gray-400 transition-all duration-300 hover:bg-[#06B6D4]/20 hover:text-[#06B6D4] hover:scale-110"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/juan-manuel-aguirre-86601921a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-10 h-10 rounded-full bg-[#1E293B]/50 flex items-center justify-center text-xl text-gray-400 transition-all duration-300 hover:bg-[#06B6D4]/20 hover:text-[#06B6D4] hover:scale-110"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        
        <p className="text-gray-500">
          Juanma Aguirre | Desarrollador Full Stack & Analista Funcional
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Transformando análisis en soluciones digitales
        </p>
      </div>
    </footer>
  );
};

export default Footer;