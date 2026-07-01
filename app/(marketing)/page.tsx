import HeroSection from "../components/HomePage/HeroSection/heroSection";
import NavBar from "../components/HomePage/navBarSection/navBar";
import PlanSection from "../components/HomePage/PlanSection/PlanSection";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PlanSection />
    </div>
  )
}
