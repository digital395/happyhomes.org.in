import Hero from "@/section/contact/hero";
import About from "@/section/contact/about";
import Form from "@/section/contact/form";
import Location from "@/section/contact/location";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Hero />
      <Form />
      {/* <About /> */}
      <Location />
    </main>
  );
}
