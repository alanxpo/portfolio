import Image from "next/image";
import Project from "../Project";

export default function ProjectsPage() {
  return (
    <section className="pt-12" id="proyectos">
      <h1 className="font-medium text-2xl tracking-tighter dark:text-white text-neutral-800">
        Proyectos
      </h1>
      <div className="prose prose-neutral dark:prose-invert mt-4 grid grid-cols-1 gap-2">
      <Project
          title="Sistema de Integración Escolar"
          description="Sistema de Integración Escolar universitario para gestión integral y eficiente."
          image="/sie.png"
          tech={["NextJS", "React", "Tailwind", "MySQL"]}
          

        ></Project>
        <Project
          title="PB Plus"
          description="Aplicación web empresarial con gestión, soporte, comunicación y
              cotización en PDF."
          image="/pbplus.png"
          tech={["NextJS", "React", "Tailwind", "MongoDB", "AWS"]}
          
          preview="https://www.pbplus.com.mx"
        ></Project>
        
        <Project
          title="Statikk"
          description="Statikk es una plataforma web que proporciona estadísticas detalladas y actualizadas de League of Legends, incluyendo información sobre campeones, jugadores y partidas."
          image="/statikk.png"
          tech={["NextJS", "React", "Tailwind"]}
          
          preview="https://www.statikkgg.vercel.app"
        ></Project>
      </div>
    </section>
  );
}
