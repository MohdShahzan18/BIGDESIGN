import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can 3D Design be tailored to our existing technology and team?",
    answer:
      "Yes. The experience can be designed around your existing technology stack, internal team, external vendors or a combination of all three.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. BigDesign is positioned for international digital delivery and can work with teams across different regions and time zones.",
  },
  {
    question: "How do you define scope and milestones?",
    answer:
      "Projects are structured around clear goals, technical requirements and measurable milestones so progress remains visible throughout delivery.",
  },
  {
    question: "Can you continue after launch?",
    answer:
      "Yes. The work can continue beyond launch through optimization, new features, performance improvements and ongoing digital growth.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="bg-white py-28 text-black transition-colors duration-500 dark:bg-black dark:text-white sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Heading */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-black/30 dark:bg-white/30" />

              <span className="text-xs uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                Frequently asked
              </span>
            </div>

            <h2 className="mt-7 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Questions teams
              <br />
              <span className="text-black/25 dark:text-white/25">
                usually ask.
              </span>
            </h2>
          </div>

          {/* Questions */}
          <div className="border-t border-black/10 dark:border-white/10">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-black/10 dark:border-white/10"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="text-base font-medium tracking-[-0.01em] sm:text-lg">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 dark:border-white/10 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus size={17} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-7"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-sm leading-7 text-black/50 dark:text-white/40">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;