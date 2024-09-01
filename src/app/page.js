import FeaturesSection from "@/Components/FeaturesSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Pricing from "@/Components/Pricing";
import Testimonials from "@/Components/Testimonials";
import WorkflowSection from "@/Components/WorkflowSection";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
