"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Check,
  Users,
  Award,
  BookOpen,
  CreditCard,
  HelpCircle,
  Star,
  Shield,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function Registration() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showFAQ, setShowFAQ] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
  ];

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
  ];

  const testimonials = [
    {
      name: "Ana María Pérez",
      role: "Estudiante de Ingeniería - Universidad Nacional",
      text: "SEIIIS cambió mi perspectiva sobre la investigación. Las conferencias fueron increíbles y pude conectar con investigadores de todo el mundo. Definitivamente vale la pena la inversión.",
      rating: 5,
      plan: "Estudiante",
    },
    {
      name: "Dr. Carlos Rodríguez",
      role: "Investigador Senior - Universidad de Antioquia",
      text: "Como investigador, SEIIIS me ha permitido establecer colaboraciones internacionales valiosas. El plan profesional incluye beneficios que realmente marcan la diferencia.",
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
  ];

  const paymentMethods = [
    {
      name: "Tarjetas de Crédito/Débito",
      icon: "💳",
      description: "Visa, Mastercard, American Express",
    },
    { name: "PSE", icon: "🏦", description: "Pago Seguro en Línea" },
    {
      name: "Transferencia Bancaria",
      icon: "🏛️",
      description: "Bancolombia, Davivienda, BBVA",
    },
    {
      name: "Efectivo",
      icon: "💵",
      description: "Puntos autorizados Efecty, Baloto",
    },
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      green: {
        bg: popular ? "bg-[#C1FF72]" : "bg-green-50",
        text: popular ? "text-white" : "text-green-600",
        border: "border-green-200",
        button: "bg-[#C1FF72] hover:bg-green-600 text-white",
      },
      yellow: {
        bg: popular ? "bg-[#C1FF72]" : "bg-green-50",
        text: popular ? "text-slate-900" : "text-green-600",
        border: "border-green-200",
        button: "bg-[#C1FF72] hover:bg-green-600 text-slate-900",
      },
      purple: {
        bg: popular ? "bg-green-600" : "bg-green-50",
        text: popular ? "text-white" : "text-green-700",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700 text-white",
      },
    };
    return colors[color as keyof typeof colors];
  };

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
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Registro
          </h2>
          <div className="w-24 h-1 bg-[#C1FF72] mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Registrate ahora para asegurar tu lugar en SEIIIS 2025.
          </p>
        </motion.div>

        <motion.div>
          <iframe
            src="https://marca.tdea.edu.co/eventos/seiiis2025/formulario.php"
            title="SEIIIS 2025 Formulario de Registro"
            className="w-full h-[700px] md:h-[900px] lg:h-[1000px] rounded-xl border-0 shadow-lg"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
