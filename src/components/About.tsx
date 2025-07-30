"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, Lightbulb, BookOpen, Globe, Zap, Heart, Star, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function About() {
  const [activeTab, setActiveTab] = useState("objetivos")

  const features = [
    {
      icon: Target,
      title: "Investigación de Vanguardia",
      description: "Presentación de los últimos avances en investigación científica y tecnológica.",
    },
    {
      icon: Users,
      title: "Networking Internacional",
      description: "Conecta con investigadores, académicos y profesionales de todo el mundo.",
    },
    {
      icon: Award,
      title: "Reconocimiento Académico",
      description: "Certificaciones y reconocimientos por participación en el evento.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Aplicada",
      description: "Soluciones prácticas e innovadoras para desafíos actuales.",
    },
  ]

  const objectives = [
    {
      title: "Fomentar la Investigación",
      description: "Promover la investigación científica y tecnológica de alta calidad en instituciones educativas.",
      icon: BookOpen,
    },
    {
      title: "Intercambio de Conocimiento",
      description: "Facilitar el intercambio de experiencias y conocimientos entre investigadores internacionales.",
      icon: Globe,
    },
    {
      title: "Innovación Tecnológica",
      description: "Impulsar el desarrollo de tecnologías innovadoras que contribuyan al progreso social.",
      icon: Zap,
    },
    {
      title: "Formación Académica",
      description: "Fortalecer la formación de nuevos investigadores y profesionales en áreas estratégicas.",
      icon: Users,
    },
  ]

  const impact = [
    { number: "2,500+", label: "Investigadores Participantes", description: "A lo largo de 10 ediciones" },
    { number: "150+", label: "Proyectos Presentados", description: "Investigaciones de alto impacto" },
    { number: "50+", label: "Instituciones Aliadas", description: "Red de colaboración" },
  ]

  const testimonials = [
    {
      name: "Dr. María González",
      role: "Universidad de Barcelona",
      text: "SEIIS ha sido fundamental para establecer colaboraciones internacionales.",
      rating: 5,
    },
    {
      name: "Prof. Carlos Mendoza",
      role: "MIT",
      text: "La calidad académica y la organización del evento son excepcionales.",
      rating: 5,
    },
    {
      name: "Dra. Ana Rodríguez",
      role: "BioTech Innovations",
      text: "SEIIS me ha permitido conectar con investigadores y encontrar oportunidades.",
      rating: 5,
    },
  ]

  const tabs = [
    { id: "objetivos", label: "Objetivos", icon: Target },
    { id: "impacto", label: "Impacto", icon: TrendingUp },
    { id: "testimonios", label: "Testimonios", icon: Heart },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Acerca del Evento</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            El Seminario Internacional de Investigación e Innovación SEIIS es el evento académico más importante del
            año, reuniendo a los mejores investigadores y profesionales del sector.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
              Una Década de Excelencia Académica
            </h3>
            <div className="space-y-3 sm:space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                La Facultad de Ingeniería del tecnológico de Antioquia, con el apoyo de otras IES, organiza el evento académico SEIIIS, con el propósito de generar un espacio para la disertación y socialización de tópicos como la Inteligencia Artificial, la Inteligencia de Negocios, el Big Data, la Ciberseguridad, la Seguridad de la información, la ingeniería de Software, entre otros
              </p>
              <p>
                En esta edición contaremos con conferencias, ponencias, talleres, y panel con expertos. Estas actividades serán servidas por expertos académicos de las universidades, y empresas que participan en la organización del evento. 
              </p>
              <p>
                Serán dos días de actividades que enriquecerán de conocimiento, experiencias, y buenas prácticas a todas las comunidades académicas que nos acompañarán de forma presencial y virtual. 
              </p>
            </div>

            {/* <motion.div
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 rounded-xl border border-green-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2, ease: "linear" }}
            >
              <div className="flex items-center mb-2 sm:mb-3">
                <Star className="w-5 sm:w-6 h-5 sm:h-6 text-green-500 mr-2" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">Reconocimiento Internacional</h4>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm">
                SEIIS ha sido reconocido por organizaciones internacionales como uno de los eventos académicos más
                importantes de Latinoamérica en el área de investigación e innovación.
              </p>
            </motion.div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "linear" }}
            className="relative"
          >
            <motion.div
              className="aspect-square rounded-2xl bg-cover bg-center shadow-2xl overflow-hidden"
              style={{
                backgroundImage: "url('/research-bg.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-slate-900/20 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, ease: "linear" }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">10 Años</div>
                  <div className="text-slate-600 text-sm sm:text-base">de Innovación</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "linear" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-4 sm:p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1, ease: "linear" }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-12 sm:w-16 h-12 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-slate-900" />
              </motion.div>
              <h4 className="text-sm sm:text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "linear" }}
        >
          <div className="flex flex-wrap justify-center mb-6 sm:mb-8 border-b border-slate-200">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 font-medium transition-colors text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "text-green-600 border-b-2 border-green-500"
                    : "text-slate-600 hover:text-green-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            {activeTab === "objetivos" && (
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={objective.title}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: "linear" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <objective.icon className="w-5 sm:w-6 h-5 sm:h-6 text-slate-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{objective.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{objective.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "impacto" && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {impact.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: "linear" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl sm:text-4xl font-bold text-green-500 mb-2">{item.number}</div>
                    <div className="font-semibold text-slate-900 mb-1 text-xs sm:text-sm">{item.label}</div>
                    <div className="text-xs text-slate-600">{item.description}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "testimonios" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    className="p-4 sm:p-6 bg-white rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: "linear" }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-3 sm:mb-4 italic text-xs sm:text-sm">"{testimonial.text}"</p>
                    <div>
                      <div className="font-bold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
