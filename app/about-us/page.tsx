import Hero from "@/section/about/hero";
import Values from "@/section/home/values";
import CTA from "@/section/common/cta";
import FAQ from "@/section/common/faq";
import About from "@/section/about/about";
import Animation from "@/section/about/animation";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero />
      <About />
      <Animation />
      <Values />
      <FAQ />
      <CTA />
    </main>
  );
}
