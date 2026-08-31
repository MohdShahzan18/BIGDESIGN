import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function About3D() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Top label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

          <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
            What is 3D Design?
          </span>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
              The short explanation
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              More than
              <br />
              <span className="text-black/25 dark:text-white/25">
                just visuals.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-black/55 dark:text-white/50 sm:text-lg">
              3D Design combines creative thinking, technology and
              engineering to create digital experiences that are
              immersive, useful and built to work as part of a wider
              business ecosystem.
            </p>

            <div className="mt-10 flex items-center gap-3 text-sm font-medium">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10">
                <ArrowDownRight size={17} />
              </span>

              Explore the difference
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-end">

            <div className="border-t border-black/10 pt-8 dark:border-white/10">

              <p className="text-xs uppercase tracking-[0.2em] text-black/35 dark:text-white/35">
                Why it matters
              </p>

              <p className="mt-6 max-w-xl text-2xl leading-9 tracking-[-0.025em] text-black/70 dark:text-white/65 sm:text-3xl sm:leading-10">
                Businesses that treat digital experience as core
                infrastructure can move faster, integrate better and
                build a foundation that lasts beyond the next release.
              </p>

            </div>

            {/* Mini benefits */}
            <div className="mt-12 grid grid-cols-2 border-t border-black/10 dark:border-white/10">

              <div className="border-r border-black/10 py-7 pr-6 dark:border-white/10">
                <span className="text-3xl font-semibold tracking-[-0.05em]">
                  01
                </span>

                <p className="mt-3 text-sm text-black/45 dark:text-white/40">
                  Immersive experiences
                </p>
              </div>

              <div className="py-7 pl-6">
                <span className="text-3xl font-semibold tracking-[-0.05em]">
                  02
                </span>

                <p className="mt-3 text-sm text-black/45 dark:text-white/40">
                  Connected technology
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom visual statement */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-black/10 bg-black p-8 text-white dark:border-white/10 sm:p-12 lg:p-16">

          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Design × Technology × Growth
              </p>

              <h3 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Experience is the
                <br />
                new interface.
              </h3>
            </div>

            <a
              href="#services"
              className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
            >
              See what we build

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About3D;