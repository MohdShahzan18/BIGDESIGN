import { ArrowUpRight } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Fragmented systems",
    description:
      "Disconnected tools and manual handoffs slow teams down and make it difficult to see the complete picture.",
    solution:
      "We connect experiences, systems and workflows into one structured digital ecosystem.",
  },
  {
    number: "02",
    title: "Slow, risky delivery",
    description:
      "Without a clear architecture and process, projects become difficult to manage and can ship the wrong thing.",
    solution:
      "We create a clear delivery framework with defined milestones, technology and measurable outcomes.",
  },
  {
    number: "03",
    title: "Hard to scale later",
    description:
      "Quick solutions often work for the first version but become expensive and difficult to maintain as the business grows.",
    solution:
      "We build flexible foundations that can evolve with your users, products and business.",
  },
];

function WhatWeSolve() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                What we solve
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Complex problems.
              <br />
              <span className="text-black/25 dark:text-white/25">
                Clear solutions.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
              Great digital experiences don't happen by accident. We
              identify the friction, design the right system and build
              experiences that are ready for what comes next.
            </p>
          </div>

        </div>

        {/* Problems */}
        <div className="mt-24">

          {problems.map((problem, index) => (
            <article
              key={problem.number}
              className="group relative border-t border-black/10 py-10 dark:border-white/10 sm:py-14"
            >

              <div className="grid gap-8 lg:grid-cols-[100px_1fr_1fr_60px] lg:items-start">

                {/* Number */}
                <div>
                  <span className="text-sm font-medium text-black/30 dark:text-white/30">
                    {problem.number}
                  </span>
                </div>

                {/* Problem */}
                <div>
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
                    The challenge
                  </p>

                  <h3 className="max-w-md text-3xl font-medium tracking-[-0.045em] transition duration-500 group-hover:translate-x-1 sm:text-4xl">
                    {problem.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-6 text-black/45 dark:text-white/40">
                    {problem.description}
                  </p>
                </div>

                {/* Solution */}
                <div className="lg:pt-0">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
                    Our approach
                  </p>

                  <p className="max-w-lg text-base leading-7 text-black/65 dark:text-white/60">
                    {problem.solution}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex lg:justify-end">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-black/30 dark:border-white/10 dark:group-hover:border-white/30">
                    <ArrowUpRight
                      size={18}
                      className="text-black/50 dark:text-white/50"
                    />
                  </div>
                </div>

              </div>

              {/* Hover progress line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all duration-700 group-hover:w-full dark:bg-white" />

            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-20 grid gap-8 border-t border-black/10 pt-10 dark:border-white/10 sm:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              Our philosophy
            </p>
          </div>

          <div>
            <p className="max-w-xl text-xl leading-8 tracking-[-0.02em] text-black/70 dark:text-white/65 sm:text-2xl">
              We don't build one-off experiences. We build digital
              foundations that can evolve with your business.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhatWeSolve;