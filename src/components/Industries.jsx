import { ArrowUpRight } from "lucide-react";

const useCases = [
  {
    number: "01",
    title: "Growth teams",
    description:
      "Create digital experiences that help teams communicate ideas, launch products and accelerate growth.",
  },
  {
    number: "02",
    title: "Operations",
    description:
      "Turn complex workflows and information into clear, intuitive digital experiences.",
  },
  {
    number: "03",
    title: "Customer experience",
    description:
      "Build memorable experiences that help customers understand, interact and connect with your brand.",
  },
  {
    number: "04",
    title: "Internal tooling",
    description:
      "Design powerful internal products that make teams more productive and connected.",
  },
];

const industries = [
  "FinTech",
  "Healthcare",
  "Education",
  "E-commerce",
  "Manufacturing",
  "Real Estate",
  "Travel & Hospitality",
  "Retail",
  "Media & Entertainment",
  "Telecom",
];

function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                Where we apply it
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Designed for
              <br />
              <span className="text-black/25 dark:text-white/25">
                real-world impact.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
              From customer-facing experiences to complex internal
              systems, we design digital products around the people
              who use them and the businesses behind them.
            </p>
          </div>

        </div>

        {/* ================= USE CASES ================= */}
        <div className="mt-24">

          <div className="mb-8 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              Use cases
            </p>

            <span className="text-xs text-black/30 dark:text-white/30">
              04 capabilities
            </span>
          </div>

          <div className="grid border-t border-black/10 dark:border-white/10 lg:grid-cols-2">

            {useCases.map((item) => (
              <article
                key={item.number}
                className="group relative border-b border-black/10 py-9 dark:border-white/10 lg:px-8 lg:py-12"
              >
                <div className="flex items-start gap-7">

                  {/* Number */}
                  <span className="pt-1 text-xs font-medium text-black/30 dark:text-white/30">
                    {item.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-start justify-between gap-5">

                      <h3 className="text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                        {item.title}
                      </h3>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-black/30 dark:border-white/10 dark:group-hover:border-white/30">
                        <ArrowUpRight size={15} />
                      </div>

                    </div>

                    <p className="mt-4 max-w-md text-sm leading-6 text-black/45 dark:text-white/40">
                      {item.description}
                    </p>

                  </div>

                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all duration-700 group-hover:w-full dark:bg-white" />

              </article>
            ))}

          </div>
        </div>

        {/* ================= INDUSTRIES ================= */}
        <div className="mt-28">

          <div className="mb-8 flex items-center justify-between">

            <p className="text-xs uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              Industry applications
            </p>

            <p className="hidden text-xs text-black/30 dark:text-white/30 sm:block">
              Built for different worlds
            </p>

          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-2 border-l border-t border-black/10 dark:border-white/10 sm:grid-cols-3 lg:grid-cols-5">

            {industries.map((industry, index) => (
              <div
                key={industry}
                className="group relative min-h-[150px] border-b border-r border-black/10 p-5 transition duration-500 hover:bg-black hover:text-white dark:border-white/10 dark:hover:bg-white dark:hover:text-black sm:p-7"
              >

                <div className="flex h-full flex-col justify-between">

                  <span className="text-[10px] text-black/30 transition-colors group-hover:text-white/40 dark:text-white/30 dark:group-hover:text-black/40">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div className="flex items-end justify-between gap-3">

                    <h3 className="text-lg font-medium tracking-[-0.025em] sm:text-xl">
                      {industry}
                    </h3>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 opacity-30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ================= BOTTOM STATEMENT ================= */}
        <div className="mt-20 border-t border-black/10 pt-10 dark:border-white/10">

          <div className="grid gap-8 sm:grid-cols-2">

            <p className="text-xs uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              One approach. Many industries.
            </p>

            <p className="max-w-xl text-xl leading-8 tracking-[-0.02em] text-black/65 dark:text-white/60 sm:text-2xl">
              Different industries have different challenges. Our
              process adapts to the context without compromising
              the quality of the experience.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Industries;