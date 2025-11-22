import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";

// Data
const cardInfo = [
  {
    title: "Software Engineering Intern — Web & Frontend Focus",
    company: "DevIO",
    date: "June 2025 - July 2025",
    type: "Internship",
    info: [
      "I developed user interfaces using React and Tailwind CSS.",
      "I made reusable components to improve development efficiency using React.",
      "Received mentorship from senior Front-End developers to strengthen technical and collaborative skills.",
    ],
  },
  {
    title: "Software Engineering Scholar",
    company: "DevIO",
    date: "July 2025 - September 2025",
    type: "Client Project",
    info: [
      "Apply different styles of web interfaces (CSS, Tailwind, Ant-Desing, MUI)",
      "I collaborated with Fronted Developers to create a seamless user experience",
      "Worked closely with senior developers, receiving mentorship to enhance technical and teamwork skills.",
    ],
  },
  {
    title: "Junior Frontend Developer",
    company: "DevIO",
    date: "September - November 2025",
    type: "FreeLance",
    info: [
      "Optimized user experience on websites by improving performance metrics such as LCP and FCP.",
      "Enhanced project efficiency through systematic code refactoring and optimization.",
      "Developed and maintained web interfaces using modern JavaScript frameworks and libraries.",
    ],
  },
];

export default function CardList() {
  return (
    <div className="grid grid-cols-1 gap-20 justify-items-center mt-10">
      {cardInfo.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="
            w-full max-w-[900px]
            rounded-2xl
            px-4 sm:px-6 md:px-8
            py-6 sm:py-8
            bg-transparent
            shadow-md shadow-gray-700/20
            border border-gray-700/30
          "
        >
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 mt-2">
            {card.title}
          </h2>

          {/* Empresa y fecha */}
          <div className="mb-2 text-sm sm:text-base text-gray-300">
            <p>{card.company}</p>
            <p>{card.date}</p>
          </div>

          {/* Tipo */}
          <span className="inline-block px-3 py-1 rounded-full bg-gray-700/40 text-xs sm:text-sm mb-4 border border-gray-600/40">
            {card.type}
          </span>

          {/* Lista de puntos */}
          <ul className="list-disc list-inside mt-1 space-y-2 text-gray-200">
            {card.info.map((point, i) => (
              <li key={i} className="text-sm sm:text-base">
                {point}
              </li>
            ))}
          </ul>

          {/* Animación Lottie */}
          {card.animation && (
            <div className="flex justify-center items-center mt-4">
              <Player
                autoplay
                loop
                src={card.animation}
                className="w-full max-w-[350px] md:max-w-[450px]"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
