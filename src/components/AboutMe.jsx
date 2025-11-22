// src/components/About.jsx

//Animations
import { motion } from "framer-motion";

//Import images
import betoben2 from "../assets/betoben2.jpeg";
//Tools
import java from "../assets/java.png";
import react from "../assets/react.png";
import css from "../assets/css.webp";
import html from "../assets/html.png";
import js from "../assets/js.png";
import node from "../assets/node.png";
import Tailwind from "../assets/Tailwind.png";
import vite from "../assets/vite.png";
import git from "../assets/git.png";

const skills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "React", image: react },
  { name: "Git", image: git },
  { name: "Node.js", image: node },
  { name: "Tailwind", image: Tailwind },
  { name: "Java", image: java },
  { name: "Vite", image: vite },
];

export default function AboutMe() {
  return (
    <section
      id="SeccionAbout"
      className="min-h-screen flex items-center bg-gradient-to-b px-6 py-25"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 items-center">
        {/* Columna izquierda - Texto */}
        <motion.div
          className="space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I'm{" "}
            <span className="font-semibold text-indigo-400">
              Alberto Morones
            </span>
            , a{" "}
            <span className="font-semibold text-indigo-400">
              software development engineering student.
            </span>{" "}
            I strive to be a better developer every day, learning and improving
            my skills to build innovative projects with clean code.
          </p>

          <div>
            <p className="text-lg font-semibold text-indigo-300 mb-4">
              Technologies I've worked with:
            </p>
            {/* Skills Cards */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 md:p-4 bg-gray-800/80 backdrop-blur rounded-lg border border-gray-700 hover:border-indigo-500/50 shadow-lg cursor-pointer group transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 24px 0 rgba(99,102,241,0.3)",
                    backgroundColor: "rgba(99, 102, 241, 0.1)",
                  }}
                >
                  <motion.img
                    src={skill.image}
                    alt={skill.name}
                    className="h-10 md:h-14 mb-2 object-contain group-hover:scale-125 transition duration-300"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                  <p className="text-xs md:text-sm font-medium text-gray-200 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-300 pt-4">
            I'm currently looking for{" "}
            <span className="font-semibold text-indigo-400">
              internship or junior developer opportunities
            </span>
            . Let's build something amazing together!
          </p>
        </motion.div>

        {/* Columna derecha - Tarjeta con foto */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative group w-96 md:w-[800px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{
              y: -12,
              boxShadow: "0 25px 50px 0 rgba(99,102,241,0.4)",
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/40 z-10"></div>
            <img
              src={betoben2}
              alt="Alberto"
              className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
