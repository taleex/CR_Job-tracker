import { Button } from "@/components/ui/button";

export default function HeroSectionLeftContent() {
  return (
    <section className="hero-left-container">
      App Welcome
      Short Description of the App

        <p>
          This is a brief description of what your app does and how it can benefit users.
        </p>

        <div className="hero-buttons">
            <Button>Get Started</Button>
            <Button variant="outline">Show Plans</Button>
        </div>
    
    </section>
  )
}
