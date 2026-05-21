// src/components/Projects.jsx
const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Liga Glamour",
      description: "Aplicación web de gestión administrativa integral de una liga de esports reconocida de Mobile Legends en Argentina. Permite a administradores y líderes gestionar equipos, jugadores, divisiones, estadísticas y torneos de forma eficiente.",
      techBadge: { name: "Full Stack Moderno", icon: "fab fa-react", color: "cyan" },
      status: { text: "En producción", color: "green" },
      icon: "fas fa-trophy",
      features: [
        { icon: "fas fa-users", text: "Gestión de jugadores/equipos" },
        { icon: "fas fa-layer-group", text: "Divisiones y torneos" },
        { icon: "fas fa-chart-simple", text: "Estadísticas en vivo" },
        { icon: "fas fa-shield-alt", text: "Roles (Admin/Líder)" }
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Supabase"],
      links: [
        { text: "Ver sitio", icon: "fas fa-external-link-alt", url: "https://ligaglamours.vercel.app", type: "demo" }
      ]
    },
    {
      id: 2,
      title: "TuPedido",
      description: "Sistema integral para la digitalización de procesos en una panadería artesanal. Desarrollado tras un análisis completo de sus operaciones manuales, optimizando la producción, sistema POS y gestión de pedidos.",
      techBadge: { name: "Laravel Full Stack", icon: "fab fa-laravel", color: "red" },
      status: { text: "Completado", color: "green" },
      icon: "fas fa-store",
      features: [
        { icon: "fas fa-industry", text: "Control de producción" },
        { icon: "fas fa-shopping-cart", text: "Gestión de pedidos" },
        { icon: "fas fa-boxes", text: "Inventario automatizado" },
        { icon: "fas fa-chart-line", text: "Dashboard de métricas" }
      ],
      tags: ["PHP", "Laravel", "MySQL", "Tailwind", "SCRUM", "Livewire", "Blade"],
      links: [] // Sin enlaces por no estar en producción
    },
    {
      id: 3,
      title: "Menuvya",
      description: "SaaS multi-tenant de catálogo digital con código QR. Restaurantes y bares crean su menú interactivo, lo actualizan en tiempo real, analizan preferencias y gestionan pedidos que llegan directamente por WhatsApp.",
      techBadge: { name: "SaaS Multi-tenant", icon: "fas fa-cloud", color: "blue" },
      status: { text: "En producción", color: "green" },
      icon: "fas fa-qrcode",
      features: [
        { icon: "fas fa-store", text: "Negocios multi-tenant" },
        { icon: "fas fa-chart-pie", text: "Analítica de consumo" },
        { icon: "fas fa-qrcode", text: "Generación de QR" },
        { icon: "fab fa-whatsapp", text: "Pedidos por WhatsApp" }
      ],
      tags: ["Laravel", "PHP", "MySQL", "Tailwind", "Livewire", "Blade", "SCRUM"],
      links: [
        { text: "Ver demo", icon: "fas fa-external-link-alt", url: "https://menuvya.com/cafedelcentro", type: "demo" }
      ]
    }
  ];

  // Función para determinar el color del badge de tecnología
  const getTechBadgeColor = (color) => {
    const colors = {
      red: "bg-red-500/20 text-red-400",
      blue: "bg-blue-500/20 text-blue-400",
      cyan: "bg-cyan-500/20 text-cyan-400"
    };
    return colors[color] || "bg-gray-500/20 text-gray-400";
  };

  // Función para determinar el color del estado
  const getStatusColor = (color) => {
    const colors = {
      green: "bg-green-500"
    };
    return colors[color] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-24 bg-[#0F172A]/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="text-center">
          <h2 className="section-title">Experiencia</h2>
          <p className="section-subtitle">
            Soluciones que muestran mi enfoque analítico y capacidad técnica
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header: Badge y Estado */}
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTechBadgeColor(project.techBadge.color)}`}>
                  <i className={`${project.techBadge.icon} mr-2`}></i>
                  {project.techBadge.name}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status.color)}`}></span>
                  <span className="text-gray-300">{project.status.text}</span>
                </div>
              </div>

              {/* Icono del proyecto */}
              <div className="text-4xl mb-4">
                <i className={`${project.icon} text-cyan-400`}></i>
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Características */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                    <i className={`${feature.icon} text-green-400 w-4`}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-[#0F172A]/50 rounded-md text-xs text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              {project.links.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0F172A]/50 rounded-lg text-sm text-gray-300 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-400"
                    >
                      <i className={link.icon}></i>
                      {link.text}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-2 px-4 bg-gray-800/30 rounded-lg text-sm text-gray-500">
                  <i className="fas fa-code-branch mr-2"></i>
                  En desarrollo privado
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Texto explicativo adicional */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estos proyectos demuestran mi capacidad tanto para el desarrollo full stack con Laravel
            como para la creación de aplicaciones modernas con Next.js y React, siempre con atención
            al análisis funcional, la experiencia de usuario y las buenas prácticas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;