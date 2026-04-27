import { ArrowRight, CalendarCheck, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCTA() {
  const points = [
    'Identify workflow bottlenecks',
    'Clarify dashboard and reporting needs',
    'Map system gaps and control risks',
    'Define the next practical move',
  ];

  return (
    <section
      id="finalcta"
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-140px] h-[460px] w-[460px] rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        <Reveal>
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                    Start With Clarity
                  </span>
                </div>

                <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.55rem] lg:leading-[1.05]">
                  Before adding more tools,
                  <span className="block text-white/55">
                    know where control is breaking.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                  Book a clarity consultation to review your workflow, reporting,
                  system gaps, and the practical improvements that can make your
                  operation easier to manage.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="mailto:contact@campetechnologies.com"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] shadow-xl shadow-black/20 transition hover:bg-cyan-50"
                  >
                    <Mail size={18} />
                    Email CampE
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/campecomputing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    <MessageCircle size={18} />
                    Message on Facebook
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[#07111f]/60 p-6 shadow-2xl shadow-black/20">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                  <CalendarCheck size={24} className="text-cyan-200" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  What the first conversation covers
                </h3>

                <div className="mt-6 space-y-4">
                  {points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm leading-6 text-white/68"
                    >
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-cyan-200" />
                      {point}
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-white/45">
                  No hard selling. The goal is to clarify whether the problem is
                  workflow, data, systems, people coordination, or governance.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}