import CTA from "@/section/common/cta";
import About from "@/section/project/emperor-city/about";
import FAQ from "@/section/project/emperor-city/faq";
import Gallery from "@/section/project/emperor-city/gallery";
import Hero from "@/section/project/emperor-city/hero";
import Highlights from "@/section/project/emperor-city/highlights";
import Overview from "@/section/project/emperor-city/overview";
import Map from "@/section/project/emperor-city/map";
import Layout from "@/section/project/emperor-city/layout";
import Amenities from "@/section/project/emperor-city/amenities";
import PriceDetails from "@/section/project/emperor-city/price";

export default function AboutPage() {
  return (
    <main className="">
      <Hero />
      <About />
      <Overview />
      <Amenities />
      <PriceDetails />
      <Highlights />
      <Map />
      <Layout />
      <Gallery />
      <FAQ />
      <CTA />
    </main>
  );
}
