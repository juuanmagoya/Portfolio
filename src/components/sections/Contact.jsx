
import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    loading: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          loading: false,
          message: '¡Mensaje enviado con éxito! Te responderé a la brevedad.'
        });
        form.reset();
      } else {
        throw new Error('Error al enviar');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        loading: false,
        message: 'Hubo un error al enviar. Por favor, intentá nuevamente.'
      });
    }

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        loading: false,
        message: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "Juan Manuel Aguirre",
      url: "https://www.linkedin.com/in/juan-manuel-aguirre-86601921a/",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "@juuanmagoya",
      url: "https://github.com/juuanmagoya",
      color: "text-gray-300",
      bgColor: "bg-gray-500/10"
    },
    {
      icon: "fas fa-envelope",
      label: "Localización",
      value: "Goya, Corrientes, Argentina",
      url: "https://www.google.com/maps/place/Goya,+Corrientes/@-29.1545861,-59.2661712,12z/data=!4m6!3m5!1s0x944e849605523bef:0x7c0911546a329ae1!8m2!3d-29.143592!4d-59.2644099!16zL20vMDhkcTVs?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: "fas fa-briefcase",
      label: "Focus",
      value: "Analizo, Desarrollo y Comunico",
      url: "#contact",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Fondo con gradiente suave */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4 bg-linear-to-r from-white via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            ¿Tenés un proyecto, una idea o simplemente querés charlar?
            <br />
            <span className="text-[#06B6D4]">Escribime y lo conversamos.</span>
          </p>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-[#1E293B]/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Columna Izquierda - Info personal */}
            <div className="p-8 md:p-10 bg-linear-to-br from-[#0F172A]/30 to-transparent">
              <div className="space-y-8">


                {/* Redes y contacto */}
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    📍 Encontrame en
                  </p>
                  <div className="space-y-3">
                    {contactMethods.map((method, idx) => (
                      <a
                        key={idx}
                        href={method.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-3 rounded-xl ${method.bgColor} transition-all duration-300 group border border-transparent hover:border-gray-700 hover:bg-[#1E293B]/50`}
                      >
                        <div className={`w-10 h-10 rounded-full ${method.bgColor} flex items-center justify-center text-xl ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                          <i className={method.icon}></i>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">{method.label}</p>
                          <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Formulario */}
            <div className="p-8 md:p-10 bg-[#0F172A]/30 backdrop-blur-sm">
              
              {/* Mensajes de estado */}
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-xl ${formStatus.success ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'} backdrop-blur-sm`}>
                  <div className="flex items-center gap-3">
                    <i className={`${formStatus.success ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'} ${formStatus.success ? 'text-green-500' : 'text-red-500'} text-xl`}></i>
                    <div>
                      <p className={`font-medium ${formStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                        {formStatus.success ? 'Mensaje enviado' : 'Error'}
                      </p>
                      <p className={`text-sm ${formStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                        {formStatus.message}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form 
                action="https://formspree.io/f/mykjplnp" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    className="w-full px-4 py-3 bg-[#0F172A]/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all duration-300" 
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    className="w-full px-4 py-3 bg-[#0F172A]/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all duration-300" 
                    placeholder="Tu email"
                    required
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message" 
                    rows="4"
                    className="w-full px-4 py-3 bg-[#0F172A]/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all duration-300 resize-none" 
                    placeholder="Contame sobre tu proyecto o consulta..."
                    required
                  ></textarea>
                </div>
                
                <input type="hidden" name="_subject" value="Nuevo mensaje desde Portfolio" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <button 
                  type="submit" 
                  className="w-full bg-linear-to-r from-[#2563EB] to-[#7C3AED] py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <i className="fas fa-paper-plane text-sm"></i>
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-center text-xs text-gray-600 mt-4">
                Respondo en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;