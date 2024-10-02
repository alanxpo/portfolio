export default function ExperiencePage() {
  return (
    <section className="pt-4 sm:pt-12" id="experiencia">
      <h1 className="font-medium text-xl sm:text-2xl tracking-tighter dark:text-white text-neutral-800">Experiencia</h1>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="font-medium text-lg sm:text-xl mb-1 tracking-tighter dark:text-white text-neutral-800">
            Desarrollador Full Stack Web
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Dic 2023 — Abr 2024
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">PBPlus</p>
        <p className="prose prose-neutral dark:prose-invert dark:text-gray-300 text-neutral-600 text-sm sm:text-base">
          Aplicación web creada desde cero que facilita la gestión, soporte y
          comunicación entre los departamentos de la empresa, utilizando bases
          de datos y perfiles de usuario.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="font-medium text-lg sm:text-xl mb-1 tracking-tighter dark:text-white text-neutral-800">
            Desarrollador Full Stack Web
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Jul 2023 — Dic 2023
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
          Instituto Tecnológico de Ensenada
        </p>
        <p className="prose prose-neutral dark:prose-invert dark:text-gray-300 text-neutral-600 text-sm sm:text-base">
          Sistema de Integración Escolar universitario que permite la gestión
          integral de estudiantes, cursos y administrativos, mejorando la
          eficiencia y comunicación interna. Desarrollado para optimizar
          procesos académicos y administrativos de la universidad.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="font-medium text-lg sm:text-xl mb-1 tracking-tighter dark:text-white text-neutral-800">
            Desarrollador Full Stack Móvil
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            2023 Ene — Jun 2023
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
          InnovaTecNM
        </p>
        <p className="prose prose-neutral dark:prose-invert dark:text-gray-300 text-neutral-600 text-sm sm:text-base">
          Aplicación móvil que promueva un estilo de vida saludable y productivo
          para sus usuarios, brindando información detallada sobre alimentación,
          ejercicios, tareas diarias y recomendaciones de libros, mejorando así
          la calidad de vida de los usuarios y solucionando la falta de
          conocimiento en estas áreas específicas.
        </p>
      </div>
    </section>
  );
}
