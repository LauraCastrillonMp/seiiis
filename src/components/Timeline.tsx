"use client"

import type React from "react"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useState } from "react"

const timelineData: Record<number, { title: string; description: string }> = {
  2014: {
    title: "Los Inicios",
    description: "Primera edición del Seminario SEIIS en las instalaciones del Tecnológico de Antioquia.",
  },
  2016: {
    title: "Consolidación",
    description: "Segunda edición que consolidó el evento como un espacio de encuentro para investigadores.",
  },
  2017: {
    title: "Expansión Nacional",
    description: "Tercera edición con mayor participación nacional y primeros ponentes internacionales.",
  },
  2018: {
    title: "Reconocimiento Internacional",
    description: "Cuarta edición que logró reconocimiento internacional con participantes de varios países.",
  },
  2019: {
    title: "Innovación Tecnológica",
    description: "Quinta edición enfocada en tecnologías emergentes y transformación digital.",
  },
  2020: {
    title: "Adaptación Virtual",
    description: "Sexta edición adaptada al formato virtual debido a la pandemia, alcanzando audiencias globales.",
  },
  2021: {
    title: "Formato Híbrido",
    description: "Séptima edición combinando modalidades presencial y virtual.",
  },
  2022: {
    title: "Sostenibilidad e Impacto",
    description: "Octava edición centrada en investigación sostenible y el impacto social de la innovación.",
  },
  2023: {
    title: "Inteligencia Artificial",
    description: "Novena edición explorando el potencial de la IA en la investigación y la innovación académica.",
  },
  2024: {
    title: "Década de Excelencia",
    description: "Décima edición celebrando una década de excelencia académica y proyectando el futuro.",
  },
}

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [direction, setDirection] = useState<1 | -1>(1)

  const years = Object.keys(timelineData)
    .map(Number)
    .sort((a, b) => a - b)
  const currentIndex = years.indexOf(selectedYear)
  const minYear = years[0]
  const maxYear = years[years.length - 1]

  function changeYear(newDirection: 1 | -1) {
    const newIndex = currentIndex + newDirection
    if (newIndex >= 0 && newIndex < years.length) {
      setSelectedYear(years[newIndex])
      setDirection(newDirection)
    }
  }

  const progressPercentage = (currentIndex / (years.length - 1)) * 100

  return (
    <section className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Historia del SEIIS</h2>
          <div className="w-16 sm:w-24 h-1 bg-green-500 mx-auto mb-6 sm:mb-8" />
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Un recorrido por una década de innovación, investigación y excelencia académica
          </p>
        </motion.div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.button
                onClick={() => changeYear(-1)}
                disabled={currentIndex <= 0}
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl border-2 border-slate-600 flex items-center justify-center transition-all ${
                  currentIndex <= 0 ? "opacity-40 cursor-not-allowed" : "hover:border-green-500 hover:bg-green-500/10"
                }`}
                whileHover={{ scale: currentIndex > 0 ? 1.05 : 1 }}
                whileTap={{ scale: currentIndex > 0 ? 0.95 : 1 }}
              >
                <ArrowLeft />
              </motion.button>
              <motion.button
                onClick={() => changeYear(1)}
                disabled={currentIndex >= years.length - 1}
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl border-2 border-slate-600 flex items-center justify-center transition-all ${
                  currentIndex >= years.length - 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:border-green-500 hover:bg-green-500/10"
                }`}
                whileHover={{ scale: currentIndex < years.length - 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentIndex < years.length - 1 ? 0.95 : 1 }}
              >
                <ArrowRight />
              </motion.button>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-xs sm:text-sm text-slate-400 mb-1">Navega por nuestra historia</div>
              <div className="text-green-500 font-semibold bg-green-500/10 px-2 sm:px-3 py-1 rounded-lg text-sm">
                {currentIndex + 1} de {years.length}
              </div>
            </div>
          </div>

          <div className="text-center mb-8 sm:mb-12">
            <div className="relative h-24 sm:h-32 flex items-center justify-center">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <YearDisplay key={selectedYear} year={selectedYear} direction={direction} />
              </AnimatePresence>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <div className="relative h-32 sm:h-40 flex items-start justify-center">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <ContentDisplay key={selectedYear} data={timelineData[selectedYear]} direction={direction} />
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold text-white">Línea de Tiempo SEIIS</span>
              <span className="text-slate-400 text-sm">
                {minYear} - {maxYear}
              </span>
            </div>

            <div className="relative">
              <div className="w-full h-1 bg-slate-600 rounded-full">
                <motion.div
                  className="h-full bg-green-500 rounded-full"
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.3, ease: "linear" }}
                />
              </div>

              <div className="absolute -top-2 left-0 right-0 flex justify-between">
                {years.map((year, index) => (
                  <motion.button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year)
                      setDirection(index > currentIndex ? 1 : -1)
                    }}
                    className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 transition-all ${
                      index <= currentIndex
                        ? "bg-green-500 border-green-500"
                        : "bg-slate-600 border-slate-600 hover:border-green-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm text-slate-400">
              <span>{minYear}</span>
              <span>{maxYear}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const YearDisplay = forwardRef(function YearDisplay(
  { year, direction }: { year: number; direction: 1 | -1 },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <motion.div
      ref={ref}
      initial={{ y: direction * 30, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.25,
          ease: "linear",
        },
      }}
      exit={{
        y: direction * -30,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "linear",
        },
      }}
      className="text-6xl sm:text-8xl lg:text-9xl font-bold text-slate-600 absolute"
    >
      {year}
    </motion.div>
  )
})

const ContentDisplay = forwardRef(function ContentDisplay(
  { data, direction }: { data: { title: string; description: string }; direction: 1 | -1 },
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <motion.div
      ref={ref}
      initial={{ y: direction * 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.25,
          ease: "linear",
          delay: 0.05,
        },
      }}
      exit={{
        y: direction * -20,
        opacity: 0,
        transition: {
          duration: 0.2,
          ease: "linear",
        },
      }}
      className="max-w-4xl mx-auto absolute px-4"
    >
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">{data.title}</h3>
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{data.description}</p>
    </motion.div>
  )
})

const ArrowLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="sm:w-5 sm:h-5"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="sm:w-5 sm:h-5"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)
