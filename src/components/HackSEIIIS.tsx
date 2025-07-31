"use client"

import { motion, AnimatePresence } from "motion/react"
import {
  Clock,
  Trophy,
  Users,
  Lightbulb,
  CheckCircle,
  HelpCircle,
  Target,
  Rocket,
  Brain,
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HackSEIIIS() {
  const [activeTab, setActiveTab] = useState("info")
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null)
  const [hoveredWinner, setHoveredWinner] = useState<number | null>(null)
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [teamSize, setTeamSize] = useState(2)
  const [skillLevel, setSkillLevel] = useState("intermediate")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isCountdownActive, setIsCountdownActive] = useState(true)
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [registrationStep, setRegistrationStep] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({ participants: 0, projects: 0, hours: 0 })

  const hackathonInfo = {
    date: "22-23 Octubre 2024",
    location: "Tecnológico de Antioquia - Laboratorio de Innovación",
    theme: "Soluciones Tecnológicas para Desafíos Sociales",
    registration: "Abierta hasta el 15 de Octubre",
    participants: "Equipos de 2-4 personas",
  }

  const challenges = [
    {
      title: "Educación Digital",
      description: "Crear soluciones que mejoren el acceso y calidad de la educación en zonas rurales",
      icon: "🎓",
      difficulty: "Intermedio",
      color: "bg-emerald-500",
    },
    {
      title: "Salud Comunitaria",
      description: "Desarrollar herramientas para mejorar la atención médica en comunidades vulnerables",
      icon: "🏥",
      difficulty: "Avanzado",
      color: "bg-green-600",
    },
    {
      title: "Sostenibilidad Ambiental",
      description: "Innovar en tecnologías para la conservación del medio ambiente",
      icon: "🌱",
      difficulty: "Intermedio",
      color: "bg-teal-500",
    },
    {
      title: "Inclusión Social",
      description: "Crear aplicaciones que promuevan la inclusión de personas con discapacidad",
      icon: "♿",
      difficulty: "Básico",
      color: "bg-lime-500",
    },
  ]

  const technologies = [
    { name: "React/Next.js", category: "Frontend", icon: "⚛️", selected: false },
    { name: "Python/Django", category: "Backend", icon: "🐍", selected: false },
    { name: "Node.js", category: "Backend", icon: "🟢", selected: false },
    { name: "Flutter", category: "Mobile", icon: "📱", selected: false },
    { name: "TensorFlow", category: "AI/ML", icon: "🧠", selected: false },
    { name: "Arduino/IoT", category: "Hardware", icon: "🔧", selected: false },
    { name: "Blockchain", category: "Web3", icon: "⛓️", selected: false },
    { name: "Unity", category: "AR/VR", icon: "🎮", selected: false },
  ]

  const schedule = [
    { time: "22 Oct - 08:00", event: "Registro y Bienvenida", status: "upcoming" },
    { time: "22 Oct - 09:00", event: "Presentación de Desafíos", status: "upcoming" },
    { time: "22 Oct - 10:00", event: "Inicio del Hackathon", status: "upcoming" },
    { time: "22 Oct - 20:00", event: "Checkpoint de Avance", status: "upcoming" },
    { time: "23 Oct - 08:00", event: "Desayuno y Mentorías", status: "upcoming" },
    { time: "23 Oct - 14:00", event: "Entrega Final de Proyectos", status: "upcoming" },
    { time: "23 Oct - 15:00", event: "Presentaciones (5 min por equipo)", status: "upcoming" },
    { time: "23 Oct - 17:00", event: "Deliberación del Jurado", status: "upcoming" },
    { time: "23 Oct - 18:00", event: "Premiación en Evento Principal", status: "upcoming" },
  ]

  const prizes = [
    {
      place: "1er Lugar",
      prize: "$5,000,000 COP",
      benefits: ["Incubación en Ruta N", "Mentoría por 6 meses", "Acceso a inversores"],
      color: "from-emerald-400 to-emerald-600",
      icon: "🥇",
    },
    {
      place: "2do Lugar",
      prize: "$3,000,000 COP",
      benefits: ["Espacio de coworking por 3 meses", "Mentoría por 3 meses"],
      color: "from-green-400 to-green-600",
      icon: "🥈",
    },
    {
      place: "3er Lugar",
      prize: "$1,500,000 COP",
      benefits: ["Cursos especializados", "Networking con empresas"],
      color: "from-teal-400 to-teal-600",
      icon: "🥉",
    },
    {
      place: "Mención Especial",
      prize: "$500,000 COP",
      benefits: ["Reconocimiento en publicaciones SEIIIS"],
      color: "from-lime-400 to-lime-600",
      icon: "⭐",
    },
  ]

  const previousWinners = [
    {
      year: "2023",
      project: "EcoSense",
      team: "TechGreen",
      description: "Sistema IoT para monitoreo ambiental en zonas urbanas",
      image: "/placeholder.svg?height=120&width=200&text=EcoSense",
      technologies: ["IoT", "Python", "React"],
      impact: "Implementado en 5 ciudades",
    },
    {
      year: "2022",
      project: "MediConnect",
      team: "HealthTech",
      description: "Plataforma para conectar médicos rurales con especialistas",
      image: "/placeholder.svg?height=120&width=200&text=MediConnect",
      technologies: ["React Native", "Node.js", "WebRTC"],
      impact: "500+ consultas realizadas",
    },
    {
      year: "2021",
      project: "EduAccess",
      team: "LearnLab",
      description: "Solución de educación remota para zonas sin conectividad",
      image: "/placeholder.svg?height=120&width=200&text=EduAccess",
      technologies: ["Flutter", "Firebase", "AI"],
      impact: "1000+ estudiantes beneficiados",
    },
  ]

  const mentors = [
    {
      name: "Dr. Ana García",
      expertise: "AI/Machine Learning",
      company: "Google",
      image: "/placeholder.svg?height=80&width=80&text=Ana",
      available: true,
    },
    {
      name: "Carlos Mendoza",
      expertise: "Full Stack Development",
      company: "Microsoft",
      image: "/placeholder.svg?height=80&width=80&text=Carlos",
      available: true,
    },
    {
      name: "María Rodríguez",
      expertise: "UX/UI Design",
      company: "Figma",
      image: "/placeholder.svg?height=80&width=80&text=María",
      available: false,
    },
    {
      name: "Luis Torres",
      expertise: "Blockchain & Web3",
      company: "Ethereum Foundation",
      image: "/placeholder.svg?height=80&width=80&text=Luis",
      available: true,
    },
  ]

  const faqs = [
    {
      question: "¿Quiénes pueden participar?",
      answer:
        "Estudiantes universitarios, profesionales, investigadores y entusiastas de la tecnología. Al menos un miembro del equipo debe estar inscrito en SEIIIS 2024.",
    },
    {
      question: "¿Necesito tener experiencia en programación?",
      answer:
        "No es obligatorio que todos los miembros del equipo sepan programar. Valoramos equipos multidisciplinarios con diferentes habilidades como diseño, negocio, investigación y desarrollo.",
    },
    {
      question: "¿Puedo llevar un proyecto ya iniciado?",
      answer:
        "No. Todos los proyectos deben iniciarse durante el hackathon. Sin embargo, puedes traer ideas previamente conceptualizadas.",
    },
    {
      question: "¿Qué debo llevar al evento?",
      answer:
        "Tu computadora, cargadores, y cualquier hardware específico que necesites para tu proyecto. Proporcionaremos alimentación, Wi-Fi, espacios de trabajo y algunos componentes básicos.",
    },
    {
      question: "¿Cómo se evalúan los proyectos?",
      answer:
        "Los proyectos serán evaluados según: innovación (30%), impacto social (30%), viabilidad técnica (20%), presentación (10%) y experiencia de usuario (10%).",
    },
  ]

  const sponsors = [
    { name: "Ruta N", logo: "/placeholder.svg?height=40&width=120&text=Ruta+N" },
    { name: "MinTIC", logo: "/placeholder.svg?height=40&width=120&text=MinTIC" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=40&width=120&text=Google+Cloud" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120&text=Microsoft" },
  ]

  // Countdown timer
  useEffect(() => {
    if (!isCountdownActive) return

    const targetDate = new Date("2024-10-22T08:00:00").getTime()
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [isCountdownActive])

  // Animated statistics
  useEffect(() => {
    const animateStats = () => {
      const targets = { participants: 150, projects: 45, hours: 36 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setAnimatedStats({
          participants: Math.floor(targets.participants * progress),
          projects: Math.floor(targets.projects * progress),
          hours: Math.floor(targets.hours * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setAnimatedStats(targets)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }

    if (activeTab === "info") {
      animateStats()
    }
  }, [activeTab])

  // Auto-rotate challenges
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChallenge((prev) => (prev + 1) % challenges.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const toggleTechnology = (techName: string) => {
    setSelectedTech((prev) => (prev.includes(techName) ? prev.filter((t) => t !== techName) : [...prev, techName]))
  }

  const resetCountdown = () => {
    setIsCountdownActive(false)
    setTimeout(() => setIsCountdownActive(true), 100)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Interactive Elements */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Hack<span className="text-green-600">SEIIIS</span> 2024
          </motion.h2>
          <div className="w-16 sm:w-24 h-1 bg-green-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            36 horas de innovación, colaboración y tecnología para resolver desafíos reales
          </p>

          {/* Interactive Countdown */}
          <motion.div
            className="mt-8 bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border border-green-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">Tiempo restante para el hackathon</h3>
              <div className="flex space-x-2">
                <motion.button
                  onClick={() => setIsCountdownActive(!isCountdownActive)}
                  className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isCountdownActive ? (
                    <Pause className="w-4 h-4 text-green-600" />
                  ) : (
                    <Play className="w-4 h-4 text-green-600" />
                  )}
                </motion.button>
                <motion.button
                  onClick={resetCountdown}
                  className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RotateCcw className="w-4 h-4 text-green-600" />
                </motion.button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: timeLeft.days, label: "Días" },
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Seg" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white rounded-xl p-4 text-center"
                  animate={{
                    scale: item.label === "Seg" && item.value === 0 ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-2xl font-bold"
                    key={item.value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.value}
                  </motion.div>
                  <div className="text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Statistics */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              value: animatedStats.participants,
              label: "Participantes Esperados",
              icon: Users,
              color: "text-green-600",
            },
            { value: animatedStats.projects, label: "Proyectos Estimados", icon: Rocket, color: "text-emerald-600" },
            { value: animatedStats.hours, label: "Horas de Hackathon", icon: Clock, color: "text-teal-600" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-sm border border-green-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <motion.div className="text-3xl font-bold text-slate-900 mb-2" key={stat.value}>
                {stat.value}+
              </motion.div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Challenge Carousel */}
        <motion.div
          className="mb-12 bg-white rounded-2xl p-8 shadow-lg border border-green-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Desafíos del Hackathon</h3>
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentChallenge}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`${challenges[currentChallenge].color} text-white p-8 rounded-xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{challenges[currentChallenge].icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold">{challenges[currentChallenge].title}</h4>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {challenges[currentChallenge].difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {challenges.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentChallenge(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentChallenge ? "bg-white" : "bg-white/50"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-lg">{challenges[currentChallenge].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Enhanced Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-green-200">
          {[
            { id: "info", label: "Información", icon: Lightbulb },
            { id: "team", label: "Forma tu Equipo", icon: Users },
            { id: "schedule", label: "Cronograma", icon: Clock },
            { id: "prizes", label: "Premios", icon: Trophy },
            { id: "mentors", label: "Mentores", icon: Brain },
            { id: "winners", label: "Ganadores", icon: CheckCircle },
            { id: "faq", label: "FAQ", icon: HelpCircle },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 font-medium transition-all text-sm sm:text-base relative ${
                activeTab === tab.id ? "text-green-600" : "text-slate-600 hover:text-slate-900"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="hidden sm:inline">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Enhanced Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12 sm:mb-16"
          >
            {/* Info Tab with Interactive Tech Stack */}
            {activeTab === "info" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Sobre HackSEIIIS</h3>
                    <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                      <p>
                        HackSEIIIS es el hackathon oficial del Seminario Internacional de Investigación e Innovación,
                        donde equipos multidisciplinarios compiten para desarrollar soluciones tecnológicas innovadoras
                        en tan solo 36 horas.
                      </p>
                      <p>
                        Este año, el desafío se centra en crear soluciones que aborden problemas sociales relevantes en
                        Colombia y Latinoamérica, desde educación y salud hasta medio ambiente y movilidad urbana.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-4 text-base sm:text-lg">
                      Tecnologías Disponibles (Selecciona las que dominas)
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {technologies.map((tech, index) => (
                        <motion.button
                          key={tech.name}
                          onClick={() => toggleTechnology(tech.name)}
                          className={`p-3 rounded-lg border-2 transition-all text-left relative ${
                            selectedTech.includes(tech.name)
                              ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                              : "border-green-200 bg-white hover:border-green-300"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{tech.icon}</span>
                            <div>
                              <div className="font-medium text-sm">{tech.name}</div>
                              <div className="text-xs text-slate-500">{tech.category}</div>
                            </div>
                          </div>
                          {selectedTech.includes(tech.name) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-600" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                    {selectedTech.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
                      >
                        <p className="text-green-800 text-sm">
                          ¡Genial! Has seleccionado {selectedTech.length} tecnología{selectedTech.length > 1 ? "s" : ""}
                          . Esto nos ayudará a formar equipos balanceados.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* New Team Formation Tab */}
            {activeTab === "team" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Configura tu Equipo Ideal</h3>
                  <p className="text-slate-600">Personaliza las características de tu equipo para el hackathon</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 text-emerald-500 mr-2" />
                      Tamaño del Equipo
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Número de integrantes: {teamSize}</span>
                        <div className="flex space-x-2">
                          <motion.button
                            onClick={() => setTeamSize(Math.max(2, teamSize - 1))}
                            className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center hover:bg-green-300 text-green-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            -
                          </motion.button>
                          <motion.button
                            onClick={() => setTeamSize(Math.min(4, teamSize + 1))}
                            className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center hover:bg-green-300 text-green-700"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            +
                          </motion.button>
                        </div>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-2">
                        <motion.div
                          className="bg-emerald-500 h-2 rounded-full"
                          animate={{ width: `${((teamSize - 2) / 2) * 100}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {Array.from({ length: 4 }, (_, i) => (
                          <motion.div
                            key={i}
                            className={`aspect-square rounded-lg border-2 flex items-center justify-center ${
                              i < teamSize ? "border-emerald-500 bg-emerald-50" : "border-green-200 bg-green-50"
                            }`}
                            animate={{ scale: i < teamSize ? 1 : 0.8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Users className={`w-6 h-6 ${i < teamSize ? "text-emerald-600" : "text-green-400"}`} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border border-green-200">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-emerald-500 mr-2" />
                      Nivel de Experiencia
                    </h4>
                    <div className="space-y-3">
                      {[
                        { id: "beginner", label: "Principiante", desc: "Nuevo en hackathons", color: "bg-lime-500" },
                        {
                          id: "intermediate",
                          label: "Intermedio",
                          desc: "Algo de experiencia",
                          color: "bg-emerald-500",
                        },
                        { id: "advanced", label: "Avanzado", desc: "Muy experimentado", color: "bg-teal-500" },
                      ].map((level) => (
                        <motion.button
                          key={level.id}
                          onClick={() => setSkillLevel(level.id)}
                          className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                            skillLevel === level.id
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-green-200 hover:border-green-300"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full ${level.color}`} />
                            <div>
                              <div className="font-medium">{level.label}</div>
                              <div className="text-sm text-slate-500">{level.desc}</div>
                            </div>
                            {skillLevel === level.id && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                                <CheckCircle className="w-5 h-5 text-emerald-600" />
                              </motion.div>
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-bold text-slate-900 mb-4">Recomendación de Equipo</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">{teamSize}</div>
                      <div className="text-sm text-slate-600">Integrantes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{selectedTech.length}</div>
                      <div className="text-sm text-slate-600">Tecnologías</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">
                        {skillLevel === "beginner" ? "85%" : skillLevel === "intermediate" ? "92%" : "97%"}
                      </div>
                      <div className="text-sm text-slate-600">Compatibilidad</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Enhanced Schedule Tab */}
            {activeTab === "schedule" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                  Cronograma Interactivo HackSEIIIS 2024
                </h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-emerald-400 to-green-200" />
                    <div className="space-y-6 sm:space-y-8">
                      {schedule.map((item, index) => (
                        <motion.div
                          key={index}
                          className="relative pl-10 sm:pl-14 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="absolute left-0 top-0 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white rounded-full flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                          </motion.div>
                          <motion.div
                            className="bg-white rounded-lg p-4 sm:p-6 shadow-sm group-hover:shadow-lg transition-all cursor-pointer border border-green-100"
                            whileHover={{ scale: 1.02, y: -2 }}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs sm:text-sm text-emerald-600 font-medium mb-1 sm:mb-2">
                                  {item.time}
                                </div>
                                <div className="text-base sm:text-lg font-medium text-slate-900">{item.event}</div>
                              </div>
                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                whileHover={{ scale: 1.1 }}
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced Prizes Tab */}
            {activeTab === "prizes" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                  Premios y Reconocimientos
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {prizes.map((prize, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer border border-green-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      onClick={() => setSelectedPrize(selectedPrize === index ? null : index)}
                    >
                      <div
                        className={`p-4 text-center font-bold text-white bg-gradient-to-r ${prize.color} relative overflow-hidden`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <span className="text-2xl">{prize.icon}</span>
                          <span>{prize.place}</span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-6 text-center">
                        <motion.div
                          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6"
                          animate={{ scale: selectedPrize === index ? 1.1 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {prize.prize}
                        </motion.div>
                        <AnimatePresence>
                          {selectedPrize === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-2 text-sm sm:text-base"
                            >
                              {prize.benefits.map((benefit, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-center justify-center text-slate-600"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {selectedPrize !== index && (
                          <div className="text-sm text-slate-500">Click para ver beneficios</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* New Mentors Tab */}
            {activeTab === "mentors" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                  Mentores Disponibles
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mentors.map((mentor, index) => (
                    <motion.div
                      key={index}
                      className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all ${
                        mentor.available ? "border-green-200 hover:border-green-400" : "border-red-200"
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: mentor.available ? 1.05 : 1, y: mentor.available ? -5 : 0 }}
                    >
                      <div className="text-center">
                        <div className="relative mb-4">
                          <img
                            src={mentor.image || "/placeholder.svg"}
                            alt={mentor.name}
                            className="w-16 h-16 rounded-full mx-auto object-cover"
                          />
                          <div
                            className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white ${
                              mentor.available ? "bg-green-500" : "bg-red-500"
                            }`}
                          />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">{mentor.name}</h4>
                        <p className="text-sm text-slate-600 mb-2">{mentor.expertise}</p>
                        <p className="text-xs text-slate-500 mb-4">{mentor.company}</p>
                        <motion.button
                          className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                            mentor.available
                              ? "bg-emerald-500 text-white hover:bg-emerald-600"
                              : "bg-gray-300 text-gray-500 cursor-not-allowed"
                          }`}
                          whileHover={{ scale: mentor.available ? 1.05 : 1 }}
                          whileTap={{ scale: mentor.available ? 0.95 : 1 }}
                          disabled={!mentor.available}
                        >
                          {mentor.available ? "Solicitar Mentoría" : "No Disponible"}
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Previous Winners Tab */}
            {activeTab === "winners" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                  Ganadores de Ediciones Anteriores
                </h3>
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {previousWinners.map((winner, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer border border-green-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, rotateY: 5 }}
                      onHoverStart={() => setHoveredWinner(index)}
                      onHoverEnd={() => setHoveredWinner(null)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={winner.image || "/placeholder.svg"}
                          alt={winner.project}
                          className="w-full h-32 sm:h-40 object-cover transition-transform duration-300"
                          style={{ transform: hoveredWinner === index ? "scale(1.1)" : "scale(1)" }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredWinner === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <AnimatePresence>
                          {hoveredWinner === index && (
                            <motion.div
                              className="absolute bottom-2 left-2 right-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                            >
                              <div className="flex flex-wrap gap-1">
                                {winner.technologies.map((tech, i) => (
                                  <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex justify-between items-center mb-2 sm:mb-3">
                          <div className="font-bold text-lg sm:text-xl text-slate-900">{winner.project}</div>
                          <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                            {winner.year}
                          </div>
                        </div>
                        <div className="text-sm text-slate-500 mb-3">Equipo: {winner.team}</div>
                        <p className="text-slate-600 text-sm sm:text-base mb-3">{winner.description}</p>
                        <motion.div
                          className="flex items-center text-emerald-600 text-sm font-medium"
                          animate={{ x: hoveredWinner === index ? 5 : 0 }}
                        >
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {winner.impact}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced FAQ Tab */}
            {activeTab === "faq" && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">
                  Preguntas Frecuentes
                </h3>
                <div className="max-w-3xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border border-green-200 rounded-lg overflow-hidden"
                    >
                      <motion.button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
                        whileHover={{ backgroundColor: "#f0fdf4" }}
                      >
                        <span className="font-medium text-slate-900 text-sm sm:text-base">{faq.question}</span>
                        <motion.div animate={{ rotate: activeFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <motion.svg
                            className="w-5 h-5 text-emerald-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ scale: 1.1 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {activeFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              className="p-4 sm:p-5 pt-0 text-slate-600 text-sm sm:text-base"
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {faq.answer}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced CTA */}
        <motion.div
          className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 sm:p-8 lg:p-10 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
          />
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 relative z-10">
            ¿Tienes lo necesario para ganar?
          </h3>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto relative z-10">
            Forma tu equipo, registra tu participación y prepárate para 36 horas de innovación, colaboración y
            desarrollo que podrían cambiar tu futuro profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <motion.button
              className="bg-slate-900 text-white font-medium py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Registrar Equipo</span>
            </motion.button>
            <motion.button
              className="bg-white text-emerald-600 font-medium py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
            >
              Más Información
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
