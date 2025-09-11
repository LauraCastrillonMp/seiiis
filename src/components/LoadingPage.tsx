"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

interface LoadingPageProps {
  onLoadingComplete: () => void
}

export default function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const loadingSteps = [
    { label: "Inicializando SEIIIS 2025", duration: 1000 },
    { label: "Cargando contenido", duration: 1100 },
    // { label: "Preparando experiencia", duration: 500 },
    // { label: "Conectando con la innovación", duration: 700 },
    { label: "¡Listo para comenzar!", duration: 300 },
  ]

  useEffect(() => {
    let progressTimer: NodeJS.Timeout
    let stepTimer: NodeJS.Timeout

    const startLoading = () => {
      // Progress animation
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer)
            setIsComplete(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 800)
            return 100
          }
          return prev + Math.random() * 3 + 1
        })
      }, 50)

      // Step animation
      let stepIndex = 0
      const nextStep = () => {
        if (stepIndex < loadingSteps.length - 1) {
          stepTimer = setTimeout(() => {
            stepIndex++
            setCurrentStep(stepIndex)
            nextStep()
          }, loadingSteps[stepIndex].duration)
        }
      }
      nextStep()
    }

    startLoading()

    return () => {
      clearInterval(progressTimer)
      clearTimeout(stepTimer)
    }
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex items-center justify-center z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#C1FF72]/10 via-transparent to-[#C1FF72]/5" />
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #10b981 1px, transparent 1px),
                               radial-gradient(circle at 75% 75%, #10b981 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo Animation */}
          <motion.div
            className="mb-12"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="w-60 h-60 rounded-none flex items-center justify-center mx-auto"
              
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <img src="/seiiis.png" alt="SEIIIS Logo" width={300} height={240} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-4xl font-black text-white mb-2">SEIIIS</h1>
              <p className="text-[#C1FF72] text-lg font-light">2025</p>
              <p className="text-gray-400 text-sm mt-2">11.ª Edición</p>
            </motion.div>
          </motion.div>

          {/* Loading Steps */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="h-6 mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep}
                  className="text-gray-300 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingSteps[currentStep]?.label}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full h-1 bg-gray-800 rounded-none overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#C1FF72] to-[#C1FF72]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* Bottom Info */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="text-gray-500 text-xs">Seminario Internacional de Investigación e Innovación</p>
          <p className="text-gray-600 text-xs mt-1">Tecnológico de Antioquia • 23-24 Octubre 2025</p>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  )
}
