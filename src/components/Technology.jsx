import { ArrowUpRight, Layers3, Database, Code2, Cloud } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Faster time to value",
    text: "Move from concept to measurable digital experiences with a clear delivery process.",
  },
  {
    number: "02",
    title: "Lower delivery risk",
    text: "A structured architecture reduces integration problems and unnecessary rework.",
  },
  {
    number: "03",
    title: "Built for scale",
    text: "Create flexible foundations that can evolve as your users and business grow.",
  },
  {
    number: "04",
    title: "Defensible foundation",
    text: "Documented systems and technology create a foundation that lasts beyond one release.",
  },
];

const technologies = [
  "Figma",
  "Design Tokens",
  "Motion Design",
  "WebGL",
  "Blender",
  "Prototyping",
];

function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= BUSINESS BENEFITS ================= */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                Business benefits
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Designed to move
              <br />
              <span className="text-black/25 dark:text-white/25">
                the metrics that matter.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
              Good design should do more than look impressive. It should
              make products easier to use, systems easier to operate and
              businesses easier to scale.
            </p>
          </div>

        </div>

        {/* Benefits */}
        <div className="mt-20 grid border-t border-black/10 dark:border-white/10 md:grid-cols-2">

          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group relative border-b border-black/10 py-9 dark:border-white/10 md:p-10"
            >

              <div className="flex items-start justify-between">

                <span className="text-xs text-black/30 dark:text-white/30">
                  {benefit.number}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-black/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black dark:text-white/30 dark:group-hover:text-white"
                />

              </div>

              <h3 className="mt-12 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                {benefit.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-black/45 dark:text-white/40">
                {benefit.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all duration-700 group-hover:w-full dark:bg-white" />

            </article>
          ))}

        </div>


        {/* ================= TECHNOLOGY ================= */}

        <div className="mt-36">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

                <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                  Technology
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Built on the
                <br />
                <span className="text-black/25 dark:text-white/25">
                  right foundation.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
                The technology stack adapts to the experience. We select
                the right tools for visual quality, performance,
                integration and long-term scalability.
              </p>
            </div>

          </div>


          {/* Technology pills */}
          <div className="mt-16 flex flex-wrap gap-3">

            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-full border border-black/10 px-5 py-3 text-sm text-black/55 transition duration-300 hover:border-black/30 hover:text-black dark:border-white/10 dark:text-white/50 dark:hover:border-white/30 dark:hover:text-white"
              >
                {technology}
              </div>
            ))}

          </div>


          {/* Architecture */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-black/10 bg-black text-white dark:border-white/10">

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />

            <div className="relative p-7 sm:p-10 lg:p-14">

              <div className="flex items-center justify-between border-b border-white/10 pb-6">

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                    System architecture
                  </p>

                  <p className="mt-2 text-sm text-white/50">
                    Experience → Integration → Engine → Infrastructure
                  </p>
                </div>

                <Layers3
                  size={22}
                  className="text-white/40"
                />

              </div>


              {/* Architecture layers */}
              <div className="relative mx-auto mt-16 max-w-4xl">

                {/* Layer 1 */}
                <div className="group relative mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition hover:bg-white/[0.08]">

                  <Code2
                    size={22}
                    className="mx-auto mb-4 text-white/50"
                  />

                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Layer 01
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    Client / Interface
                  </h3>

                  <p className="mt-2 text-xs text-white/35">
                    Web · Mobile · 3D · AR / VR
                  </p>

                </div>


                {/* Connector */}
                <div className="mx-auto h-14 w-px bg-white/15" />


                {/* Layer 2 */}
                <div className="group relative mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition hover:bg-white/[0.08]">

                  <ArrowUpRight
                    size={22}
                    className="mx-auto mb-4 text-white/50"
                  />

                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Layer 02
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    API / Integration Layer
                  </h3>

                  <p className="mt-2 text-xs text-white/35">
                    APIs · CRM · ERP · Identity
                  </p>

                </div>


                {/* Connector */}
                <div className="mx-auto h-14 w-px bg-white/15" />


                {/* Layer 3 */}
                <div className="group relative mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition hover:bg-white/[0.08]">

                  <Layers3
                    size={22}
                    className="mx-auto mb-4 text-white/50"
                  />

                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Layer 03
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    Core 3D Design Engine
                  </h3>

                  <p className="mt-2 text-xs text-white/35">
                    WebGL · Blender · 3D Systems
                  </p>

                </div>


                {/* Connector */}
                <div className="mx-auto h-14 w-px bg-white/15" />


                {/* Layer 4 */}
                <div className="group relative mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.04] p-6 text-center backdrop-blur-sm transition hover:bg-white/[0.08]">

                  <Cloud
                    size={22}
                    className="mx-auto mb-4 text-white/50"
                  />

                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Layer 04
                  </p>

                  <h3 className="mt-2 text-xl font-medium">
                    Data & Cloud Infrastructure
                  </h3>

                  <p className="mt-2 text-xs text-white/35">
                    Data · Cloud · Analytics · Security
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Technology;