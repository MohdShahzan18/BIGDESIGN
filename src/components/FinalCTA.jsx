import { ArrowUpRight } from "lucide-react";

function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-28 text-white sm:py-40"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-3xl" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">

        <p className="text-xs uppercase tracking-[0.3em] text-white/35">
          Ready when you are
        </p>

        <h2 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          Have an idea
          <br />
          <span className="text-white/30">
            worth experiencing?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
          Tell us what you want to improve and we'll turn it into a
          practical digital experience built around your goals.
        </p>

        <a
          href="mailto:hello@bigdesign.com"
          className="group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
        >
          Let's talk

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </a>

      </div>
    </section>
  );
}

export default FinalCTA;