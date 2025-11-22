//images
import algorithms from "../assets/1.png";
import tc from "../assets/2.png";
import de from "../assets/3.png";
import am from "../assets/4.png";
import proactivity from "../assets/5.png";
import hablar from "../assets/hablar.png";
import linux from "../assets/7.png";
import resolver from "../assets/resolver.png";
import adaptable from "../assets/adaptable.png";
import firebase from "../assets/firebase.png";
import vs from "../assets/vs.png";
import oop from "../assets/oop.png";

import { motion } from "framer-motion";

const skills2 = [
  { name: "Algorithms", image: algorithms },
  { name: "Team Collaboration", image: tc },
  { name: "Data structure", image: de },
  { name: "Agile methodologies", image: am },
  { name: "Proactivity", image: proactivity },
  { name: "Effective Communication", image: hablar },
  { name: "Linux", image: linux },
  { name: "Conflict Resolution", image: resolver },
  { name: "Adaptability", image: adaptable },
  { name: "Firebase", image: firebase },
  { name: "VS Code", image: vs },
  { name: "OOP (Object Oriented Programming)", image: oop },
];

export default function SoftSkills() {
  return (
    <section className="w-full py-24 sm:py-32 lg:py-48 px-4 max-w-6xl mx-auto">
      <header className="lg:text-right text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Skills & Competencies
        </h2>
      </header>

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {skills2.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-800/90 backdrop-blur-xl 
                       rounded-2xl border border-gray-700 hover:border-indigo-500/50 shadow-xl 
                       cursor-pointer group transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            whileHover={{
              y: -8,
              scale: 1.05,
              boxShadow: "0 18px 32px rgba(99,102,241,0.35)",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
            }}
          >
            <motion.img
              src={skill.image}
              alt={skill.name}
              className="h-16 sm:h-24 mb-4 object-contain group-hover:scale-125 transition duration-300"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            <p className="text-sm sm:text-lg font-semibold text-gray-100">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
