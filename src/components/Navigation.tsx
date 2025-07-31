"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Menu, X, Lightbulb } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "acerca", label: "Acerca" },
    { id: "historia", label: "Historia" },
    { id: "programa", label: "Programa" },
    { id: "ponentes", label: "Ponentes" },
    { id: "hackathon", label: "HackSEIIIS" },
    { id: "patrocinadores", label: "Patrocinadores" },
    { id: "registro", label: "Registro" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setActiveSection("inicio")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-none flex items-center justify-center">
              <Lightbulb className="w-6 sm:w-7 h-6 sm:h-7 text-black" />
            </div>
            <div className="text-white">
              <div className="font-bold text-lg sm:text-xl">SEIIIS</div>
              <div className="text-xs sm:text-sm text-gray-400 font-light">2024</div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 text-sm font-medium duration-300 relative ${
                  activeSection === item.id ? "text-green-400" : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          className="lg:hidden overflow-hidden bg-black/95"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "text-green-400 bg-gray-900"
                    : "text-gray-300 hover:text-white hover:bg-gray-900"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
