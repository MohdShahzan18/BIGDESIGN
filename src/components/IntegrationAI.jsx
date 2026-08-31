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

function IntegrationAI() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= INTEGRATION ================= */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
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

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 dark:text-white/45 sm:text-lg">
              Your digital experience shouldn't live in isolation. We
              design the integration layer around your existing tools,
              platforms and internal systems.
            </p>
          </div>

        </div>

        {/* Integration visual */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-black/10 bg-black text-white dark:border-white/10">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />

          <div className="relative p-7 sm:p-10 lg:p-14">

            <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6">

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  Connected ecosystem
                </p>

                <p className="mt-2 text-sm text-white/45">
                  One experience. Multiple systems.
                </p>
              </div>

              <Cloud size={22} className="text-white/40" />

            </div>

            {/* Diagram */}
            <div className="relative mx-auto mt-16 max-w-5xl">

              {/* Desktop connector */}
              <div className="absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-white/10 lg:block" />

              <div className="grid gap-8 lg:grid-cols-[1fr_220px_1fr] lg:items-center">

                {/* Left systems */}
                <div className="grid grid-cols-2 gap-3">

                  {integrations.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:bg-white/[0.08]"
                    >
                      <p className="text-xs text-white/55">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Center */}
                <div className="relative z-10 flex aspect-square items-center justify-center rounded-full border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl">

                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10">

                    <div className="text-center">

                      <Database
                        size={24}
                        className="mx-auto mb-3 text-white/60"
                      />

                      <p className="text-xs uppercase tracking-[0.15em] text-white/35">
                        Integration
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        API Layer
                      </p>

                    </div>

                  </div>

                </div>

                {/* Right */}
                <div className="relative z-10 rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-xl">

                  <Cloud
                    size={24}
                    className="mb-5 text-white/50"
                  />

                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Experience
                  </p>

                  <h3 className="mt-2 text-2xl font-medium">
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
            <div className="mt-14 flex flex-wrap gap-2 border-t border-white/10 pt-7">

              {integrations.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/40"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>


        {/* ================= SECURITY ================= */}

        <div className="mt-32 grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                Security & scalability
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Built to hold up
              <br />
              <span className="text-black/25 dark:text-white/25">
                under real load.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-black/50 dark:text-white/45">
              Security, access control and scalability should be part of
              the architecture from the beginning—not something added
              after launch.
            </p>

          </div>


          {/* Security cards */}
          <div className="grid gap-3 sm:grid-cols-2">

            <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">

              <ShieldCheck
                size={22}
                className="text-black/50 dark:text-white/50"
              />

              <h3 className="mt-12 text-lg font-medium">
                Role-based access
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/45 dark:text-white/40">
                Give the right people access to the right information
                and workflows.
              </p>

            </div>

            <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">

              <LockKeyhole
                size={22}
                className="text-black/50 dark:text-white/50"
              />

              <h3 className="mt-12 text-lg font-medium">
                Data protection
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/45 dark:text-white/40">
                Protect sensitive information with secure data flows
                and encryption.
              </p>

            </div>

            <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">

              <Database
                size={22}
                className="text-black/50 dark:text-white/50"
              />

              <h3 className="mt-12 text-lg font-medium">
                Audit logging
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/45 dark:text-white/40">
                Keep visibility across important system activity and
                operations.
              </p>

            </div>

            <div className="rounded-2xl border border-black/10 p-6 dark:border-white/10">

              <Cloud
                size={22}
                className="text-black/50 dark:text-white/50"
              />

              <h3 className="mt-12 text-lg font-medium">
                Horizontal scale
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/45 dark:text-white/40">
                Create infrastructure that can grow with increasing
                traffic and demand.
              </p>

            </div>

          </div>

        </div>


        {/* ================= AI ================= */}

        <div className="mt-32 overflow-hidden rounded-3xl border border-black/10 bg-black text-white dark:border-white/10">

          <div className="relative p-7 sm:p-10 lg:p-14">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.07] blur-3xl" />

            <div className="relative">

              <div className="flex items-center gap-3">

                <Sparkles size={17} className="text-white/50" />

                <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                  AI & automation
                </span>

              </div>

              <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.2fr]">

                <div>

                  <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                    Where intelligence
                    <br />
                    compounds value.
                  </h2>

                  <p className="mt-7 max-w-lg text-base leading-7 text-white/45">
                    Once the foundation is live, intelligent automation
                    can help teams move faster, discover patterns and
                    create better digital experiences.
                  </p>

                  <a
                    href="#contact"
                    className="group mt-9 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Explore AI possibilities

                    <ArrowUpRight
                      size={16}
                      className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>

                </div>


                {/* AI cards */}
                <div className="grid gap-3">

                  {aiFeatures.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:bg-white/[0.07]"
                      >

                        <div className="flex gap-5">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10">
                            <Icon
                              size={18}
                              className="text-white/50"
                            />
                          </div>

                          <div>

                            <div className="flex items-center gap-3">

                              <span className="text-[10px] text-white/25">
                                0{index + 1}
                              </span>

                              <h3 className="font-medium">
                                {feature.title}
                              </h3>

                            </div>

                            <p className="mt-3 text-sm leading-6 text-white/40">
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