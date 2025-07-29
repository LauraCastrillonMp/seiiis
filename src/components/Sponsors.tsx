"use client"

import { motion } from "motion/react"
import { Award, Heart, Handshake, Star } from "lucide-react"

export default function Sponsors() {
  const sponsorTiers = [
    {
      title: "Patrocinadores Principales",
      description: "Nuestros socios estratégicos que hacen posible SEIIS",
      icon: Award,
      color: "green",
      sponsors: [
        {
          name: "Tecnológico de Antioquia",
          logo: "/placeholder.svg?height=120&width=300&text=TdeA",
          description: "Institución anfitriona y organizadora principal del evento",
          website: "https://tdea.edu.co",
        },
        {
          name: "Ministerio de Ciencia y Tecnología",
          logo: "/placeholder.svg?height=120&width=300&text=MinCiencias",
          description: "Apoyo gubernamental para el desarrollo científico y tecnológico",
          website: "https://minciencias.gov.co",
        },
        {
          name: "Colciencias",
          logo: "/placeholder.svg?height=120&width=300&text=Colciencias",
          description: "Fomento de la investigación científica e innovación tecnológica",
          website: "https://colciencias.gov.co",
        },
      ],
    },
    {
      title: "Patrocinadores Oro",
      description: "Empresas comprometidas con la innovación y la investigación",
      icon: Star,
      color: "orange",
      sponsors: [
        {
          name: "EPM",
          logo: "/placeholder.svg?height=100&width=250&text=EPM",
          description: "Empresa de servicios públicos líder en innovación",
          website: "https://epm.com.co",
        },
        {
          name: "Bancolombia",
          logo: "/placeholder.svg?height=100&width=250&text=Bancolombia",
          description: "Apoyo financiero para el desarrollo de proyectos innovadores",
          website: "https://bancolombia.com",
        },
        {
          name: "Ruta N",
          logo: "/placeholder.svg?height=100&width=250&text=Ruta+N",
          description: "Centro de innovación y negocios de Medellín",
          website: "https://rutanmedellin.org",
        },
        {
          name: "UNE",
          logo: "/placeholder.svg?height=100&width=250&text=UNE",
          description: "Conectividad y tecnología para la educación",
          website: "https://une.com.co",
        },
      ],
    },
    {
      title: "Patrocinadores Plata",
      description: "Aliados estratégicos en el ecosistema de innovación",
      icon: Handshake,
      color: "slate",
      sponsors: [
        {
          name: "Universidad de Antioquia",
          logo: "/placeholder.svg?height=80&width=200&text=UdeA",
          description: "Colaboración académica e investigativa",
          website: "https://udea.edu.co",
        },
        {
          name: "Universidad Nacional",
          logo: "/placeholder.svg?height=80&width=200&text=UNAL",
          description: "Intercambio de conocimiento científico",
          website: "https://unal.edu.co",
        },
        {
          name: "Universidad EAFIT",
          logo: "/placeholder.svg?height=80&width=200&text=EAFIT",
          description: "Investigación aplicada y desarrollo tecnológico",
          website: "https://eafit.edu.co",
        },
        {
          name: "Universidad Pontificia Bolivariana",
          logo: "/placeholder.svg?height=80&width=200&text=UPB",
          description: "Formación integral e investigación de calidad",
          website: "https://upb.edu.co",
        },
        {
          name: "SENA",
          logo: "/placeholder.svg?height=80&width=200&text=SENA",
          description: "Formación técnica y tecnológica especializada",
          website: "https://sena.edu.co",
        },
        {
          name: "Cámara de Comercio de Medellín",
          logo: "/placeholder.svg?height=80&width=200&text=CCM",
          description: "Apoyo al emprendimiento y la innovación empresarial",
          website: "https://camaramedellin.com.co",
        },
      ],
    },
    {
      title: "Aliados Institucionales",
      description: "Organizaciones que apoyan la misión de SEIIS",
      icon: Heart,
      color: "emerald", // Changed from "blue"
      sponsors: [
        {
          name: "IEEE Colombia",
          logo: "/placeholder.svg?height=60&width=150&text=IEEE",
          description: "Asociación profesional de ingenieros",
          website: "https://ieee.org",
        },
        {
          name: "ACM Colombia",
          logo: "/placeholder.svg?height=60&width=150&text=ACM",
          description: "Asociación de profesionales en computación",
          website: "https://acm.org",
        },
        {
          name: "ACOFI",
          logo: "/placeholder.svg?height=60&width=150&text=ACOFI",
          description: "Asociación Colombiana de Facultades de Ingeniería",
          website: "https://acofi.edu.co",
        },
        {
          name: "Red Universitaria de Antioquia",
          logo: "/placeholder.svg?height=60&width=150&text=RUA",
          description: "Red de cooperación universitaria",
          website: "https://rua.edu.co",
        },
        {
          name: "Parque E",
          logo: "/placeholder.svg?height=60&width=150&text=Parque+E",
          description: "Distrito de innovación de Medellín",
          website: "https://parquee.org",
        },
        {
          name: "Medellín Digital",
          logo: "/placeholder.svg?height=60&width=150&text=Medellín+Digital",
          description: "Transformación digital de la ciudad",
          website: "https://medellindigital.gov.co",
        },
        {
          name: "Hub de Innovación",
          logo: "/placeholder.svg?height=60&width=150&text=Hub+Innovación",
          description: "Ecosistema de startups y emprendimiento",
          website: "https://hubinnovacion.co",
        },
        {
          name: "Fundación Proantioquia",
          logo: "/placeholder.svg?height=60&width=150&text=Proantioquia",
          description: "Desarrollo regional y competitividad",
          website: "https://proantioquia.org.co",
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "bg-green-500",
        text: "text-green-600",
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        icon: "bg-orange-500",
        text: "text-orange-600",
      },
      slate: {
        bg: "bg-slate-50",
        border: "border-slate-200",
        icon: "bg-slate-500",
        text: "text-slate-600",
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        icon: "bg-emerald-500",
        text: "text-emerald-600",
      },
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nuestros Patrocinadores</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Gracias a nuestros patrocinadores y aliados estratégicos, SEIIS continúa siendo el evento de investigación e
            innovación más importante de la región.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => {
            const colorClasses = getColorClasses(tier.color)

            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: tierIndex * 0.2, ease: "linear" }}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-3xl p-8`}
              >
                {/* Tier Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 ${colorClasses.icon} rounded-full flex items-center justify-center`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{tier.title}</h3>
                  <p className={`${colorClasses.text} max-w-2xl mx-auto`}>{tier.description}</p>
                </div>

                {/* Sponsors Grid */}
                <div
                  className={`grid gap-8 ${
                    tier.sponsors.length <= 3
                      ? "md:grid-cols-3"
                      : tier.sponsors.length <= 4
                        ? "md:grid-cols-2 lg:grid-cols-4"
                        : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  }`}
                >
                  {tier.sponsors.map((sponsor, index) => (
                    <motion.div
                      key={sponsor.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: tierIndex * 0.2 + index * 0.1, ease: "linear" }}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-center">
                        <div className="mb-4 h-20 flex items-center justify-center">
                          <img
                            src={sponsor.logo || "/placeholder.svg"}
                            alt={sponsor.name}
                            className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                          {sponsor.name}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{sponsor.description}</p>
                        <motion.a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center ${colorClasses.text} hover:text-slate-900 text-sm font-medium transition-colors`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Visitar sitio web
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 bg-white rounded-3xl p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "linear" }}
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-6">¿Quieres ser nuestro patrocinador?</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Únete a nuestra red de patrocinadores y forma parte del evento de investigación e innovación más importante
            de la región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-slate-900 font-bold py-4 px-8 rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Información de Patrocinio
            </motion.button>
            <motion.button
              className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Equipo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
