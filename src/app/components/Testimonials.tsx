import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Testimonials() {
  const outcomes = [
    {
      icon: Workflow,
      title: 'Cleaner workflow ownership',
      description:
        'Teams know where work starts, who owns the next step, and what needs follow-through.',
      signals: [
        'Fewer unclear handoffs',
        'Clearer responsibility paths',
        'Better follow-through',
      ],
    },
    {
      icon: BarChart3,
      title: 'Stronger management visibility',
      description:
        'Leadership reviews the right operating signals instead of waiting for scattered manual updates.',
      signals: [
        'Better dashboard signals',
        'Faster review cycles',
        'Clearer KPI movement',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Better governance discipline',
      description:
        'Approvals, documentation, and accountability become part of the operating routine.',
      signals: [
        'Documented approvals',
        'Stronger accountability',
        'Reduced execution drift',
      ],
    },
    {
      icon: Layers3,
      title: 'More stable implementation',
      description:
        'Systems are tested against real use, documented for teams, and prepared for gradual scale.',
      signals: [
        'Tested workflows',
        'Documented controls',
        'Scalable operating routines',
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-28">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Operational Outcomes
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
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

        <div className="mt-14 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm">
          {outcomes.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="grid gap-5 border-b border-slate-200 px-5 py-6 last:border-b-0 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-7">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07111f] text-cyan-200">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Outcome {String(index + 1).padStart(2, '0')}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#07111f]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {item.signals.map((signal) => (
                      <div
                        key={signal}
                        className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-700" />
                        {signal}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-5 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6 lg:flex-row lg:items-center lg:justify-between">
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
