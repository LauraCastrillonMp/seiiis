"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Award } from "lucide-react";
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sponsors = [
    { name: "Luis Amigo", logo: "/luisamigo_logo.png?height=40&width=120" },
    {
      name: "Universidad Veracruzana",
      logo: "/uvtrans.png?height=40&width=120",
    },
    { name: "IUDigital", logo: "/iudigital_logo.png?height=40&width=120" },
    { name: "RIMCI", logo: "/RIMCIlogo.png?height=40&width=120" },
  ];

  useEffect(() => {
    const targetDate = new Date("2025-10-23T08:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-black h-screen">
        <div className="absolute inset-0">
          <div className=""></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black rounded-full bg-white h-70 w-70 inline-flex items-center justify-center flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              SEIIIS
              <motion.span
                className="block text-green-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                2025
              </motion.span>
            </motion.h1>

            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
                Seminario Internacional de Investigación e Innovación
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-10">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <span className="font-medium">23-24 Octubre 2025</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Tecnológico de Antioquia</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <div className="grid grid-cols-4 gap-4 sm:gap-6">
                {[
                  { value: timeLeft.days, label: "Días" },
                  { value: timeLeft.hours, label: "Horas" },
                  { value: timeLeft.minutes, label: "Min" },
                  { value: timeLeft.seconds, label: "Seg" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 sm:p-6 text-center"
                    whileHover={{ scale: 1.05, borderColor: "#10b981" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <motion.button
                className="group bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 sm:px-12 rounded-none text-lg sm:text-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-3">
                  <span>REGISTRARSE AHORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
              Organizadores
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="flex flex-col items-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 object-contain mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Momentos SEIIIS
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revive los mejores momentos de ediciones anteriores
            </p>
          </motion.div>
          <ImageSlider />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-10 md:gap-24">
            {[
              { number: "10", label: "Ediciones" },
              {
                number: "500+",
                label: "Participantes"
              },
              {
                number: "50+",
                label: "Ponentes"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl sm:text-5xl font-black text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                Una Década de
                <span className="block text-green-500">Innovación</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desde 2014, SEIIIS ha sido el punto de encuentro más importante
                para investigadores, académicos y profesionales en Colombia y
                Latinoamérica.
              </p>
              {/* <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700">
                    Investigación de vanguardia
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700">
                    Networking internacional
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-700">Innovación aplicada</span>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square bg-black rounded-none overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600&text=SEIIIS+2025"
                  alt="SEIIIS Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-none flex items-center justify-center">
                <Award className="w-12 h-12 text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ¿Listo para hacer
              <span className="block text-green-400">Historia?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Únete a la comunidad de investigadores más importante de la región
            </p>

            <motion.button
              className="bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-12 rounded-none text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              REGISTRARSE AHORA
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
