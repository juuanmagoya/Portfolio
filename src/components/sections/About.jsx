// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        {/* Títulos */}
        <div className="text-center">
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-subtitle">
            Analista Funcional y Desarrollador Full Stack
          </p>
        </div>
        
        {/* Contenido */}
        <div className="mt-12">
          <div className="space-y-5 text-gray-300 leading-relaxed">
            
            <p>
              Estudié Análisis de Sistemas pensando que todo se trataba de programar. 
              Pero en el camino me di cuenta de que <span className="text-[#06B6D4] font-medium"> entender el problema </span> 
              es tan importante como saber resolverlo.
            </p>

            <p>
              Hoy disfruto tanto de analizar necesidades como de escribir código. 
              Me gusta encontrar la forma más simple y efectiva de hacer que las cosas funcionen.
            </p>
            
            <p>
              Trabajo principalmente con <span className="text-[#2563EB] font-medium">PHP, Laravel, React y bases de datos relacionales</span>, 
              pero siempre trato de elegir la herramienta adecuada para cada situación.
            </p>

            {/* Cita destacada - más sencilla */}
            <div className="bg-[#1E293B]/30 rounded-xl p-6 mt-6 border-l-4 border-[#06B6D4]">
              <p className="text-gray-300 italic text-base">
                "Mi objetivo es crear soluciones que realmente sirvan: 
                que automaticen tareas, ordenen el caos o simplemente 
                hagan el trabajo más llevadero para alguien."
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;