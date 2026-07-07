import { Button } from "@/components/ui/button";

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

      <div className="mt-10 flex justify-center gap-4">
        <Button>Get Started</Button>

        <Button variant="secondary">Explore</Button>
      </div>
    </section>
  );
}
