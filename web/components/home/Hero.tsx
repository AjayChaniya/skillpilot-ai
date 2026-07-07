export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold leading-tight">
        Learn Smarter with
        <span className="text-blue-600"> AI</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        SkillPilot AI helps students build skills, prepare for interviews,
        create resumes, and land their dream jobs.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Get Started
        </button>

        <button className="rounded-lg border px-6 py-3 hover:bg-gray-100">
          Explore
        </button>
      </div>
    </section>
  );
}
