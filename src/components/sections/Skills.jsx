// src/components/Skills.jsx
const Skills = () => {
  const skillsData = {
    desarrolloWeb: {
      title: "Desarrollo Web",
      icon: "fas fa-code",
      skills: [
        { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500", category: "Maquetado" },
        { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500", category: "Estilos" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400", category: "Frontend" },
        { name: "PHP", icon: "fab fa-php", color: "text-purple-500", category: "Backend" },
        { name: "Laravel", icon: "fab fa-laravel", color: "text-red-500", category: "Framework PHP" },
        { name: "MySQL", icon: "fas fa-database", color: "text-blue-400", category: "BD Relacional" },
        { name: "PostgreSQL", icon: "fas fa-database", color: "text-sky-400", category: "BD Avanzada" },
        { name: "API RESTful", icon: "fas fa-plug", color: "text-green-400", category: "Arquitectura" },
        { name: "Postman", icon: "fas fa-flask", color: "text-orange-500", category: "Testing APIs" }, // Icono cambiado
        { name: "Pest", icon: "fas fa-check-double", color: "text-green-500", category: "Testing PHP" },
        { name: "Tailwind", icon: "fas fa-paint-brush", color: "text-cyan-400", category: "Framework CSS", customIcon: true, imgSrc: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
        { name: "Livewire", icon: "fas fa-bolt", color: "text-pink-500", category: "Fullstack Laravel" },
        { name: "Alpine.js", icon: "fab fa-js", color: "text-green-400", category: "Frontend UI" },
        { name: "Git", icon: "fab fa-git-alt", color: "text-orange-600", category: "Control Versiones" },
        { name: "GitHub", icon: "fab fa-github", color: "text-gray-300", category: "Repositorio" }
      ]
    },
    analisisFuncional: {
      title: "Análisis Funcional",
      icon: "fas fa-chart-line",
      skills: [
        { name: "UML", icon: "fas fa-project-diagram", color: "text-blue-400", category: "Diagramación" },
        { name: "BPMN", icon: "fas fa-sitemap", color: "text-green-400", category: "Procesos" },
        { name: "Casos de Uso", icon: "fas fa-tasks", color: "text-yellow-400", category: "Requerimientos" },
        { name: "Historias de Usuario", icon: "fas fa-user-check", color: "text-purple-400", category: "Agile" },
        { name: "Diagramas ER", icon: "fas fa-database", color: "text-blue-300", category: "Modelado Datos" },
        { name: "Toma de Requerimientos", icon: "fas fa-comments", color: "text-cyan-400", category: "Relevamiento" },
        { name: "Kanban", icon: "fas fa-columns", color: "text-red-400", category: "Gestión Visual" },
        { name: "Confluence", icon: "fab fa-confluence", color: "text-blue-500", category: "Documentación" },
        { name: "Jira", icon: "fab fa-jira", color: "text-blue-400", category: "Gestión Proyectos" },
        { name: "SCRUM", icon: "fas fa-users", color: "text-orange-400", category: "Metodología" },
        { name: "Testing Manual", icon: "fas fa-vial", color: "text-teal-400", category: "QA", subtitle: "Zephyr" },
        { name: "Soporte a Usuarios", icon: "fas fa-headset", color: "text-emerald-400", category: "Capacitación", subtitle: "Onboarding" }
      ]
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0F172A]/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Encabezado de la sección */}
        <div className="text-center">
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-subtitle">
            Herramientas que domino para transformar análisis en código funcional
          </p>
        </div>

        {/* Desarrollo Web */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-code text-2xl text-cyan-400"></i>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Desarrollo Web
              </h3>
            </div>
            <div className="ml-3 flex-1 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {skillsData.desarrolloWeb.skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-[#1E293B]/50 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center gap-1 transition-all duration-300 hover:scale-105 hover:bg-[#1E293B]/80 cursor-pointer border border-gray-700/50 group"
              >
                <div className="w-8 h-8 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {skill.customIcon ? (
                    <img src={skill.imgSrc} alt={skill.name} className="w-6 h-6" />
                  ) : (
                    <i className={`${skill.icon} ${skill.color}`}></i>
                  )}
                </div>
                <span className="text-gray-200 font-medium text-xs md:text-sm text-center">
                  {skill.name}
                </span>
                <span className="text-[10px] text-gray-400 text-center">{skill.category}</span>
                {skill.subtitle && (
                  <span className="text-[9px] text-gray-500 text-center mt-0.5">{skill.subtitle}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Análisis Funcional */}
        <div className="mt-16">
          <div className="flex items-center mb-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-chart-line text-2xl text-purple-400"></i>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Análisis Funcional
              </h3>
            </div>
            <div className="ml-3 flex-1 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {skillsData.analisisFuncional.skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-[#1E293B]/50 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center gap-1 transition-all duration-300 hover:scale-105 hover:bg-[#1E293B]/80 cursor-pointer border border-gray-700/50 group"
              >
                <div className="w-8 h-8 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className={`${skill.icon} ${skill.color}`}></i>
                </div>
                <span className="text-gray-200 font-medium text-xs md:text-sm text-center">
                  {skill.name}
                </span>
                <span className="text-[10px] text-gray-400 text-center">{skill.category}</span>
                {skill.subtitle && (
                  <span className="text-[9px] text-gray-500 text-center mt-0.5">{skill.subtitle}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;