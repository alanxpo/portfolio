export default function EducationPage() {
  return (
    <section className="pt-4 sm:pt-12" id="educacion">
      <h1 className="font-medium text-xl sm:text-2xl tracking-tighter dark:text-white text-neutral-800">Educación</h1>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="font-medium text-lg sm:text-xl mb-1 tracking-tighter dark:text-white text-neutral-800">
            Ingeniería en Sistemas Computacionales
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            2019 — 2023
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
          TecNM - Campus Ensenada
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h2 className="font-medium text-lg sm:text-xl mb-1 tracking-tighter dark:text-white text-neutral-800">
            Técnico en Programación
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            2016 — 2019
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
          CECyTE - Plantel Ensenada
        </p>
      </div>
    </section>
  );
}
