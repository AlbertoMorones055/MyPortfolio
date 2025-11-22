import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [windowWidth, setWindowWidth] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  // Posición del mouse
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // Detectar tamaño de pantalla y tipo de dispositivo
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Evitar mostrar el cursor en dispositivos táctiles (mobile/tablet)
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setShowCursor(!isCoarsePointer);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Tamaños según el ancho de pantalla (breakpoints similares a Tailwind)
  let baseSize = 30; // Desktop
  let hoverSize = 80;

  if (windowWidth > 0 && windowWidth < 640) {
    // sm: móvil
    baseSize = 18;
    hoverSize = 40;
  } else if (windowWidth >= 640 && windowWidth < 1024) {
    // md: tablet
    baseSize = 24;
    hoverSize = 60;
  }
  // lg en adelante se queda con 30 / 80

  // Variantes del cursor
  const variants = {
    default: {
      x: mousePosition.x - baseSize / 2,
      y: mousePosition.y - baseSize / 2,
      height: baseSize,
      width: baseSize,
      border: "2px solid rgba(255,255,255,0.9)",
      borderRadius: "50%",
      backgroundColor: "transparent",
      mixBlendMode: "difference",
    },
    hover: {
      x: mousePosition.x - hoverSize / 2,
      y: mousePosition.y - hoverSize / 2,
      height: hoverSize,
      width: hoverSize,
      border: "2px solid rgba(255,255,255,0.6)",
      borderRadius: "50%",
      backgroundColor: "transparent",
      mixBlendMode: "difference",
    },
  };

  // Detecta hover en links, botones, imágenes
  useEffect(() => {
    const hoverables = document.querySelectorAll("a, button, img");

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // No mostrar nada en dispositivos táctiles
  if (!showCursor) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{ position: "fixed" }}
    />
  );
};

export default CustomCursor;
