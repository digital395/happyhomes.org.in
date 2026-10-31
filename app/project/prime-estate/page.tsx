import CTA from "@/section/common/cta";
import About from "@/section/project/prime-estate/about";
import FAQ from "@/section/project/prime-estate/faq";
import Gallery from "@/section/project/prime-estate/gallery";
import Hero from "@/section/project/prime-estate/hero";
import Overview from "@/section/project/prime-estate/overview";
import Map from "@/section/project/prime-estate/map";
import Layout from "@/section/project/prime-estate/layout";
import PriceDetails from "@/section/project/prime-estate/price";

export default function AboutPage() {
  return (
    <main className="">
      <Hero />
      <About />
      <Overview />
      <PriceDetails />
      <Map />
      <Layout />
      <Gallery />
      <FAQ />
      <CTA />
    </main>
  );
}
