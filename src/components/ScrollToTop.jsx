// src/components/ScrollToTop.jsx
import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // 1) Desactiva la restauración automática del navegador (solo una vez)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      try {
        window.history.scrollRestoration = "manual";
      } catch (e) {
        // algunos navegadores en iframes/secure contexts pueden lanzar, ignoramos
        // console.warn(e);
      }
    }
  }, []);

  // 2) Forzar scroll al top justo después del cambio de ruta (sin animación)
  useLayoutEffect(() => {
    // Si la ruta incluye hash (ancla), NO forzamos el tope (opcional)
    // Si quieres que incluso con hash vaya arriba, quita la condición.
    if (hash) {
      // si quieres que las rutas con hash vayan al ancla, salimos
      // return;
    }

    // Ejecutar en el siguiente frame para evitar que otros scripts lo sobreescriban
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname, hash]);

  return null;
}
