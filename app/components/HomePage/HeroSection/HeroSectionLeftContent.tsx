import { Button } from "@/components/ui/button";

export default function HeroSectionLeftContent() {
  return (
    <section className="hero-left-container">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-primary">JobTracker</p>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
          Keep your job search organized from application to offer.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Track roles, deadlines, interviews, and next steps in one dashboard so you can stay focused while your job search moves forward.
        </p>

        <div className="hero-highlights mt-8 grid gap-3 sm:grid-cols-3">
          <div className="hero-highlight">Record every application in one place</div>
          <div className="hero-highlight">Track interviews and follow-ups easily</div>
          <div className="hero-highlight">See your progress at a glance</div>
        </div>
      </div>

      <div className="hero-buttons">
        <Button>Start Tracking</Button>
        <Button variant="outline">View Plans</Button>
      </div>
    </section>
  );
}
