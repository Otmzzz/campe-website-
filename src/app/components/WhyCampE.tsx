import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function WhyCampE() {
  const principles = [
    {
      title: 'System before software',
      description:
        'We first understand the operating model, workflow constraints, ownership lines, and day-to-day decision points.',
    },
    {
      title: 'Governance before scale',
      description:
        'Growth needs rules of work: approvals, documentation, accountability, and control points that can be followed.',
    },
    {
      title: 'Visibility before automation',
      description:
        'Automation works better when leaders already know what should be measured, reviewed, escalated, and acted on.',
    },
    {
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
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
            <div className="lg:pt-16">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Consulting Principles
              </p>

              <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                The work starts with how the organization actually functions:
                decisions, responsibilities, handoffs, evidence, and the routines
                needed to keep execution consistent.
              </p>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:justify-self-end lg:text-[3.15rem]">
              CampE designs from operating discipline,
              <span className="block text-slate-500">not tool preference.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-14 gap-y-10 border-t border-slate-200 pt-8 lg:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.05}>
              <div
                className={`border-b border-slate-200 pb-8 ${
                  index % 2 === 1 ? 'lg:pt-10' : ''
                }`}
              >
                <h3 className="text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-3xl">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 max-w-5xl">
            <p className="text-base leading-8 text-slate-600">
              <span className="font-semibold text-[#07111f]">
                Working standard:
              </span>{' '}
              Practical enough to adopt. Structured enough to endure.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {workingRules.join(' / ')}
            </p>
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
