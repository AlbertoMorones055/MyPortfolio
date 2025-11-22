import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const defaultText = "Every line of code, one step closer to my dreams.";

export default function Hero({ text = defaultText }) {
  // Recalcula las letras sólo cuando `text` cambia
  const letters = useMemo(() => text.split(""), [text]);
  const [float, setFloat] = useState(false);

  // Calcular duración total de la animación inicial en función del número de letras
  const initialDelay = letters.length * 0.03 + 0.5;

  useEffect(() => {
    const timer = setTimeout(() => setFloat(true), initialDelay * 1000);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  return (
    <section
      className="
        w-full min-h-screen
        flex items-center
        bg-[#0f172a] text-white
        px-4 sm:px-6 md:px-10 lg:px-16
        mb-2 
      "
    >
      <div className="w-full max-w-5xl mx-auto">
        <h1
          className="
            text-left
            text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
            font-bold
            leading-tight sm:leading-[1.1]
            mb-8 sm:mb-10 md:mb-2
          "
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={
                float
                  ? {
                      opacity: 1,
                      y: [0, -6, 0, 6, 0],
                    }
                  : { opacity: 1, y: 0 }
              }
              transition={
                float
                  ? {
                      duration: 3.5 + (i % 5) * 0.2,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }
                  : {
                      delay: i * 0.06,
                      duration: 0.9,
                      ease: "easeOut",
                    }
              }
            >
              {char}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
}
