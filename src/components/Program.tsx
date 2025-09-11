"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  MapPin,
  User,
  Calendar,
  Filter,
  Search,
  Download,
  Star,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Program() {
  const [selectedDay, setSelectedDay] = useState("dia1");
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFields, setExpandedFields] = useState<Record<string, boolean>>({});

  const schedule = [
    {
      id: "dia1",
      day: "Día 1 - 23 de Octubre",
      events: [
        {
          time: "8:15 - 8:30",
          title: "Apertura del Evento",
          speaker:
            "Decano de la Facultad de Ingeniería del Tecnologico de Antioquia",
          location: "Auditorio - Tecnologico de Antioquia",
          type: "inaguración",
          country: "Colombia",
        },
        {
          time: "8:30 - 9:20",
          title: "Ciencia de datos para la mejora de la vida en las Ciudades",
          speaker: "Hugo Estrada Esquivel - Doctor en Informática",
          location: "Auditorio - Tecnologico de Antioquia",
          type: "conferencia 1",
          university: "CENIDET",
          country: "México",
          responsable: "Tecnológico de Antioquia",
        },
        {
          time: "9:30 - 10:20",
          title: "Seguridad Defensiva al Límite",
          speaker:
            "Miguel Fabián Robles Angarita - Magister en Administración de Tecnologías de Información, Master en Desarrollo Web",
          location: "Auditorio - Tecnologico de Antioquia",
          type: "conferencia 2",
          university:
            "Universidad Francisco de Paula Santander,  Empresa Robles Tecnologia",
          country: "Colombia",
          responsable: "Universidad de Santander",
          // featured: true,
        },
        {
          time: "11:00 - 11:40",
          title:
            "Sistema de Inteligencia de Negocios para identificar factores asociados al Intento de Suicidio en el Departamento del Cauca",
          speaker:
            "Fredy Alonso Vidal Alegria - Especialista en Administración de la Información y Bases de Datos, Magister en Educación, Magister en Gestión de Tecnología de la Información",
          location: "Auditorio - Tecnologico de Antioquia",
          type: "ponencia 1",
          university: "Institución Universitaria Colegio Mayor del Cauca",
          country: "Colombia",
          responsable: "Institucion Universitaria Colegio Mayor del Cauca",
        },
        {
          time: "14:00",
          title: "Organizational Data Analysis with Python",
          speaker:
            "Walter Hugo Arboleda Mazo - Doctor of Philosophy (PhD) in Information Technology",
          location: "Microsoft Teams",
          type: "taller 1",
          university: "Institución Universitaria Digital de Antioquia",
          country: "Colombia",
          responsable: "Institución Universitaria Digital de Antioquia",
        },
        {
          time: "14:00",
          title: "Aplicaciones móviles híbridas",
          speaker:
            "José de Jesús Soto Padilla - Maestro en Administración de Tecnologías de Información",
          location: "Microsoft Teams",
          type: "taller 2",
          university: "Instituto Tecnológico de Sonora",
          country: "México",
          responsable: "Instituto Tecnológico de Sonora",
        },
        {
          time: "16:00",
          title:
            "De Cero a Héroe en la Nube: Construyendo y Blindando una Aplicación Web en Oracle Cloud (OCI)",
          speaker: "Sergio Ariza - Ingeniero de Sistemas, Cloud Architect",
          location: "Microsoft Teams",
          type: "taller 3",
          university: "Oracle, Universidad de Santander",
          country: "Colombia",
          responsable: "Universidad de Santander",
        },
        {
          time: "16:00",
          title: "Ingeniería en acción: Tendencias y prácticas",
          speaker: "Sara Munevar Salcedo - Magister",
          location: "Microsoft Teams",
          type: "taller 4",
          university: "Universidad Catolica Luis Amigo",
          country: "Colombia",
          responsable: "Universidad Catolica Luis Amigo",
        },
        {
          time: "18:15 - 18:50",
          title:
            "Data as a Strategic Asset towards a Data Governance Strategy for SMEs",
          speaker:
            "Walter Hugo Arboleda Mazo - Doctor of Philosophy (PhD) in Information Technology",
          location: "Auditorio-I.U digital",
          type: "conferencia 3",
          university: "Institución Universitaria Digital de Antioquia",
          country: "Colombia",
          responsable: "Institución Universitaria Digital de Antioquia",
        },
        {
          time: "19:00 - 19:20",
          title:
            "Conectando  las habilidades del pensamiento computacional y del pensamiento matemático através de juegos serios",
          speaker: [
            "Eleonora Palta Velasco - Magister",
            "Fredy Alonso Vidal Alegría - Magister"
          ],
          location: "Auditorio-I.U digital",
          type: "ponencia 2",
          university: "Institucion Universitaria Colegio Mayor del Cauca",
          country: "Colombia",
          responsable: "Institucion Universitaria Colegio Mayor del Cauca",
        },
        {
          time: "19:25 - 19:50",
          title: "El rol del Ingeniero en Software en el futuro de la IoT",
          speaker:
            "Ramón René Palacio Cinco - Doctor en Ciencias, campo de la Ingeniería Computacional",
          location: "Auditorio-I.U digital",
          type: "ponencia 3",
          university: "Instituto Tecnológico de Sonora",
          country: "México",
          responsable: "Instituto Tecnológico de Sonora",
        },
      ],
    },
    {
      id: "dia2",
      day: "Día 2 - 24 de Octubre",
      events: [
        {
          time: "8:15 - 9:00",
          title: "Inteligencia Artificial Vs Ingenieria de Software",
          speaker:
            "Agustin Lagunes Dominguez - Doctor en Sistemas y Ambientes Educativos",
          location:
            "Auditorio - Politecnico Jaime Isaza Cadavid - Fernando Gomez Martinez",
          type: "conferencia 4",
          university: "Universidad Veracruzana",
          country: "México",
          responsable: "Universidad Veracruzana",
        },
        {
          time: "9:00 - 9:45",
          title: "Sistemas Expertos de apoyo a la decisión basados en IA",
          speaker: "Rita Flores Asis - Doctor en Ciencias de la Ingeniería",
          location: "Auditorio - Tecnologico de Antioquia",
          type: "conferencia 5",
          university: "Universidad Veracruzana",
          country: "México",
          responsable: "Universidad Veracruzana",
        },
        {
          time: "10:00 - 12:00",
          title:
            "Muestra de proyectos académicos: innovación y desarrollo desde el aula",
          speaker:
            "Estudiantes de Pregrado - Ingeniería en Software, Tecnología en Sistemas",
          location:
            "Auditorio- Politecnico Jaime Isaza Cadavid- Fernando Gomez Martinez",
          type: "presentacion poster",
          university: "Tecnologico de Antioquia",
          country: "Colombia",
          responsable: "Tecnologico de Antioquia",
        },
        {
          time: "9:45 - 10:30",
          title: "Calculadora de matriz inversa usando IA generativa",
          speaker: "Hernan Ahumada - Doctor en Informatica",
          location: "Auditorio- Politecnico Jaime Isaza Cadavid- Fernando Gomez Martinez",
          type: "ponencia 1",
          university: "Universidad de Catamarca",
          country: "Argentina",
          responsable: "Universidad de Catamarca",
        },
        {
          time: "10:30 - 10:50",
          title: "Fortalecimiento  de competencias  matemáticas para las pruebas Saber Pro Y T&T  de los estudiantes de ingeniería integrando las habilidades  del pensamiento computacional",
          speaker: [
            "Melany Lemes Yotengo - Estudiante de Ingeniería en Software",
            "Karen Liseth Mendez - Estudiante de Ingeniería en Software",
            "Angie Vanessa Argote - Estudiante de Ingenieria Informatica",
            "Carlos Mario Bucheli - Estudiante de Ingenieria Informatica"
          ],
          location: "Auditorio-Jaime Isaza Cadavid- Fernando Gomez Martinez",
          type: "ponencia 4",
          university: "Institucion Universitaria Colegio Mayor del Cauca",
          country: "Colombia",
          responsable: "Institucion Universitaria Colegio Mayor del Cauca",
        },
        {
          time: "11:00 - 12:00",
          title: "Tecnologias   Aplicadas en la Educación y Sector Productivo",
          speaker: [
            "Hugo Estrada Esquivel - Doctor en Informática",
            "Jorge Guadalupe Mendoza - Doctor en Informática",
            "Nicolas Prieto Medina - Ingeniero Electrónico",
            "Walter Hugo Arboleda Mazo - Doctor of Philosophy (PhD) in Information Technology"
          ],
          location: [
            "Auditorio - Politecnico Jaime Isaza Cadavid - Fernando Gomez Martinez",
            "Auditorio - Politecnico Jaime Isaza Cadavid - Fernando Gomez Martinez",
            "Auditorio - Politecnico Jaime Isaza Cadavid - Fernando Gomez Martinez",
            "Auditorio - Politecnico Jaime Isaza Cadavid - Fernando Gomez Martinez"
          ],
          type: "panel con expertos",
          university: [
            "CENIDET",
            "Instituto Tecnológico de Sonora",
            "Por definir",
            "Auditorio - Politecnico Jaime Isaza Cadavid - Fernando Gomez Martinez"
          ],
          country: ["México", "México", "Por definir", "Colombia"],
          responsable: [
            "CENIDET",
            "Instituto Tecnológico de Sonora",
            "Por definir",
            "Institución Universitaria Digital de Antioquia"
          ],
        },
      ],
    },
  ];

  const eventTypes = [
    { id: "todos", label: "Todos los Eventos", count: 0 },
    { id: "conferencia", label: "Conferencias", count: 0 },
    { id: "panel", label: "Paneles", count: 0 },
    { id: "taller", label: "Talleres", count: 0 },
    { id: "presentacion", label: "Presentaciones", count: 0 },
    { id: "hackathon", label: "Hackathon", count: 0 },
    { id: "ceremonia", label: "Ceremonias", count: 0 },
  ];

  // Map raw event.type values (e.g., "conferencia 1", "ponencia 3") to base categories used in filters
  const getBaseEventType = (rawType?: string) => {
    if (!rawType) return null;
    const t = rawType.toLowerCase();
    if (t.includes("conferencia")) return "conferencia";
    if (t.includes("taller")) return "taller";
    if (t.includes("panel")) return "panel";
    if (t.includes("presentacion") || t.includes("ponencia")) return "presentacion";
    if (t.includes("inag") || t.includes("inaug") || t.includes("apertura") || t.includes("cierre")) return "ceremonia";
    if (t.includes("hack")) return "hackathon";
    return null; // unclassified types won't appear in the filter list
  };

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
    };
    return colors[type as keyof typeof colors] || colors.break;
  };

  const currentSchedule = schedule.find((s) => s.id === selectedDay);
  const currentEvents = currentSchedule?.events || [];

  // Compute available filters with counts for the selected day
  const typeCounts = currentEvents.reduce((acc: Record<string, number>, ev) => {
    const base = getBaseEventType((ev as any).type);
    if (!base) return acc;
    acc[base] = (acc[base] || 0) + 1;
    return acc;
  }, {});

  const dynamicEventTypes = [
    { id: "todos", label: "Todos los Eventos", count: currentEvents.length },
    ...eventTypes
      .filter((t) => t.id !== "todos")
      .map((t) => ({ ...t, count: typeCounts[t.id] || 0 }))
      .filter((t) => t.count > 0),
  ];

  // Ensure selectedFilter is valid for the current day
  useEffect(() => {
    const available = new Set(dynamicEventTypes.map((t) => t.id));
    if (!available.has(selectedFilter)) {
      setSelectedFilter("todos");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay]);

  const filteredEvents = currentEvents.filter((event) => {
    const baseType = getBaseEventType((event as any).type);
    const matchesFilter = selectedFilter === "todos" || baseType === selectedFilter;
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // UI helpers
  const renderArray = (items: any[], key: string) => {
    const safeItems = items.filter((i) => i !== undefined && i !== null).map(String);
    const maxVisible = 2;
    const expanded = !!expandedFields[key];
    if (safeItems.length <= maxVisible) {
      return <span>{safeItems.join(" · ")}</span>;
    }
    if (expanded) {
      return (
        <>
          <span className="mr-2">{safeItems.join(" · ")}</span>
          <button
            type="button"
            className="text-green-700 hover:text-green-800 text-xs underline"
            onClick={() => setExpandedFields((prev) => ({ ...prev, [key]: false }))}
          >
            ver menos
          </button>
        </>
      );
    }
    const visible = safeItems.slice(0, maxVisible).join(" · ");
    const remaining = safeItems.slice(maxVisible);
    const remainingCount = remaining.length;
    return (
      <>
        <span className="mr-2">{visible}</span>
        <button
          type="button"
          className="text-green-700 hover:text-green-800 text-xs underline"
          title={remaining.join(" · ")}
          onClick={() => setExpandedFields((prev) => ({ ...prev, [key]: true }))}
        >
          y {remainingCount} más
        </button>
      </>
    );
  };

  const renderField = (value: any, eventIndex: number, fieldId: string) => {
    if (Array.isArray(value)) return renderArray(value, `${eventIndex}-${fieldId}`);
    if (value === undefined || value === null) return "";
    return String(value);
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Programación
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Agenda completa del Seminario Internacional de Investigación e
            Innovación SEIIIS 2025
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
                    selectedDay === day.id
                      ? "bg-green-500 text-white shadow-md"
                      : "text-green-700 hover:text-green-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {day.day.split(" - ")[0]}
                </motion.button>
              ))}
            </div>
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
              <p className="text-green-100 mt-2">
                {filteredEvents.length} eventos programados
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {filteredEvents.length === 0 && (
                  <div className="text-center py-16 bg-white/60 rounded-xl border border-green-100">
                    <p className="text-slate-700 text-lg mb-2">No hay eventos que coincidan.</p>
                    <p className="text-slate-500 text-sm">Prueba cambiando el filtro o la búsqueda.</p>
                  </div>
                )}
                {filteredEvents.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: eventIndex * 0.07,
                      ease: "easeOut",
                    }} // smoother
                    className={'relative p-6 rounded-xl bg-white/60 hover:bg-white/80 transition-all cursor-pointer group border border-green-100'}
                    whileHover={{
                      scale: 1.015,
                      y: -1,
                      transition: { duration: 0.08, ease: "easeOut" },
                    }} // instant hover
                  >

                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-shrink-0 lg:w-48">
                        <div className="flex items-center justify-center text-slate-600 font-medium bg-green-100 px-3 py-2 rounded-lg">
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
                                Autor: {renderField((event as any).speaker, eventIndex, 'speaker')}
                                {event.country && (
                                  <span className="ml-4 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                    {renderField((event as any).country, eventIndex, 'country')}
                                  </span>
                                )}
                              </div>
                            )}
                            <div className="flex items-center text-slate-600 text-sm mb-2">
                              <GraduationCap className="w-4 h-4 mr-2" />
                              Universidad: {renderField((event as any).university, eventIndex, 'university')}
                            </div>
                            {event.responsable && (
                              <div className="flex items-center text-slate-600 text-sm mb-2">
                                <Landmark className="w-4 h-4 mr-2" />
                                Responsable: {renderField((event as any).responsable, eventIndex, 'responsable')}
                              </div>
                            )}
                            <div className="flex items-center text-slate-600 text-sm mb-2">
                              <MapPin className="w-4 h-4 mr-2" />
                              Lugar: {renderField((event as any).location, eventIndex, 'location')}
                            </div>
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
              Todos los horarios están en hora local de Colombia (GMT-5). Se
              recomienda llegar 15 minutos antes de cada evento.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Ubicaciones</h4>
            <p className="text-slate-600 text-sm">
              Todos los eventos se realizan en las instalaciones del Tecnológico
              de Antioquia. Mapas detallados disponibles en recepción.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-green-200">
            <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">
              Eventos Destacados
            </h4>
            <p className="text-slate-600 text-sm">
              Los eventos marcados como destacados requieren registro previo y
              tienen cupos limitados.
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
            <h3 className="text-3xl font-bold mb-4">
              ¿Quieres tener el programa completo?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Descarga el programa detallado con información adicional, mapas y
              contactos de los ponentes.
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
  );
}
