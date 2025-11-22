// Componentes
import Hero from "../components/Hero.jsx";
import CardStructure from "../components/CardStructure.jsx";
import project2 from "../assets/projectsPhotos/project2.png";

const text = "Turning Ideas Into Code.";

export default function Projects() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <header>
        <Hero text={text} />
      </header>

      <section className="mt-10">
        <CardStructure>
          {/* Animated progress bar */}
          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="
                absolute h-full 
                bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300
                shadow-[0_0_15px_rgba(255,235,0,0.6)]
                rounded-full
                animate-[glowMove_1.8s_ease-in-out_infinite]
              "
            ></div>
          </div>

          <div className="flex flex-col gap-6 p-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-left text-2xl font-semibold tracking-tight text-white">
                MiToDoList
              </h2>

              <span
                className="px-3 py-1 text-sm rounded-full
                bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
              >
                In Progress
              </span>
            </div>

            {/* Imagen */}
            <div className="overflow-hidden rounded-xl border border-white/10">
              <img
                src={project2}
                alt="MiToDoList preview"
                className="
                  w-full 
                  aspect-video 
                  object-cover
                  hover:scale-[1.03]
                  transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                "
              />
            </div>

            {/* Descripción */}
            <p className="text-left text-gray-300 leading-relaxed">
              Your personal productivity companion designed to make task
              management intuitive, fast, and visually clean. Stay organized
              through a smooth, modern interface built to keep you focused and
              motivated.
            </p>

            {/* View Progress (botón mejorado) */}
            <span
              onClick={() =>
                window.open(
                  "https://github.com/AlbertoMorones055/MiToDoList",
                  "_blank"
                )
              }
              className="
              inline-block
              w-fit
              px-4 py-1.5 
              text-sm font-medium 
              rounded-full 
              bg-purple-500/20 
              text-purple-300 
              border border-purple-400/30 
              backdrop-blur-sm 
              hover:bg-purple-500/30
              hover:border-purple-400/50
              transition-all duration-300
              cursor-pointer
            "
            >
              View Progress
            </span>
          </div>
        </CardStructure>
      </section>
    </main>
  );
}
