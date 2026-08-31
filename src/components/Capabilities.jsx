import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "AR / VR Design",
    description:
      "Immersive experiences designed to connect physical and digital worlds.",
    keyword: "IMMERSIVE",
  },
  {
    number: "02",
    title: "Branding & Identity",
    description:
      "Distinctive visual identities built to make brands recognizable and memorable.",
    keyword: "IDENTITY",
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Flexible design foundations that keep products consistent as they scale.",
    keyword: "SYSTEMS",
  },
  {
    number: "04",
    title: "Mobile App Design",
    description:
      "Intuitive mobile experiences focused on usability, interaction and conversion.",
    keyword: "MOBILE",
  },
  {
    number: "05",
    title: "Motion Design",
    description:
      "Purposeful motion and interaction that bring digital experiences to life.",
    keyword: "MOTION",
  },
  {
    number: "06",
    title: "Product Design",
    description:
      "End-to-end product experiences shaped around real users and business goals.",
    keyword: "PRODUCT",
  },
];

function Capabilities() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                Core capabilities
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Everything you need
              <br />
              <span className="text-black/25 dark:text-white/25">
                to build what's next.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
              Strategy, design and technology come together to create
              experiences that look exceptional and work even better.
            </p>
          </div>

        </div>

        {/* Capability Grid */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item) => (
            <article
              key={item.number}
              className="group relative min-h-[330px] overflow-hidden bg-white p-7 transition-all duration-500 hover:bg-black dark:bg-black dark:hover:bg-white sm:p-9"
            >

              {/* Number */}
              <div className="flex items-start justify-between">

                <span className="text-xs font-medium text-black/30 transition-colors duration-500 group-hover:text-white/40 dark:text-white/30 dark:group-hover:text-black/40">
                  {item.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 dark:border-white/10 dark:group-hover:border-black/20 dark:group-hover:bg-black/10">
                  <ArrowUpRight
                    size={17}
                    className="text-black/50 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white dark:text-white/50 dark:group-hover:text-black"
                  />
                </div>

              </div>

              {/* Keyword */}
              <div className="absolute right-8 top-24 text-[9px] font-medium tracking-[0.3em] text-black/10 transition-colors duration-500 group-hover:text-white/10 dark:text-white/10 dark:group-hover:text-black/10">
                {item.keyword}
              </div>

              {/* Content */}
              <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9">

                <h3 className="text-3xl font-medium tracking-[-0.045em] text-black transition-colors duration-500 group-hover:text-white dark:text-white dark:group-hover:text-black sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-black/45 transition-colors duration-500 group-hover:text-white/60 dark:text-white/40 dark:group-hover:text-black/55">
                  {item.description}
                </p>

              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-700 group-hover:w-full dark:bg-black" />

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-lg text-sm leading-6 text-black/40 dark:text-white/35">
            From the first idea to the final experience, every capability
            works together as one connected system.
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-2 text-sm font-medium"
          >
            Start a conversation

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Capabilities;