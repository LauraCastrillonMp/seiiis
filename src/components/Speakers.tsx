"use client"

import { motion, AnimatePresence } from "motion/react"
import { Linkedin, Twitter, Globe, Award, BookOpen, Users, Search } from "lucide-react"
import { useState } from "react"

export default function Speakers() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpeaker, setSelectedSpeaker] = useState<any>(null)

  const speakers = [
    {
      name: "Dr. María González",
      title: "Directora de IA, Universidad de Barcelona",
      bio: "Experta en inteligencia artificial aplicada a la investigación científica con más de 15 años de experiencia. Ha publicado más de 100 artículos en revistas de alto impacto y dirigido proyectos de investigación por valor de 50 millones de euros.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+María+González",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
      keynote: true,
      category: "ia",
      achievements: [
        "Premio Turing 2023",
        "100+ publicaciones científicas",
        "Directora de 15 tesis doctorales",
        "Miembro de la Real Academia de Ciencias",
      ],
      topics: ["Inteligencia Artificial", "Machine Learning", "Investigación Científica"],
      session: "Conferencia Magistral: IA y el Futuro de la Investigación",
    },
    {
      name: "Dr. Carlos Mendoza",
      title: "Investigador Principal, MIT",
      bio: "Especialista en sostenibilidad y tecnologías verdes, autor de más de 100 publicaciones científicas. Líder mundial en investigación sobre energías renovables y cambio climático.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Carlos+Mendoza",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
      keynote: true,
      category: "sostenibilidad",
      achievements: [
        "Premio Nobel de la Paz 2021 (IPCC)",
        "150+ publicaciones científicas",
        "Asesor de la ONU",
        "Fundador de 3 startups verdes",
      ],
      topics: ["Sostenibilidad", "Energías Renovables", "Cambio Climático"],
      session: "Conferencia: Sostenibilidad en la Investigación",
    },
    {
      name: "Dra. Ana Rodríguez",
      title: "CEO, BioTech Innovations",
      bio: "Emprendedora e investigadora en biotecnología, fundadora de tres startups exitosas. Pionera en el desarrollo de terapias génicas para enfermedades raras.",
      image: "/placeholder.svg?height=300&width=300&text=Dra.+Ana+Rodríguez",
      social: {
        linkedin: "#",
        website: "#",
      },
      keynote: false,
      category: "biotecnologia",
      achievements: [
        "3 startups fundadas",
        "2 patentes internacionales",
        "Forbes 30 Under 30",
        "Premio Innovación Médica 2022",
      ],
      topics: ["Biotecnología", "Terapia Génica", "Emprendimiento"],
      session: "Panel: Innovación en Biotecnología",
    },
    {
      name: "Dr. Roberto Silva",
      title: "Director de Innovación, Google Research",
      bio: "Líder en investigación de tecnologías emergentes y transferencia de conocimiento. Experto en computación cuántica y sistemas distribuidos.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Roberto+Silva",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
      keynote: false,
      category: "tecnologia",
      achievements: [
        "20+ años en Google",
        "50+ patentes tecnológicas",
        "Líder de 100+ ingenieros",
        "Conferenciante TEDx",
      ],
      topics: ["Computación Cuántica", "Sistemas Distribuidos", "Innovación Tecnológica"],
      session: "Mesa Redonda: Transferencia de Tecnología",
    },
    {
      name: "Dra. Elena Martínez",
      title: "Profesora Titular, Universidad de Oxford",
      bio: "Investigadora en ciencias de la computación y educación digital, ganadora del Premio Turing 2023. Pionera en el desarrollo de sistemas educativos adaptativos.",
      image: "/placeholder.svg?height=300&width=300&text=Dra.+Elena+Martínez",
      social: {
        linkedin: "#",
        website: "#",
      },
      keynote: false,
      category: "educacion",
      achievements: ["Premio Turing 2023", "Cátedra en Oxford", "80+ publicaciones", "Asesora de UNESCO"],
      topics: ["Educación Digital", "Sistemas Adaptativos", "Ciencias de la Computación"],
      session: "Taller: Metodologías de Investigación Digital",
    },
    {
      name: "Dr. Fernando López",
      title: "Fundador, Innovation Labs",
      bio: "Experto en metodologías de innovación y desarrollo de ecosistemas tecnológicos. Ha asesorado a más de 200 startups y dirigido incubadoras en 15 países.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Fernando+López",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
      keynote: false,
      category: "innovacion",
      achievements: [
        "200+ startups asesoradas",
        "15 países de experiencia",
        "Autor de 5 libros",
        "Mentor de aceleradoras",
      ],
      topics: ["Metodologías de Innovación", "Ecosistemas Tecnológicos", "Emprendimiento"],
      session: "Taller: Gestión de Proyectos de Innovación",
    },
    {
      name: "Dr. Patricia Chen",
      title: "Directora de Investigación, Stanford AI Lab",
      bio: "Especialista en ética de la IA y sistemas autónomos. Líder en el desarrollo de marcos éticos para la implementación responsable de inteligencia artificial.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Patricia+Chen",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
      keynote: false,
      category: "ia",
      achievements: ["Directora en Stanford", "Comité de Ética de IEEE", "60+ publicaciones", "Asesora de gobiernos"],
      topics: ["Ética de la IA", "Sistemas Autónomos", "IA Responsable"],
      session: "Panel: Ética en la Investigación con IA",
    },
    {
      name: "Dr. Michael Johnson",
      title: "Investigador Senior, NASA",
      bio: "Científico espacial con 20 años de experiencia en misiones interplanetarias. Líder del proyecto Mars Sample Return y experto en astrobiología.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Michael+Johnson",
      social: {
        linkedin: "#",
        website: "#",
      },
      keynote: false,
      category: "ciencias",
      achievements: [
        "20 años en NASA",
        "Líder de Mars Sample Return",
        "40+ misiones espaciales",
        "Descubridor de 3 exoplanetas",
      ],
      topics: ["Ciencias Espaciales", "Astrobiología", "Exploración Planetaria"],
      session: "Conferencia: El Futuro de la Exploración Espacial",
    },
  ]

  const categories = [
    { id: "todos", label: "Todos los Ponentes", count: speakers.length },
    { id: "ia", label: "Inteligencia Artificial", count: speakers.filter((s) => s.category === "ia").length },
    {
      id: "biotecnologia",
      label: "Biotecnología",
      count: speakers.filter((s) => s.category === "biotecnologia").length,
    },
    {
      id: "sostenibilidad",
      label: "Sostenibilidad",
      count: speakers.filter((s) => s.category === "sostenibilidad").length,
    },
    { id: "tecnologia", label: "Tecnología", count: speakers.filter((s) => s.category === "tecnologia").length },
    { id: "educacion", label: "Educación", count: speakers.filter((s) => s.category === "educacion").length },
    { id: "innovacion", label: "Innovación", count: speakers.filter((s) => s.category === "innovacion").length },
    { id: "ciencias", label: "Ciencias", count: speakers.filter((s) => s.category === "ciencias").length },
  ]

  const keynoteSpeakers = speakers.filter((speaker) => speaker.keynote)
  const regularSpeakers = speakers.filter((speaker) => !speaker.keynote)

  const filteredSpeakers = speakers.filter((speaker) => {
    const matchesCategory = selectedCategory === "todos" || speaker.category === selectedCategory
    const matchesSearch =
      speaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      speaker.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ponentes Destacados</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a los expertos internacionales que compartirán sus conocimientos en SEIIS 2024
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          className="bg-slate-50 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar ponentes o temas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-green-500 text-slate-900"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Keynote Speakers */}
        {keynoteSpeakers.some((speaker) => filteredSpeakers.includes(speaker)) && (
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "linear" }}
          >
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Conferenciantes Magistrales</h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {keynoteSpeakers
                .filter((speaker) => filteredSpeakers.includes(speaker))
                .map((speaker, index) => (
                  <motion.div
                    key={speaker.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.2, ease: "linear" }}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedSpeaker(speaker)}
                  >
                    <div className="text-center">
                      <div className="relative mb-6">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-green-500"
                        />
                        <div className="absolute -top-2 -right-2 bg-green-500 text-slate-900 px-2 py-1 rounded-full text-xs font-bold">
                          KEYNOTE
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-slate-900 mb-2">{speaker.name}</h4>
                      <p className="text-green-600 font-semibold mb-4">{speaker.title}</p>
                      <p className="text-slate-600 leading-relaxed mb-6">{speaker.bio}</p>

                      {/* Topics */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {speaker.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Session */}
                      <div className="bg-white/80 rounded-lg p-3 mb-6">
                        <p className="text-sm font-medium text-slate-700">{speaker.session}</p>
                      </div>

                      <div className="flex justify-center space-x-4">
                        {speaker.social.linkedin && (
                          <motion.a
                            href={speaker.social.linkedin}
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                        {speaker.social.twitter && (
                          <motion.a
                            href={speaker.social.twitter}
                            className="text-slate-400 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Twitter className="w-5 h-5" />
                          </motion.a>
                        )}
                        {speaker.social.website && (
                          <motion.a
                            href={speaker.social.website}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Regular Speakers */}
        {regularSpeakers.some((speaker) => filteredSpeakers.includes(speaker)) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "linear" }}
          >
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Ponentes Invitados</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {regularSpeakers
                .filter((speaker) => filteredSpeakers.includes(speaker))
                .map((speaker, index) => (
                  <motion.div
                    key={speaker.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1, ease: "linear" }}
                    className="bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => setSelectedSpeaker(speaker)}
                  >
                    <div className="text-center">
                      <img
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2 border-slate-200 group-hover:border-green-500 transition-colors"
                      />
                      <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">
                        {speaker.name}
                      </h4>
                      <p className="text-slate-600 text-sm font-medium mb-3">{speaker.title}</p>

                      {/* Topics */}
                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {speaker.topics.slice(0, 2).map((topic, topicIndex) => (
                          <span key={topicIndex} className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{speaker.bio}</p>

                      <div className="flex justify-center space-x-3 mb-4">
                        {speaker.social.linkedin && (
                          <motion.a
                            href={speaker.social.linkedin}
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        )}
                        {speaker.social.twitter && (
                          <motion.a
                            href={speaker.social.twitter}
                            className="text-slate-400 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Twitter className="w-4 h-4" />
                          </motion.a>
                        )}
                        {speaker.social.website && (
                          <motion.a
                            href={speaker.social.website}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Globe className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>

                      <motion.button
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver perfil completo →
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Speaker Modal */}
        <AnimatePresence>
          {selectedSpeaker && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <img
                    src={selectedSpeaker.image || "/placeholder.svg"}
                    alt={selectedSpeaker.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-green-500"
                  />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedSpeaker.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{selectedSpeaker.title}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-green-500" />
                      Biografía
                    </h4>
                    <p className="text-slate-600 leading-relaxed">{selectedSpeaker.bio}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-green-500" />
                      Logros Destacados
                    </h4>
                    <ul className="space-y-2">
                      {selectedSpeaker.achievements.map((achievement: string, index: number) => (
                        <li key={index} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-500" />
                      Sesión en SEIIS
                    </h4>
                    <p className="text-slate-600">{selectedSpeaker.session}</p>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4">
                    {selectedSpeaker.social.linkedin && (
                      <motion.a
                        href={selectedSpeaker.social.linkedin}
                        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </motion.a>
                    )}
                    {selectedSpeaker.social.twitter && (
                      <motion.a
                        href={selectedSpeaker.social.twitter}
                        className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </motion.a>
                    )}
                    {selectedSpeaker.social.website && (
                      <motion.a
                        href={selectedSpeaker.social.website}
                        className="flex items-center space-x-2 bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe className="w-4 h-4" />
                        <span>Website</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                <motion.button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {filteredSpeakers.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <div className="text-slate-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No se encontraron ponentes</h3>
            <p className="text-slate-500">
              Intenta ajustar los filtros de búsqueda o selecciona una categoría diferente.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
