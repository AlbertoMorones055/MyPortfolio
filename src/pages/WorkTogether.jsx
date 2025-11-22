import React, { useEffect } from "react";

// Componentes
import Hero from "../components/Hero.jsx";

const text = "Let's build something amazing together.";

// Clases base compartidas para los botones
const baseButtonClasses = `
  relative inline-flex items-center justify-center overflow-hidden
  rounded-3xl
  px-8 py-4 sm:px-12 sm:py-5 lg:px-20 lg:py-8
  text-xl sm:text-2xl lg:text-3xl
  font-bold text-white
  transition-all duration-500
  hover:scale-110
  group
  w-full sm:w-auto
  max-w-xs sm:max-w-sm
`;

// Componente reutilizable para un botón de contacto
const ContactButton = ({
  href,
  label,
  outerGradientClasses,
  innerGradientClasses,
  shadowClasses,
  newTab = false,
}) => (
  <a
    href={href}
    className={`${baseButtonClasses} ${shadowClasses}`}
    {...(newTab && {
      target: "_blank",
      rel: "noopener noreferrer",
    })}
  >
    <span
      className={`
        absolute inset-0
        ${outerGradientClasses}
      `}
    />
    <span
      className={`
        absolute inset-1
        ${innerGradientClasses}
      `}
    />
    <span className="relative z-10 flex items-center gap-3 text-center">
      <span className="text-4xl" />
      <span className="tracking-wider">{label}</span>
    </span>
  </a>
);

function WorkTogether() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      {/* Hero */}
      <Hero text={text} />

      {/* Sección de contacto */}
      <div
        className="
          flex flex-col
          items-center
          px-4 sm:px-6 md:px-10
          mt-10 sm:mt-14 lg:mt-16
          mb-40 sm:mb-48 lg:mb-64
        "
      >
        <div className="max-w-2xl text-center mb-6 sm:mb-8">
          <span
            className="
      inline-flex items-center gap-4
      px-6 py-3
      rounded-full
      bg-white/10
      border border-white/20
      backdrop-blur-sm
      text-base sm:text-lg lg:text-xl
      text-white/90
      font-semibold
      tracking-wide
    "
          >
            {/* Toggle Style */}
            <span
              className="
        relative inline-flex items-center
        h-7 w-14 sm:h-8 sm:w-16 lg:h-9 lg:w-20
        rounded-full
        bg-emerald-500/60
        transition-all
      "
            >
              {/* Círculo del toggle */}
              <span
                className="
          absolute left-1
          h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7
          rounded-full
          bg-white
          shadow
          transition-all
          translate-x-6 sm:translate-x-7 lg:translate-x-9
        "
              />
            </span>
            Open to new opportunities
          </span>
        </div>

        {/* Botones de contacto */}
        <div
          className="
            flex flex-col sm:flex-row
            gap-5 sm:gap-8 lg:gap-10
            justify-center items-center
            w-full
          "
        >
          <ContactButton
            href="mailto:alejandroultron05@gmail.com"
            label="Send Email"
            shadowClasses="
              shadow-[0_0_40px_rgba(99,102,241,0.6)]
              hover:shadow-[0_0_60px_rgba(99,102,241,0.8)]
            "
            outerGradientClasses="
              bg-[linear-gradient(270deg,#6366F1,#8B5CF6,#EC4899,#6366F1)]
              bg-[length:400%_400%]
              animate-gradient
              opacity-100
              blur-sm
              group-hover:blur-lg
              transition-all duration-500
            "
            innerGradientClasses="
              bg-[linear-gradient(270deg,#6366F1,#8B5CF6,#EC4899,#6366F1)]
              bg-[length:400%_400%]
              animate-gradient
              opacity-50
              rounded-3xl
            "
          />

          <ContactButton
            href="https://wa.me/523317459728"
            label="WhatsApp"
            newTab
            shadowClasses="
              shadow-[0_0_40px_rgba(34,197,94,0.6)]
              hover:shadow-[0_0_60px_rgba(34,197,94,0.8)]
            "
            outerGradientClasses="
              bg-[linear-gradient(270deg,#22C55E,#10B981,#059669,#22C55E)]
              bg-[length:400%_400%]
              animate-gradient
              opacity-100
              blur-sm
              group-hover:blur-lg
              transition-all duration-500
            "
            innerGradientClasses="
              bg-[linear-gradient(270deg,#22C55E,#10B981,#059669,#22C55E)]
              bg-[length:400%_400%]
              animate-gradient
              opacity-50
              rounded-3xl
            "
          />
        </div>
      </div>
    </section>
  );
}

export default WorkTogether;
