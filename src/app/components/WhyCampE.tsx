import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  Layers3,
  Network,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function WhyCampE() {
  const principles = [
    {
      icon: Network,
      title: 'System before software',
      description:
        'We first understand the operating model, workflow constraints, ownership lines, and day-to-day decision points.',
    },
    {
      icon: ClipboardCheck,
      title: 'Governance before scale',
      description:
        'Growth needs rules of work: approvals, documentation, accountability, and control points that can be followed.',
    },
    {
      icon: Gauge,
      title: 'Visibility before automation',
      description:
        'Automation works better when leaders already know what should be measured, reviewed, escalated, and acted on.',
    },
    {
      icon: Layers3,
      title: 'Execution before expansion',
      description:
        'We focus on the routines, responsibilities, and management signals needed to make change hold in daily operations.',
    },
  ];

  const workingRules = [
    'Diagnose the operating reality',
    'Design only what the organization can adopt',
    'Use technology to reinforce discipline',
  ];

  return (
    <section
      id="why-campe"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Consulting Principles
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
                CampE designs from operating discipline,
                <span className="block text-slate-500">not tool preference.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              The work starts with how the organization actually functions:
              decisions, responsibilities, handoffs, evidence, and the routines
              needed to keep execution consistent.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <Reveal key={principle.title} delay={index * 0.05}>
                <div className="h-full rounded-[1.6rem] border border-slate-200 bg-slate-50 p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#07111f] text-cyan-200">
                      <Icon size={18} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-[#07111f]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-8 grid gap-5 rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700/70">
                Working standard
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#07111f]">
                Practical enough to adopt. Structured enough to endure.
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {workingRules.map((rule) => (
                <div
                  key={rule}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium leading-6 text-slate-600"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-700" />
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <a
            href="#solutions"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#07111f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:bg-[#10243d]"
          >
            Review solution areas
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
