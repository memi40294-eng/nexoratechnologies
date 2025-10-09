import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, 
  Brain, 
  Database, 
  Shield, 
  Code, 
  Zap, 
  Phone, 
  Mail, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Componente de carga
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="w-20 h-20 border-4 border-orange-500 rounded-full border-t-transparent mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
              NEXORA
            </h1>
          </div>
        </motion.div>
      </div>
    );
  }

  // Componentes de secciones
  const InicioSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          NEXORA TECHNOLOGIES
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Bienvenido a Nexora Technologies, somos una empresa dedicada al desarrollo de tecnología de vanguardia. 
          Creamos soluciones que impulsan la innovación, la eficiencia y el crecimiento sostenible de las empresas.
        </motion.p>
        <motion.p 
          className="text-lg text-gray-400 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Líderes en transformación digital, combinamos expertise técnico con visión estratégica para 
          construir el futuro tecnológico de tu organización. Confianza, innovación y excelencia en cada línea de código.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 94, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('servicios')}
          className="bg-gradient-to-r from-orange-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center mx-auto gap-2 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Explora nuestras soluciones
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );

  const ServiciosSection = () => {
    const servicios = [
      {
        icon: Cloud,
        title: "Cloud Computing",
        description: "Soluciones de nube seguras, escalables y de alto rendimiento.",
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: Brain,
        title: "Inteligencia Artificial",
        description: "Aplicaciones inteligentes que optimizan procesos y decisiones empresariales.",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: Database,
        title: "Big Data Analyst",
        description: "Análisis avanzado de datos para transformar información en resultados.",
        color: "from-green-500 to-teal-500"
      },
      {
        icon: Shield,
        title: "Ciberseguridad",
        description: "Protección integral ante amenazas digitales y ciberataques.",
        color: "from-red-500 to-orange-500"
      },
      {
        icon: Code,
        title: "Desarrollo Custom",
        description: "Creación de software y plataformas personalizadas para cada cliente.",
        color: "from-indigo-500 to-purple-500"
      },
      {
        icon: Zap,
        title: "Automatización",
        description: "Implementación de sistemas automatizados que impulsan la productividad.",
        color: "from-yellow-500 to-orange-500"
      }
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  scale: 1.02
                }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${servicio.color} rounded-xl flex items-center justify-center mb-6`}>
                  <servicio.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{servicio.title}</h3>
                <p className="text-gray-300 leading-relaxed">{servicio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const ImpactoSection = () => {
    const stats = [
      { number: "200+", label: "Soluciones tecnológicas desarrolladas" },
      { number: "50+", label: "Empresas aliadas" },
      { number: "12+", label: "Países con presencia de Nexora" }
    ];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4 flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestro Impacto
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center lg:text-left"
                >
                  <motion.div 
                    className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-xl text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                {/* Chip 3D estilo retro-futurista */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-600">
                  <div className="absolute inset-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Circuitos */}
                    <div className="absolute inset-8">
                      <div className="grid grid-cols-4 gap-2">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="w-full h-1 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full opacity-60"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Efectos de luz */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-cyan-400/20 rounded-3xl blur-xl animate-pulse"></div>
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ContactoSection = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Teléfono</p>
                  <p className="text-white font-semibold">+52 56 1307 2964</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Correo</p>
                  <p className="text-white font-semibold">nexoratecnology@gmail.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 group-hover:border-cyan-400/50"
                  placeholder="Tu nombre"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-cyan-500/0 group-hover:from-orange-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
              
              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 group-hover:border-cyan-400/50"
                  placeholder="Tu correo electrónico"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-cyan-500/0 group-hover:from-orange-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
              
              <div className="group relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300 group-hover:border-cyan-400/50 resize-none"
                  placeholder="Tu mensaje"
                ></textarea>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-cyan-500/0 group-hover:from-orange-500/10 group-hover:to-cyan-500/10 transition-all duration-300 pointer-events-none"></div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 229, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Enviar Mensaje
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <InicioSection />;
      case 'servicios':
        return <ServiciosSection />;
      case 'impacto':
        return <ImpactoSection />;
      case 'contacto':
        return <ContactoSection />;
      default:
        return <InicioSection />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setActiveSection('inicio')}
          >
            NEXORA
          </motion.h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['inicio', 'servicios', 'impacto', 'contacto'].map((section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-cyan-500/50 text-cyan-400' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            >
              <div className="flex flex-col space-y-2 px-4 py-4">
                {['inicio', 'servicios', 'impacto', 'contacto'].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-lg text-left capitalize ${
                      activeSection === section 
                        ? 'bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-cyan-500/50 text-cyan-400' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Main Content */}
      <main className="pt-20">
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Nexora Technologies. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Innovando el futuro, hoy.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;