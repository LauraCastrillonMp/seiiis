"use client"

import type React from "react"
import { AnimatePresence, motion } from "motion/react"
import { forwardRef, useState } from "react"

const timelineData: Record<number, { title: string; description: string }> = {
  2014: {
    title: "Los Inicios",
    description: "Se realiza la primera edición del SEIIIS en el Tecnológico de Antioquia, con participación de ponentes de Medellín y otras ciudades del país. Las actividades giran en torno a la Ingeniería de Software, marcando el inicio de un evento que conecta la academia y el sector productivo.",
  },
  2016: {
    title: "Consolidación",
    description: "En su segunda edición, el seminario vuelve a realizarse en el TdeA, esta vez con el respaldo de universidades aliadas que se suman como coorganizadoras. Se abordan temáticas clave como Ingeniería de Software, Gestión del Conocimiento y Seguridad de la Información..",
  },
  2017: {
    title: "Expansión Nacional",
    description: "La tercera edición se lleva a cabo en conjunto entre la Universidad Católica Luis Amigó y el TdeA, ampliando los escenarios académicos. Se desarrollan conferencias y ponencias con un enfoque investigativo, fortaleciendo la colaboración interinstitucional.",
  },
  2018: {
    title: "Reconocimiento Internacional",
    description: "En la cuarta edición, el Politécnico Jaime Isaza Cadavid se suma como sede, junto al TdeA y Luis Amigó. El evento mantiene su enfoque en Ingeniería de Software, Seguridad de la Información y Gestión del Conocimiento, ampliando su alcance y participación.",
  },
  2019: {
    title: "Innovación Tecnológica",
    description: "Quinta edición del SEIIIS, nuevamente con sedes en el Politécnico, TdeA y Luis Amigó. Se consolidan las líneas temáticas abordadas en años anteriores y se fortalece la asistencia de investigadores nacionales e internacionales.",
  },
  2020: {
    title: "Adaptación Virtual",
    description: "Sexta edición y primera realizada de forma virtual, adaptándose al contexto global. Se enfocan en la Industria 4.0, con actividades sobre Big Data, IoT, Inteligencia Artificial, Seguridad de la Información y Gestión del Conocimiento, permitiendo llegar a nuevas audiencias.",
  },
  2021: {
    title: "Formato Híbrido",
    description: "Séptima edición virtual, consolidando el formato online como una oportunidad para ampliar la participación de estudiantes, docentes e investigadores. Se profundiza en temáticas de la Industria 4.0, con resultados enriquecedores en cobertura y calidad.",
  },
  2022: {
    title: "Sostenibilidad e Impacto",
    description: "La edición 2022, tuvo como escenarios, los auditorios del Politécnico Jaime Isaza Cadavid, y del Tecnológico de Antioquia. Esta vez se realizó un evento en modalidad hibrida, permitiendo a través de la transmisión de las conferencias, la participación como asistentes virtuales de un mayor número de público. Los talleres se realizaron de forma presencial, con apoyo mediado por TIC, para permitir la conexión sincrónica de muchos interesados en participar. ",
  },
  2023: {
    title: "Inteligencia Artificial",
    description: "Novena edición con apoyo de 10 universidades; modalidad híbrida y contenidos relacionados con Big Data, IA, IoT y más.",
  },
  2024: {
    title: "Década de Excelencia",
    description: "Décima edición con amplia colaboración interinstitucional, reforzando temas de Industria 4.0 y consolidando el impacto internacional del evento.",
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
    <section className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">Historia del SEIIIS</h2>
          <div className="w-16 sm:w-24 h-1 bg-[#C1FF72] mx-auto" />
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-slate-600">
            Un recorrido por una década de innovación, investigación y excelencia académica
          </p>
        </motion.div>

        <div className="border border-slate-600 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.button
                onClick={() => changeYear(-1)}
                disabled={currentIndex <= 0}
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl border-2 border-slate-400 flex items-center justify-center transition-all ${
                  currentIndex <= 0 ? "opacity-40 cursor-not-allowed" : "hover:border-[#C1FF72] hover:bg-[#C1FF72]/10"
                }`}
                whileHover={{ scale: currentIndex > 0 ? 1.05 : 1 }}
                whileTap={{ scale: currentIndex > 0 ? 0.95 : 1 }}
              >
                <ArrowLeft />
              </motion.button>
              <motion.button
                onClick={() => changeYear(1)}
                disabled={currentIndex >= years.length - 1}
                className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl border-2 border-slate-400 flex items-center justify-center transition-all ${
                  currentIndex >= years.length - 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:border-[#C1FF72] hover:bg-[#C1FF72]/10"
                }`}
                whileHover={{ scale: currentIndex < years.length - 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentIndex < years.length - 1 ? 0.95 : 1 }}
              >
                <ArrowRight />
              </motion.button>
            </div>

            <div className="text-center lg:text-right">
              {/* <div className="text-xs sm:text-sm text-slate-400 mb-1">Navega por nuestra historia</div> */}
              <div className="text-[#C1FF72] font-semibold bg-[#C1FF72]/10 px-2 sm:px-3 py-1 rounded-lg text-sm">
                {currentIndex + 1} de {years.length}
              </div>
            </div>
          </div>

          <div className="text-center sm:mb-8 mb-4">
            <div className="relative h-24 flex items-center justify-center">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <YearDisplay key={selectedYear} year={selectedYear} direction={direction} />
              </AnimatePresence>
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <div className="relative h-36 sm:h-40 flex items-start justify-center">
              <AnimatePresence custom={direction} initial={false} mode="wait">
                <ContentDisplay key={selectedYear} data={timelineData[selectedYear]} direction={direction} />
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {/* <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold text-white">Línea de Tiempo SEIIIS</span>
              <span className="text-slate-400 text-sm">
                {minYear} - {maxYear}
              </span>
            </div> */}

            <div className="relative">
              <div className="w-full h-1 bg-slate-300 rounded-full">
                <motion.div
                  className="h-full bg-[#C1FF72] rounded-full"
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
                        ? "bg-[#C1FF72] border-[#C1FF72]"
                        : "bg-slate-300 border-slate-300 hover:border-slate-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between text-xs sm:text-sm text-slate-500">
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
      className="text-6xl sm:text-8xl lg:text-9xl font-bold text-slate-300 absolute"
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
      {/* <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-500 mb-3 sm:mb-4">{data.title}</h3> */}
      <p className="text-base sm:text-lg text-slate-400 leading-relaxed">{data.description}</p>
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
