import Hero from "@/section/home/hero";
import Project from "@/section/home/project";
import Highlights from "@/section/home/highlights";
import Values from "@/section/home/values";
import CTA from "@/section/common/cta";
import FAQ from "@/section/common/faq";
import Marquee from "@/section/home/marquee";
import AboutSection from "@/section/home/about";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero />
      <Marquee />
      <AboutSection />
      <Project />
      <Highlights />
      <Values />
      <FAQ />
      <CTA />
    </main>
  );
}
