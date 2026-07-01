import FooterSection from "../components/HomePage/FooterSection";
import HeroSection from "../components/HomePage/HeroSection/heroSection";
import NavBar from "../components/HomePage/navBarSection/navBar";
import PlanSection from "../components/HomePage/PlanSection/PlanSection";

export default function HomePage() {
  return (
    <main className="HomePage">
      <NavBar />
      <div className="HomePageContent">
        <HeroSection />
        <PlanSection />
      </div>
      <FooterSection />
    </main>
  )
}
