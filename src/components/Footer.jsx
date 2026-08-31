import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Build: [
    "Custom Software",
    "Web Development",
    "AI & Automation",
    "Technology",
  ],
  Grow: [
    "International SEO",
    "Digital Marketing",
    "Lead Generation",
    "Free Audit",
  ],
  Company: [
    "Our Story",
    "Leadership",
    "Careers",
    "Contact",
  ],
};

function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ================= TOP ================= */}
        <div className="grid gap-14 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>

            <a
              href="#"
              className="text-2xl font-black tracking-[-0.06em]"
            >
              B<span className="text-white/35">BIG</span>DESIGN
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/40">
              International digital partner for software, websites,
              AI automation, SEO and measurable growth.
            </p>

            <a
              href="#contact"
              className="group mt-8 flex w-fit items-center gap-2 text-sm font-medium text-white"
            >
              Let's talk

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>


          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>

              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                {title}
              </p>

              <div className="mt-6 flex flex-col gap-4">

                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="w-fit text-sm text-white/50 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link}
                  </a>
                ))}

              </div>

            </div>
          ))}

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-7 py-7 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} BigDesign Software Technologies.
            All rights reserved.
          </p>


          {/* Social */}
          <div className="flex items-center gap-6">

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-xs font-medium tracking-wide text-white/35 transition duration-300 hover:text-white"
            >
              IN
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-xs font-medium tracking-wide text-white/35 transition duration-300 hover:text-white"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="X"
              className="text-xs font-medium tracking-wide text-white/35 transition duration-300 hover:text-white"
            >
              X
            </a>

          </div>


          {/* Legal */}
          <div className="flex gap-5 text-xs text-white/30">

            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Security
            </a>

            <a
              href="#"
              className="transition duration-300 hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;