"use client"

import { motion, AnimatePresence } from "motion/react"
import { Check, Users, Award, BookOpen, CreditCard, HelpCircle, Star, Shield, Clock } from "lucide-react"
import { useState } from "react"

export default function Registration() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showFAQ, setShowFAQ] = useState<string | null>(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const plans = [
    {
      id: "estudiante",
      name: "Estudiante",
      price: "50.000",
      originalPrice: "80.000",
      currency: "COP",
      description: "Perfecto para estudiantes universitarios",
      features: [
        "Acceso a todas las conferencias",
        "Material digital del evento",
        "Coffee breaks incluidos",
        "Certificado de participación",
        "Acceso a networking",
        "Descarga de presentaciones",
      ],
      popular: false,
      color: "green", // Changed from "blue"
      savings: "37%",
    },
    {
      id: "profesional",
      name: "Profesional",
      price: "120.000",
      originalPrice: "150.000",
      currency: "COP",
      description: "Ideal para profesionales e investigadores",
      features: [
        "Todo lo incluido en plan Estudiante",
        "Acceso VIP a ponentes",
        "Almuerzo de networking",
        "Kit de bienvenida premium",
        "Acceso a talleres exclusivos",
        "Certificado con créditos académicos",
        "Grabaciones de las sesiones",
        "Sesiones de mentoring",
      ],
      popular: true,
      color: "yellow",
      savings: "20%",
    },
    {
      id: "institucional",
      name: "Institucional",
      price: "200.000",
      originalPrice: "250.000",
      currency: "COP",
      description: "Para instituciones y empresas",
      features: [
        "Todo lo incluido en plan Profesional",
        "5 inscripciones incluidas",
        "Stand promocional",
        "Sesión de presentación institucional",
        "Acceso a base de datos de participantes",
        "Reconocimiento como patrocinador",
        "Reuniones privadas con ponentes",
        "Informe post-evento",
      ],
      popular: false,
      color: "purple",
      savings: "20%",
    },
  ]

  const faqs = [
    {
      question: "¿Qué incluye el registro?",
      answer:
        "El registro incluye acceso a todas las conferencias, material digital, coffee breaks, certificado de participación y acceso a las áreas de networking. Los planes superiores incluyen beneficios adicionales como talleres exclusivos y acceso VIP.",
    },
    {
      question: "¿Puedo cambiar mi plan después del registro?",
      answer:
        "Sí, puedes actualizar tu plan hasta 48 horas antes del evento. Solo debes pagar la diferencia de precio. No es posible hacer downgrade una vez confirmado el registro.",
    },
    {
      question: "¿Hay descuentos para grupos?",
      answer:
        "Sí, ofrecemos descuentos especiales para grupos de 5 o más personas de la misma institución. Contacta a nuestro equipo para obtener un código de descuento personalizado.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, PSE y pagos en efectivo en puntos autorizados.",
    },
    {
      question: "¿Puedo obtener factura?",
      answer:
        "Sí, todas las inscripciones incluyen factura electrónica. Para facturación empresarial, asegúrate de proporcionar los datos fiscales correctos durante el registro.",
    },
    {
      question: "¿Qué pasa si no puedo asistir?",
      answer:
        "Ofrecemos reembolso del 100% hasta 30 días antes del evento, 50% hasta 15 días antes, y 25% hasta 7 días antes. Después de esta fecha no hay reembolsos, pero puedes transferir tu inscripción a otra persona.",
    },
  ]

  const testimonials = [
    {
      name: "Ana María Pérez",
      role: "Estudiante de Ingeniería - Universidad Nacional",
      text: "SEIIS cambió mi perspectiva sobre la investigación. Las conferencias fueron increíbles y pude conectar con investigadores de todo el mundo. Definitivamente vale la pena la inversión.",
      rating: 5,
      plan: "Estudiante",
    },
    {
      name: "Dr. Carlos Rodríguez",
      role: "Investigador Senior - Universidad de Antioquia",
      text: "Como investigador, SEIIS me ha permitido establecer colaboraciones internacionales valiosas. El plan profesional incluye beneficios que realmente marcan la diferencia.",
      rating: 5,
      plan: "Profesional",
    },
    {
      name: "María González",
      role: "Directora de I+D - TechCorp",
      text: "El plan institucional nos permitió mostrar nuestros proyectos y conectar con talento joven. La inversión se recuperó con las colaboraciones establecidas.",
      rating: 5,
      plan: "Institucional",
    },
  ]

  const paymentMethods = [
    { name: "Tarjetas de Crédito/Débito", icon: "💳", description: "Visa, Mastercard, American Express" },
    { name: "PSE", icon: "🏦", description: "Pago Seguro en Línea" },
    { name: "Transferencia Bancaria", icon: "🏛️", description: "Bancolombia, Davivienda, BBVA" },
    { name: "Efectivo", icon: "💵", description: "Puntos autorizados Efecty, Baloto" },
  ]

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      green: {
        bg: popular ? "bg-green-500" : "bg-green-50",
        text: popular ? "text-white" : "text-green-600",
        border: "border-green-200",
        button: "bg-green-500 hover:bg-green-600 text-white",
      },
      yellow: {
        bg: popular ? "bg-green-500" : "bg-green-50",
        text: popular ? "text-slate-900" : "text-green-600",
        border: "border-green-200",
        button: "bg-green-500 hover:bg-green-600 text-slate-900",
      },
      purple: {
        bg: popular ? "bg-green-600" : "bg-green-50",
        text: popular ? "text-white" : "text-green-700",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700 text-white",
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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Registro</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Elige el plan que mejor se adapte a tus necesidades y asegura tu lugar en SEIIS 2024
          </p>
        </motion.div>

        {/* Early Bird Notice */}
        <motion.div
          className="bg-gradient-to-r from-green-100 to-orange-100 border border-green-300 rounded-xl p-6 mb-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "linear" }}
        >
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-xs font-bold transform rotate-12 translate-x-2 -translate-y-1">
            ¡LIMITADO!
          </div>
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-6 h-6 text-green-600 mr-2" />
            <span className="font-bold text-green-800">¡Oferta por Tiempo Limitado!</span>
          </div>
          <p className="text-green-700 mb-4">
            Regístrate antes del <strong>15 de octubre</strong> y obtén hasta un <strong>37% de descuento</strong> en
            todos los planes.
          </p>
          <div className="text-sm text-green-600">
            ⏰ Quedan solo <strong>15 días</strong> para aprovechar esta oferta
          </div>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color, plan.popular)

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2, ease: "linear" }}
                className={`relative rounded-2xl border-2 ${colorClasses.border} ${
                  plan.popular ? "scale-105 shadow-2xl ring-4 ring-green-500/20" : "shadow-lg"
                } bg-white overflow-hidden cursor-pointer transition-all hover:shadow-xl`}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-slate-900 text-center py-2 font-bold text-sm">
                    ⭐ MÁS POPULAR ⭐
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -{plan.savings}
                  </div>
                </div>

                <div className={`p-8 ${plan.popular ? "pt-16" : ""}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-600 mb-4">{plan.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center justify-center">
                        <span className="text-sm text-slate-500 mr-2">$</span>
                        <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                        <span className="text-slate-600 ml-1">{plan.currency}</span>
                      </div>
                      <div className="text-sm text-slate-500 line-through">
                        Precio regular: ${plan.originalPrice} {plan.currency}
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        Ahorras ${Number.parseInt(plan.originalPrice) - Number.parseInt(plan.price)} {plan.currency}
                      </div>
                    </div>

                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-bold transition-all ${colorClasses.button} ${
                        selectedPlan === plan.id ? "ring-4 ring-offset-2 ring-green-500" : ""
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedPlan(plan.id)
                      }}
                    >
                      {selectedPlan === plan.id ? "✓ Seleccionado" : "Seleccionar Plan"}
                    </motion.button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-green-500" />
                      Incluye:
                    </h4>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.2 + featureIndex * 0.1, ease: "linear" }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Selected Plan Checkout */}
        <AnimatePresence>
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-16 border-2 border-green-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Plan Seleccionado: {plans.find((p) => p.id === selectedPlan)?.name}
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4">Resumen del Pedido</h4>
                  <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span>Plan {plans.find((p) => p.id === selectedPlan)?.name}</span>
                      <span>${plans.find((p) => p.id === selectedPlan)?.originalPrice} COP</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Descuento Early Bird</span>
                      <span>
                        -$
                        {Number.parseInt(plans.find((p) => p.id === selectedPlan)?.originalPrice || "0") -
                          Number.parseInt(plans.find((p) => p.id === selectedPlan)?.price || "0")}{" "}
                        COP
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${plans.find((p) => p.id === selectedPlan)?.price} COP</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-4">Métodos de Pago</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((method, index) => (
                      <motion.div
                        key={method.name}
                        className="p-3 border border-slate-200 rounded-lg hover:border-green-500 cursor-pointer transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{method.icon}</div>
                          <div className="text-sm font-medium text-slate-900">{method.name}</div>
                          <div className="text-xs text-slate-500">{method.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <motion.button
                  className="bg-gradient-to-r from-green-500 to-orange-500 text-slate-900 font-bold py-4 px-12 rounded-xl hover:from-green-600 hover:to-orange-600 transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Proceder al Pago Seguro 🔒
                </motion.button>
                <p className="text-sm text-slate-500 mt-2">Pago 100% seguro con encriptación SSL</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Process */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "linear" }}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Proceso de Registro</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: Users,
                title: "Selecciona tu Plan",
                description: "Elige el plan que mejor se adapte a tus necesidades",
              },
              {
                step: "2",
                icon: BookOpen,
                title: "Completa el Formulario",
                description: "Llena tus datos personales y académicos",
              },
              {
                step: "3",
                icon: CreditCard,
                title: "Realiza el Pago",
                description: "Pago seguro con múltiples opciones",
              },
              {
                step: "4",
                icon: Award,
                title: "Confirmación",
                description: "Recibe tu confirmación y credenciales",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1, ease: "linear" }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <item.icon className="w-8 h-8 text-slate-900" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </div>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-slate-200 relative">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.2, ease: "linear" }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="bg-slate-900 rounded-2xl p-8 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "linear" }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Lo que dicen nuestros participantes</h3>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-green-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">"{testimonials[activeTestimonial].text}"</blockquote>
                <div className="mb-2">
                  <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-slate-300">{testimonials[activeTestimonial].role}</div>
                  <div className="text-green-500 text-sm">Plan {testimonials[activeTestimonial].plan}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? "bg-green-500" : "bg-slate-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "linear" }}
        >
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center">
            <HelpCircle className="w-6 h-6 mr-2 text-green-500" />
            Preguntas Frecuentes
          </h3>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.8 + index * 0.1, ease: "linear" }}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <motion.button
                  onClick={() => setShowFAQ(showFAQ === faq.question ? null : faq.question)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  whileHover={{ backgroundColor: "#f8fafc" }}
                >
                  <span className="font-medium text-slate-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: showFAQ === faq.question ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "linear" }}
                  >
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {showFAQ === faq.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "linear" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-slate-600 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "linear" }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
            <h4 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu registro?</h4>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo está disponible 24/7 para asistirte en el proceso de inscripción. También ofrecemos soporte
              técnico y asesoría personalizada.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="font-medium">Email</div>
                <div className="text-slate-300 text-sm">registro@seiis.edu.co</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="font-medium">Teléfono</div>
                <div className="text-slate-300 text-sm">+57 (4) 444-5555</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="font-medium">WhatsApp</div>
                <div className="text-slate-300 text-sm">+57 300 123 4567</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:registro@seiis.edu.co"
                className="bg-green-500 hover:bg-green-600 text-slate-900 font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Email
              </motion.a>
              <motion.a
                href="tel:+57-4-444-5555"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-medium py-3 px-6 rounded-xl transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Llamar Ahora
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
