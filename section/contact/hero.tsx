import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="relative h-60 w-full overflow-hidden md:h-125">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/contact/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#851c17]/90 via-[#851c17]/30 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-325 flex-col justify-center px-3 pb-7 md:px-2 md:pb-10">
        <div className="mb-3 flex items-center gap-1 text-[9px] tracking-[1.5px] text-white uppercase md:text-[19px]">
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-[#f2b900]"
          >
            Home
          </Link>

          <span className="text-white">.</span>

          <span className="text-white">Contact Us</span>
        </div>

        <h1 className="font-poppins text-[20px] leading-[1.15] font-normal whitespace-nowrap text-white md:text-[46px]">
          Let&apos;s Start Your{" "}
          <span className="text-[#f2b900]">Property Journey</span>
        </h1>
      </div>
    </section>
  );
}
