import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function Testimonials() {
  const outcomes = [
    {
      title: 'Cleaner workflow ownership',
      description:
        'Teams know where work starts, who owns the next step, and what needs follow-through.',
      signals:
        'Fewer unclear handoffs, clearer responsibility paths, better follow-through.',
    },
    {
      title: 'Stronger management visibility',
      description:
        'Leadership reviews the right operating signals instead of waiting for scattered manual updates.',
      signals:
        'Better dashboard signals, faster review cycles, clearer KPI movement.',
    },
    {
      title: 'Better governance discipline',
      description:
        'Approvals, documentation, and accountability become part of the operating routine.',
      signals:
        'Documented approvals, stronger accountability, reduced execution drift.',
    },
    {
      title: 'More stable implementation',
      description:
        'Systems are tested against real use, documented for teams, and prepared for gradual scale.',
      signals:
        'Tested workflows, documented controls, scalable operating routines.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-28">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Operational Outcomes
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:text-[3.1rem]">
                The work should leave better operating evidence behind.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE does not present these as client claims. They are the
              practical signals the work is designed to produce when structure,
              adoption, and management routines are treated seriously.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-10 lg:space-y-12">
          {outcomes.map((item, index) => {
            const isOffset = index % 2 === 1;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className={`border-t border-slate-200 pt-7 ${
                    isOffset
                      ? 'lg:ml-auto lg:mr-10 lg:max-w-3xl'
                      : 'lg:ml-10 lg:max-w-3xl'
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Outcome {String(index + 1).padStart(2, '0')}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    <span className="font-semibold text-[#07111f]">
                      Signals:
                    </span>{' '}
                    {item.signals}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Outcomes depend on operational adoption, leadership follow-through,
              and the discipline to keep the model current after rollout.
            </p>

            <a
              href="#finalcta"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#07111f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#10243d]"
            >
              Discuss your operations
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
