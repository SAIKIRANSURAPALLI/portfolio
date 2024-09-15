import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Timeline } from "@/sections/Journey";
import { CertificationSection } from "@/sections/Certificate";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Timeline />
      <ProjectsSection />
      <TapeSection />
      <CertificationSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
