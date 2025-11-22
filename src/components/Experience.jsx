import React from "react";

//Componentes
import Card from "./Card.jsx";

export default function Experience() {
  return (
    <section
      className="
        Main container 
        mx-auto 
        px-4 sm:px-6 md:px-10 lg:px-16 
        mb-28 sm:mb-50 lg:mb-50 mt-40
      "
    >
      <header className="max-w-5xl mx-auto">
        <h2 className="text-right text-3xl sm:text-4xl font-bold">
          Professional Experience
        </h2>
        <p className="text-right mt-4 mb-1">Check my professional journey.</p>
      </header>

      <div className="mt-10">
        <Card />
      </div>
    </section>
  );
}
