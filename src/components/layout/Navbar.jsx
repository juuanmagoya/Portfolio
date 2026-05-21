import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Inicio', icon: 'fas fa-home' },
    { href: '#about', label: 'Sobre mí', icon: 'fas fa-road' },
    { href: '#skills', label: 'Stack', icon: 'fas fa-code' },
    { href: '#projects', label: 'Experiencia', icon: 'fas fa-project-diagram' },
    { href: '#contact', label: 'Contacto', icon: 'fas fa-envelope' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0F172A]/90 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="font-bold text-white text-xl group">
          <span className="text-white group-hover:text-[#06B6D4] transition-colors duration-300">JA</span>
          <span className="text-[#06B6D4] ml-2 group-hover:text-white transition-colors duration-300">| Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                <i className={link.icon}></i>
                {link.label}
                <div className="underline-line"></div>
              </a>
            </li>
          ))}
        </ul>

        {/* Botón Hamburguesa (solo mobile) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden relative w-8 h-8 flex flex-col justify-center items-center mobile-menu-btn z-50 ${isMenuOpen ? 'active' : ''}`}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Menú Mobile - Fondo sólido para mejor legibilidad */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-[#0F172A] shadow-2xl transform transition-transform duration-500 md:hidden flex flex-col pt-24 px-8 gap-2 z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.href}
            href={link.href}
            className="flex items-center gap-4 text-white text-lg py-4 px-4 rounded-lg hover:bg-[#1E293B] transition-all duration-300 border-b border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className={`${link.icon} w-6 text-[#06B6D4] text-xl`}></i>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;