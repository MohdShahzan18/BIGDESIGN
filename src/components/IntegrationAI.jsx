import {
  ArrowUpRight,
  Bot,
  Cloud,
  Database,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const integrations = [
  "CRM",
  "ERP",
  "Data Warehouse",
  "Identity Provider",
  "Internal APIs",
];

const aiFeatures = [
  {
    icon: Sparkles,
    title: "AI-assisted content",
    text: "Use intelligent workflows to create, organize and improve digital content faster.",
  },
  {
    icon: Database,
    title: "Predictive insights",
    text: "Turn business data into useful signals, recommendations and predictive experiences.",
  },
  {
    icon: Bot,
    title: "Automated workflows",
    text: "Reduce repetitive work with AI-assisted processes built around your existing systems.",
  },
];

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Role-based access",
    text: "Give the right people access to the right information and workflows.",
  },
  {
    icon: LockKeyhole,
    title: "Data protection",
    text: "Protect sensitive information with secure data flows and encryption.",
  },
  {
    icon: Database,
    title: "Audit logging",
    text: "Keep visibility across important system activity and operations.",
  },
  {
    icon: Cloud,
    title: "Horizontal scale",
    text: "Create infrastructure that can grow with increasing traffic and demand.",
  },
];

function IntegrationAI() {
  return (
    <section
      id="ai"
      className="relative w-full overflow-hidden bg-white py-20 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= INTEGRATION ================= */}

        <div className="grid w-full gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black/30 dark:bg-white/30 sm:w-10" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-xs sm:tracking-[0.25em]">
                Integration
              </span>
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Fits into
              <br />
              <span className="text-black/25 dark:text-white/25">
                what you already run.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-black/50 dark:text-white/45 sm:mt-7 sm:text-lg sm:leading-7">
              Your digital experience shouldn't live in isolation. We
              design the integration layer around your existing tools,
              platforms and internal systems.
            </p>
          </div>

        </div>


        {/* ================= INTEGRATION VISUAL ================= */}

        <div className="relative mt-14 w-full overflow-hidden rounded-3xl border border-black/10 bg-black text-white dark:border-white/10 sm:mt-20">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative w-full p-5 sm:p-10 lg:p-14">

            {/* Header */}
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 sm:pb-6">

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs sm:tracking-[0.25em]">
                  Connected ecosystem
                </p>

                <p className="mt-2 text-xs text-white/45 sm:text-sm">
                  One experience. Multiple systems.
                </p>
              </div>

              <Cloud
                size={20}
                className="shrink-0 text-white/40 sm:h-[22px] sm:w-[22px]"
              />

            </div>


            {/* ================= MOBILE / DESKTOP DIAGRAM ================= */}

            <div className="relative mx-auto mt-10 w-full max-w-5xl sm:mt-16">

              {/* Desktop connector */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-white/10 lg:block" />


              <div className="grid w-full gap-8 lg:grid-cols-[1fr_220px_1fr] lg:items-center">

                {/* LEFT SYSTEMS */}

                <div className="grid w-full grid-cols-1 gap-3 min-[400px]:grid-cols-2">

                  {integrations.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:bg-white/[0.08]"
                    >
                      <p className="truncate text-xs text-white/55">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>


                {/* CENTER API */}

                <div className="relative z-10 mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-full border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl sm:max-w-[260px] lg:max-w-[220px]">

                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10">

                    <div className="text-center">

                      <Database
                        size={22}
                        className="mx-auto mb-3 text-white/60"
                      />

                      <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 sm:text-xs">
                        Integration
                      </p>

                      <p className="mt-1 text-sm font-medium sm:text-base">
                        API Layer
                      </p>

                    </div>

                  </div>

                </div>


                {/* RIGHT EXPERIENCE */}

                <div className="relative z-10 w-full min-w-0 rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-7">

                  <Cloud
                    size={23}
                    className="mb-5 text-white/50"
                  />

                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 sm:text-xs">
                    Experience
                  </p>

                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                    Your digital ecosystem
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    Connected products, experiences and data working
                    together.
                  </p>

                </div>

              </div>

            </div>


            {/* Integration tags */}

            <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6 sm:mt-14 sm:pt-7">

              {integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] text-white/40 sm:text-[10px]"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>


        {/* ================= SECURITY ================= */}

        <div className="mt-24 grid w-full gap-12 lg:mt-32 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* Heading */}

          <div>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-black/30 dark:bg-white/30 sm:w-10" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 sm:text-xs sm:tracking-[0.25em]">
                Security & scalability
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:mt-7 sm:text-6xl">
              Built to hold up
              <br />
              <span className="text-black/25 dark:text-white/25">
                under real load.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-6 text-black/50 dark:text-white/45 sm:mt-7 sm:text-lg sm:leading-7">
              Security, access control and scalability should be part of
              the architecture from the beginning—not something added
              after launch.
            </p>

          </div>


          {/* Security cards */}

          <div className="grid w-full grid-cols-1 gap-3 min-[450px]:grid-cols-2">

            {securityFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="min-w-0 rounded-2xl border border-black/10 p-5 dark:border-white/10 sm:p-6"
                >

                  <Icon
                    size={21}
                    className="text-black/50 dark:text-white/50"
                  />

                  <h3 className="mt-10 text-base font-medium sm:mt-12 sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-black/45 dark:text-white/40 sm:text-sm sm:leading-6">
                    {feature.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>


        {/* ================= AI ================= */}

        <div className="mt-24 w-full overflow-hidden rounded-3xl border border-black/10 bg-black text-white dark:border-white/10 sm:mt-32">

          <div className="relative w-full p-5 sm:p-10 lg:p-14">

            {/* Glow */}

            <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-white/[0.07] blur-3xl sm:h-[500px] sm:w-[500px]" />

            <div className="relative">

              {/* Label */}

              <div className="flex items-center gap-3">

                <Sparkles
                  size={16}
                  className="shrink-0 text-white/50"
                />

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs sm:tracking-[0.25em]">
                  AI & automation
                </span>

              </div>


              {/* Content */}

              <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">

                {/* Text */}

                <div>

                  <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                    Where intelligence
                    <br />
                    compounds value.
                  </h2>

                  <p className="mt-6 max-w-lg text-sm leading-6 text-white/45 sm:mt-7 sm:text-base sm:leading-7">
                    Once the foundation is live, intelligent automation
                    can help teams move faster, discover patterns and
                    create better digital experiences.
                  </p>

                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Explore AI possibilities

                    <ArrowUpRight
                      size={16}
                      className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                </div>


                {/* AI Cards */}

                <div className="grid w-full gap-3">

                  {aiFeatures.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="w-full min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-500 hover:bg-white/[0.07] sm:p-6"
                      >

                        <div className="flex gap-4 sm:gap-5">

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 sm:h-11 sm:w-11">

                            <Icon
                              size={17}
                              className="text-white/50"
                            />

                          </div>

                          <div className="min-w-0">

                            <div className="flex items-center gap-3">

                              <span className="text-[10px] text-white/25">
                                0{index + 1}
                              </span>

                              <h3 className="text-sm font-medium sm:text-base">
                                {feature.title}
                              </h3>

                            </div>

                            <p className="mt-3 text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                              {feature.text}
                            </p>

                          </div>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default IntegrationAI;