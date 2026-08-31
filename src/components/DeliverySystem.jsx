import { ArrowUpRight, MoveUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your users, goals, challenges and existing systems before we design anything.",
    tag: "Strategy",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We turn ideas into immersive digital experiences through design, technology and 3D.",
    tag: "Experience",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "We connect, optimize and evolve your experience so it keeps creating value as you grow.",
    tag: "Growth",
  },
];

function DeliverySystem() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-black/[0.03] blur-3xl dark:bg-white/[0.03]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Top heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                Our approach
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              From idea
              <br />
              <span className="text-black/25 dark:text-white/25">
                to impact.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
              We don't treat design as a disconnected task. Strategy,
              experience and technology work together to create digital
              products built for real business outcomes.
            </p>
          </div>

        </div>

        {/* Process line */}
        <div className="mt-24 hidden items-center md:flex">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-1 items-center">

              <div className="flex h-3 w-3 shrink-0 rounded-full border border-black/30 dark:border-white/30">
                <span className="m-auto h-1 w-1 rounded-full bg-black dark:bg-white" />
              </div>

              {index !== steps.length - 1 && (
                <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
              )}

            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="mt-0 grid border-t border-black/10 dark:border-white/10 md:grid-cols-3">

          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`group relative min-h-[390px] border-b border-black/10 p-7 transition-all duration-500 hover:bg-black/[0.025] dark:border-white/10 dark:hover:bg-white/[0.025] sm:p-10 md:border-b-0 ${
                index !== 0
                  ? "md:border-l md:border-black/10 md:dark:border-white/10"
                  : ""
              }`}
            >

              {/* Number + Arrow */}
              <div className="flex items-start justify-between">

                <span className="text-sm font-medium text-black/30 dark:text-white/30">
                  {step.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-black/30 dark:border-white/10 dark:group-hover:border-white/30">
                  <ArrowUpRight
                    size={17}
                    className="text-black/50 dark:text-white/50"
                  />
                </div>

              </div>

              {/* Tag */}
              <div className="mt-20 inline-flex rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:border-white/10 dark:text-white/40">
                {step.tag}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-sm text-sm leading-6 text-black/45 dark:text-white/40">
                {step.description}
              </p>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-700 group-hover:w-full dark:bg-white" />

            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-7 dark:border-white/10 sm:flex-row sm:items-center">

          <p className="max-w-xl text-sm leading-6 text-black/40 dark:text-white/35">
            One connected system across strategy, design, engineering and
            growth.
          </p>

          <a
            href="#work"
            className="group flex items-center gap-2 text-sm font-medium"
          >
            Explore our process

            <MoveUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default DeliverySystem;