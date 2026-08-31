import { ArrowUpRight, Play } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-28 text-black transition-colors duration-500 dark:bg-black dark:text-white">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(currentColor 1px, transparent 1px),
            linear-gradient(90deg, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.04] blur-3xl dark:bg-white/[0.04]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div>

            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-black/45 dark:text-white/45">
                BigDesign / 3D Design
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              We build
              <br />

              <span className="text-black/25 dark:text-white/25">
                digital
              </span>

              <br />

              experiences.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-black/55 dark:text-white/50 sm:text-lg">
              From immersive 3D experiences to AR, VR and interactive
              digital products, we turn complex ideas into experiences
              people remember.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <a
                href="#contact"
                className="group flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:opacity-85 dark:bg-white dark:text-black"
              >
                Start a Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="group flex items-center gap-3 rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium text-black/70 transition duration-300 hover:border-black/30 hover:text-black dark:border-white/15 dark:text-white/70 dark:hover:border-white/30 dark:hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15 dark:border-white/20">
                  <Play size={10} fill="currentColor" />
                </span>

                Explore our work
              </a>

            </div>

            {/* Stats */}
            <div className="mt-16 flex flex-wrap gap-x-10 gap-y-7 border-t border-black/10 pt-7 dark:border-white/10">

              <div>
                <p className="text-xl font-semibold tracking-tight">
                  Global
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/35">
                  Delivery
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold tracking-tight">
                  Multi
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/35">
                  Industry
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold tracking-tight">
                  Design × Tech
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/35">
                  Approach
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT VISUAL */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[540px] items-center justify-center">

            {/* Outer circle */}
            <div className="absolute h-[90%] w-[90%] rounded-full border border-black/10 dark:border-white/10" />

            {/* Second circle */}
            <div className="absolute h-[72%] w-[72%] rounded-full border border-black/10 dark:border-white/10" />

            {/* Dashed rotating ring */}
            <div className="absolute h-[82%] w-[82%] animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-black/20 dark:border-white/20" />

            {/* Small orbit */}
            <div className="absolute h-[55%] w-[55%] animate-[spin_12s_linear_infinite_reverse] rounded-full border border-black/10 dark:border-white/10" />

            {/* Main 3D object */}
            <div className="relative h-[42%] w-[42%] rotate-12 rounded-[28%] border border-black/20 bg-gradient-to-br from-black/[0.12] via-black/[0.03] to-transparent shadow-[0_0_100px_rgba(0,0,0,0.08)] backdrop-blur-sm dark:border-white/25 dark:from-white/[0.18] dark:via-white/[0.05] dark:to-transparent dark:shadow-[0_0_100px_rgba(255,255,255,0.08)]">

              {/* Inner shape */}
              <div className="absolute inset-[12%] rounded-[25%] border border-black/10 dark:border-white/15" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_30px_rgba(0,0,0,0.4)] dark:bg-white dark:shadow-[0_0_30px_rgba(255,255,255,0.8)]" />

            </div>

            {/* Floating tags */}
            <div className="absolute right-[2%] top-[17%] rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black/50 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:text-white/50">
              WebGL
            </div>

            <div className="absolute bottom-[18%] left-[2%] rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black/50 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:text-white/50">
              AR / VR
            </div>

            <div className="absolute bottom-[7%] right-[12%] rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black/50 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.05] dark:text-white/50">
              3D
            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black/30 dark:text-white/30 sm:left-8 lg:left-10">
          <span className="h-8 w-px bg-black/20 dark:bg-white/20" />
          Scroll to explore
        </div>

      </div>
    </section>
  );
}

export default Hero;