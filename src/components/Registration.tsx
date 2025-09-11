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
