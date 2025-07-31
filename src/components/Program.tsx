"use client"

import { motion, AnimatePresence } from "motion/react"
import { Clock, MapPin, User, Calendar, Filter, Search, Download, Star } from "lucide-react"
import { useState } from "react"

export default function Program() {
  const [selectedDay, setSelectedDay] = useState("dia1")
  const [selectedFilter, setSelectedFilter] = useState("todos")
  const [searchTerm, setSearchTerm] = useState("")

  const schedule = [
    {
      id: "dia1",
      day: "Día 1 - 24 de Octubre",
      events: [
        {
          time: "8:00 - 9:00",
          title: "Registro y Acreditación",
          speaker: "Comité Organizador",
          location: "Hall Principal",
          type: "registro",
          description: "Bienvenida a participantes, entrega de credenciales y material del evento",
          capacity: "500 personas",
        },
        {
          time: "9:00 - 9:30",
          title: "Ceremonia de Apertura",
          speaker: "Rector TdeA - Dr. Lorenzo Portocarrero",
          location: "Auditorio Principal",
          type: "ceremonia",
          description: "Palabras de bienvenida y presentación oficial del evento",
          capacity: "400 personas",
        },
        {
          time: "9:30 - 10:30",
          title: "Conferencia Magistral: IA y el Futuro de la Investigación",
          speaker: "Dr. María González - Universidad de Barcelona",
          location: "Auditorio Principal",
          type: "conferencia",
          description:
            "Exploración de cómo la inteligencia artificial está transformando los métodos de investigación científica",
          capacity: "400 personas",
          featured: true,
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break & Networking",
          speaker: "",
          location: "Hall Principal",
          type: "break",
          description: "Espacio para networking y degustación de café colombiano",
          capacity: "500 personas",
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Innovación en Biotecnología",
          speaker: "Panel de Expertos Internacionales",
          location: "Auditorio Principal",
          type: "panel",
          description: "Mesa redonda sobre los últimos avances en biotecnología aplicada",
          capacity: "400 personas",
        },
        {
          time: "12:30 - 14:00",
          title: "Almuerzo de Networking",
          speaker: "",
          location: "Cafetería Central",
          type: "break",
          description: "Almuerzo con oportunidades de networking entre participantes",
          capacity: "500 personas",
        },
        {
          time: "14:00 - 15:30",
          title: "Talleres Paralelos",
          speaker: "Diversos Facilitadores",
          location: "Salas 1-4",
          type: "taller",
          description:
            "Talleres prácticos en metodologías de investigación, escritura científica y gestión de proyectos",
          capacity: "25 personas por taller",
        },
        {
          time: "15:30 - 16:00",
          title: "Coffee Break",
          speaker: "",
          location: "Hall Principal",
          type: "break",
          description: "Pausa para café y networking",
          capacity: "500 personas",
        },
        {
          time: "16:00 - 17:30",
          title: "Presentación de Proyectos Estudiantiles",
          speaker: "Estudiantes Participantes",
          location: "Auditorio Secundario",
          type: "presentacion",
          description: "Presentación de los mejores proyectos de investigación estudiantil",
          capacity: "200 personas",
        },
        {
          time: "18:00 - 20:00",
          title: "Cóctel de Bienvenida",
          speaker: "",
          location: "Terraza Principal",
          type: "social",
          description: "Evento social para fortalecer vínculos entre participantes",
          capacity: "300 personas",
        },
      ],
    },
    {
      id: "dia2",
      day: "Día 2 - 25 de Octubre",
      events: [
        {
          time: "8:30 - 9:00",
          title: "Registro Día 2",
          speaker: "Comité Organizador",
          location: "Hall Principal",
          type: "registro",
          description: "Registro para participantes del segundo día",
          capacity: "500 personas",
        },
        {
          time: "9:00 - 10:00",
          title: "Conferencia: Sostenibilidad en la Investigación",
          speaker: "Dr. Carlos Mendoza - MIT",
          location: "Auditorio Principal",
          type: "conferencia",
          description: "Cómo integrar principios de sostenibilidad en proyectos de investigación",
          capacity: "400 personas",
          featured: true,
        },
        {
          time: "10:00 - 10:30",
          title: "Coffee Break",
          speaker: "",
          location: "Hall Principal",
          type: "break",
          description: "Pausa para café y networking",
          capacity: "500 personas",
        },
        {
          time: "10:30 - 12:00",
          title: "Mesa Redonda: Transferencia de Tecnología",
          speaker: "Panel Internacional",
          location: "Auditorio Principal",
          type: "panel",
          description: "Discusión sobre estrategias efectivas para la transferencia de tecnología universidad-empresa",
          capacity: "400 personas",
        },
        {
          time: "12:00 - 13:30",
          title: "Almuerzo",
          speaker: "",
          location: "Cafetería Central",
          type: "break",
          description: "Almuerzo con networking",
          capacity: "500 personas",
        },
        {
          time: "13:30 - 15:00",
          title: "Hackathon SEIIIS - Presentación de Soluciones",
          speaker: "Equipos Participantes",
          location: "Laboratorio de Innovación",
          type: "hackathon",
          description: "Presentación de soluciones innovadoras desarrolladas durante el hackathon",
          capacity: "150 personas",
          featured: true,
        },
        {
          time: "15:00 - 15:30",
          title: "Coffee Break",
          speaker: "",
          location: "Hall Principal",
          type: "break",
          description: "Pausa para café",
          capacity: "500 personas",
        },
        {
          time: "15:30 - 16:30",
          title: "Premiación y Reconocimientos",
          speaker: "Comité Académico",
          location: "Auditorio Principal",
          type: "ceremonia",
          description: "Entrega de premios a los mejores proyectos y participaciones destacadas",
          capacity: "400 personas",
        },
        {
          time: "16:30 - 17:00",
          title: "Ceremonia de Clausura",
          speaker: "Directivos TdeA",
          location: "Auditorio Principal",
          type: "ceremonia",
          description: "Palabras de clausura y anuncio de la próxima edición",
          capacity: "400 personas",
        },
      ],
    },
  ]

  const eventTypes = [
    { id: "todos", label: "Todos los Eventos", count: 0 },
    { id: "conferencia", label: "Conferencias", count: 0 },
    { id: "panel", label: "Paneles", count: 0 },
    { id: "taller", label: "Talleres", count: 0 },
    { id: "presentacion", label: "Presentaciones", count: 0 },
    { id: "hackathon", label: "Hackathon", count: 0 },
    { id: "ceremonia", label: "Ceremonias", count: 0 },
  ]

  const getEventTypeColor = (type: string) => {
    const colors = {
      registro: "bg-green-100 text-green-800 border-green-200",
      ceremonia: "bg-emerald-100 text-emerald-800 border-emerald-200",
      conferencia: "bg-teal-100 text-teal-800 border-teal-200",
      panel: "bg-lime-100 text-lime-800 border-lime-200",
      taller: "bg-green-100 text-green-800 border-green-200",
      presentacion: "bg-emerald-100 text-emerald-800 border-emerald-200",
      hackathon: "bg-teal-100 text-teal-800 border-teal-200",
      break: "bg-gray-100 text-gray-600 border-gray-200",
      social: "bg-green-100 text-green-800 border-green-200",
    }
    return colors[type as keyof typeof colors] || colors.break
  }

  const currentSchedule = schedule.find((s) => s.id === selectedDay)
  const filteredEvents =
    currentSchedule?.events.filter((event) => {
      const matchesFilter = selectedFilter === "todos" || event.type === selectedFilter
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.speaker.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesFilter && matchesSearch
    }) || []

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Programación</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Agenda completa del Seminario Internacional de Investigación e Innovación SEIIIS 2024
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-green-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Day Selector */}
            <div className="flex bg-green-100 rounded-xl p-1">
              {schedule.map((day) => (
                <motion.button
                  key={day.id}
                  onClick={() => setSelectedDay(day.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedDay === day.id ? "bg-green-500 text-white shadow-md" : "text-green-700 hover:text-green-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {day.day.split(" - ")[0]}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar eventos o ponentes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-green-600" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80"
              >
                {eventTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Download */}
            <motion.button
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Descargar PDF</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Schedule */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-green-200"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-green-200" />
                {currentSchedule?.day}
              </h3>
              <p className="text-green-100 mt-2">{filteredEvents.length} eventos programados</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {filteredEvents.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: eventIndex * 0.07, ease: "easeOut" }} // smoother
                    className={`relative p-6 rounded-xl bg-white/60 hover:bg-white/80 transition-all cursor-pointer group border border-green-100 ${
                      event.featured ? "ring-2 ring-green-500 bg-green-50/80 hover:bg-green-100/80" : ""
                    }`}
                    whileHover={{ scale: 1.015, y: -1, transition: { duration: 0.08, ease: "easeOut" } }} // instant hover
                  >
                    {event.featured && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        DESTACADO
                      </div>
                    )}

                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="lg:w-32 flex-shrink-0">
                        <div className="flex items-center text-slate-600 font-medium bg-green-100 px-3 py-2 rounded-lg">
                          <Clock className="w-4 h-4 mr-2 text-green-600" />
                          {event.time}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-grow">
                            <h4 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-green-700 transition-colors">
                              {event.title}
                            </h4>
                            {event.speaker && (
                              <div className="flex items-center text-slate-600 text-sm mb-2">
                                <User className="w-4 h-4 mr-2" />
                                {event.speaker}
                              </div>
                            )}
                            <div className="flex items-center text-slate-600 text-sm mb-3">
                              <MapPin className="w-4 h-4 mr-2" />
                              {event.location}
                              {event.capacity && (
                                <span className="ml-4 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                  {event.capacity}
                                </span>
                              )}
                            </div>
                            {event.description && (
                              <p className="text-slate-600 text-sm leading-relaxed mb-3">{event.description}</p>
                            )}
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}
                            >
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </span>
                            {event.type !== "break" && event.type !== "registro" && (
                              <motion.button
                                className="text-green-600 hover:text-green-700 text-sm font-medium"
                                whileHover={{ scale: 1.03, transition: { duration: 0.08, ease: "easeOut" } }} // instant hover
                                whileTap={{ scale: 0.97, transition: { duration: 0.08, ease: "easeInOut" } }} // instant tap
                              >
                                Más detalles →
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Information */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "linear" }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Horarios</h4>
            <p className="text-slate-600 text-sm">
              Todos los horarios están en hora local de Colombia (GMT-5). Se recomienda llegar 15 minutos antes de cada
              evento.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Ubicaciones</h4>
            <p className="text-slate-600 text-sm">
              Todos los eventos se realizan en las instalaciones del Tecnológico de Antioquia. Mapas detallados
              disponibles en recepción.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Eventos Destacados</h4>
            <p className="text-slate-600 text-sm">
              Los eventos marcados como destacados requieren registro previo y tienen cupos limitados.
            </p>
          </div>
        </motion.div>

        {/* Download Program CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "linear" }}
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">¿Quieres tener el programa completo?</h3>
            <p className="text-xl mb-8 opacity-90">
              Descarga el programa detallado con información adicional, mapas y contactos de los ponentes.
            </p>
            <motion.button
              className="bg-white text-green-700 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-colors inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Descargar Programa Completo (PDF)</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
