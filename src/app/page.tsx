import Hero from "../components/sections/Hero";
import AboutSection from "../components/sections/AboutSection";
import FeaturedDishes from "../components/sections/FeaturedDishes";
import Testimonials from "../components/sections/Testimonials";
import VisitSection from "../components/sections/VisitSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturedDishes />
      <Testimonials />
      <VisitSection />
    </main>
  );
}
