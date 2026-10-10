import { highlights } from "@/data/highlight-emperor";

export default function Highlights() {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-337.5">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            OUR VALUES
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
        </div>

        <h2 className="mx-auto max-w-full text-center font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
          The principles behind every place we create
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-2.25 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="min-h-43.5 rounded-[14px] bg-[#781817] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 lg:min-h-57.5 lg:px-8 lg:py-7"
            >
              <div className="mb-4 h-8.75 w-8.75 lg:mb-5 lg:h-12 lg:w-12">
                <img
                  src={item.icon}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              <h3
                className="font-marcellus text-[20px] leading-tight font-semibold md:text-[25px]"
                style={{
                  background:
                    "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h3>

              <p className="mt-3 max-w-67.5 text-[14px] leading-[1.55] font-normal text-white lg:mt-4 lg:max-w-82.5 lg:text-[16px] lg:leading-[1.6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
