import React from "react";
import { motion } from "framer-motion";

// Import images
import CbtisLogo from "../assets/certifications/cbtis_logo.png";
import ProulexLogo from "../assets/certifications/proulex_logo.png";
import PooLogo from "../assets/certifications/poo_logo.webp";
import CetiLogo from "../assets/certifications/CetiLogo.png";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Certified Programming Technician",
      issuer:
        "Centro Bachillerato Tecnológico Industrial y de Servicios (CBTIS)",
      date: "June 2023",
      thumbnailUrl: CbtisLogo,
    },
    {
      id: 2,
      title: "University Diploma in English B1",
      issuer: "Proulex Centro de Idiomas",
      date: "November 2024",
      thumbnailUrl: ProulexLogo,
    },
    {
      id: 3,
      title: "Certificate of Completion – Object-Oriented Programming (OOP)",
      issuer: "Instructor: Jose Javier Villena",
      date: "May 2024",
      thumbnailUrl: PooLogo,
    },
    {
      id: 4,
      title: "Bachelor’s Degree in Software Development Engineering",
      issuer: "Centro De Enseñanza Tecnico e Industrial, Colomos. (CETI)",
      date: "Available in 2027",
      thumbnailUrl: CetiLogo,
    },
  ];

  return (
    <section
      id="certifications"
      className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Header */}
      <header className="mb-20 mt-40 text-center">
        <h2 className=" text-left text-5xl sm:text-4xl font-bold">
          Certifications & Credentials
        </h2>
        <p className="text-left mt-4">
          Verified skills & credentials that support my work.
        </p>
      </header>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="pointer-events-none absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-indigo-500/40" />

        <div className="space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative pl-10 sm:pl-14 md:pl-16"
            >
              {/* Timeline point */}
              <span className="absolute left-1 sm:left-2 top-6 w-4 h-4 rounded-full bg-indigo-400 ring-4 ring-indigo-400/30" />

              {/* Card */}
              <article
                className=" relative             
                  flex flex-col sm:flex-row gap-6 sm:gap-10
                  p-6 rounded-xl bg-transparent
                  border border-gray-700/30 shadow-md shadow-gray-700/20
                "
              >
                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-gray-300">{cert.issuer}</p>

                  {/* Date */}
                  <p className="inline-flex items-center mt-4 text-xs sm:text-sm font-medium text-indigo-300 hover:text-indigo-200 transition">
                    {cert.date}
                    <span className="ml-1 text-lg leading-none">↗</span>
                  </p>
                </div>

                {/* Loading overlay only for CETI */}
                {cert.id === 4 && (
                  <div className="absolute inset-0 bg-black/40  flex items-center justify-center rounded-xl pointer-events-none">
                    <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {/* Thumbnail */}
                {cert.thumbnailUrl && (
                  <img
                    src={cert.thumbnailUrl}
                    alt={`Thumbnail for ${cert.title}`}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-md self-center"
                  />
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
