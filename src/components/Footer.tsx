"use client"

import { motion } from "framer-motion"
import { Lightbulb, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Camera } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-800 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-none flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-black" />
              </div>
              <div>
                <div className="font-bold text-2xl">SEIIS</div>
                <div className="text-sm text-gray-400 font-light">2025 - 10ma Edición</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md">
              El Seminario Internacional de Investigación e Innovación más importante de Colombia. Conectando
              investigadores, académicos y profesionales desde 2014.
            </p>
            {/* <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 hover:bg-green-500 rounded-none flex items-center justify-center transition-colors duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
          >
            <h4 className="font-bold text-lg mb-6 text-green-400">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {["Acerca del Evento", "Programación", "Ponentes", "Registro", "Historia"].map(
                (link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm block py-1"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "linear" }}
          >
            <h4 className="font-bold text-lg mb-6 text-green-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div className="font-medium">Tecnológico de Antioquia</div>
                  <div>Calle 78B #72A-220</div>
                  <div>Medellín, Colombia</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">+57 (4) 444-5555</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">info@seiis.edu.co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Camera className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-sm">galeria@seiis.edu.co</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "linear" }}
        >
          <div className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 SEIIS - Seminario Internacional de Investigación e Innovación. Todos los derechos reservados.
          </div>
          {/* <div className="text-gray-400 text-sm text-center sm:text-right">
            Diseñado por <a href="#" className="text-green-400 hover:underline">Tu Empresa</a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  )
}
