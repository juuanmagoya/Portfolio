const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-12">
        
        {/* Columna Izquierda - Texto */}
        <div className="space-y-8">
          {/* Badge animado */}
          <div className="inline-flex items-center space-x-3 bg-[#1E293B]/50 rounded-full px-4 py-2 mb-4 animate-slide-up">
            <span className="w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-200">Analista que también desarrolla</span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
            <span className="block text-white">Juan Manuel</span>
            <span className="block text-white">Aguirre</span>
          </h1>

          {/* Subtítulo */}
          <h2 className="text-xl text-gray-300">
            <span className="text-[#06B6D4] font-semibold">Desarrollador Web Full Stack</span> | 
            <span className="text-[#2563EB] font-semibold ml-2">Analista Funcional</span>
          </h2>

          {/* Descripción */}
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            Especializado en desarollo web con PHP/Laravel y análisis funcional.
            Convierto requerimientos de negocio en software robusto, escalable y mantenible.
            <span className="block mt-3 text-[#06B6D4] font-medium">Entiendo el problema antes de escribir código.</span>
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group">
              <span>Ver proyectos</span>
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </a>
            <a href="#contact" className="btn-secondary group">
              <i className="fas fa-envelope mr-2"></i>
              <span>Contactarme</span>
            </a>
            <a href="/assets/CV-JuanManuelAguirre.pdf" download className="btn-secondary group">
              <i className="fas fa-download mr-2"></i>
              <span>Descargar CV</span>
            </a>
          </div>
        </div>

        {/* Columna Derecha - Foto con efectos */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow de fondo */}
            <div className="absolute -inset-4 bg-linear-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Contenedor de la foto */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden animate-float">
              {/* Borde glow animado */}
              <div className="absolute inset-0 rounded-full animate-glow"></div>
              {/* Borde estático */}
              <div className="absolute inset-0 rounded-full border-4 border-[#06B6D4]/50"></div>
              {/* Imagen */}
              <img 
                src="src/assets/images/imgPerfil.jpeg" 
                alt="Foto de perfil Juanma Aguirre"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Tech Badges flotantes */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#1E293B] border border-[#06B6D4]/30 flex items-center justify-center text-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '0.5s' }}>
              <i className="fab fa-laravel text-red-500"></i>
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-[#1E293B] border border-[#2563EB]/30 flex items-center justify-center text-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
              <i className="fab fa-php text-purple-500"></i>
            </div>
            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#1E293B] border border-[#7C3AED]/30 flex items-center justify-center text-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '1.5s' }}>
              <i className="fas fa-database text-blue-500"></i>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;