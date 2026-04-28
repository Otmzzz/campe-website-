import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Gauge,
  LineChart,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Process() {
  const phases = [
    {
      icon: Compass,
      phase: 'Phase 01',
      title: 'Clarify',
      subtitle: 'Understand what is actually happening.',
      desc: 'We diagnose pain points, workflow gaps, scattered data, unclear ownership, and decision delays before recommending any tool.',
      steps: ['Pain point discovery', 'Workflow mapping', 'Role and handoff review'],
    },
    {
      icon: Workflow,
      phase: 'Phase 02',
      title: 'Build',
      subtitle: 'Design the operating system.',
      desc: 'We structure workflows, dashboards, automation logic, AI use cases, and system controls around the real business environment.',
      steps: ['Execution blueprint', 'Dashboard and data design', 'Automation and AI workflow plan'],
    },
    {
      icon: LineChart,
      phase: 'Phase 03',
      title: 'Scale',
      subtitle: 'Make progress measurable.',
      desc: 'We help stabilize usage, define indicators, improve reporting, reduce dependency, and create better leadership visibility.',
      steps: ['User enablement', 'KPI monitoring', 'Continuous improvement loop'],
    },
  ];

  const principles = [
    'Business-first diagnosis',
    'Workflow before software',
    'Controls before scale',
    'Measurement after rollout',
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111f,#0b1728,#10243d)]" />

      <div className="absolute inset-0 opacity-[0.045]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:58px_58px]" />
      </div>

      <div className="absolute left-1/2 top-20 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-[500px] w-[500px] rounded-full bg-blue-500/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                CampE Method
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.65rem] lg:leading-[1.05]">
              Clarify. Build.
              <span className="block text-white/55">Scale with control.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              CampE follows a practical three-phase method that turns scattered
              operations into structured workflows, measurable dashboards, and
              controlled execution.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-white/65 backdrop-blur-xl"
              >
                <CheckCircle2 size={14} className="text-cyan-200/80" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[72px] hidden h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-3">
            {phases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <Reveal key={phase.title} delay={index * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065] sm:p-7">
                    <div className="absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-cyan-300/8 blur-3xl transition group-hover:bg-cyan-300/14" />

                    <div className="relative mb-8 flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100 shadow-sm">
                        <Icon size={18} />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                        {phase.phase}
                      </span>
                    </div>

                    <div className="relative">
                      <h3 className="text-4xl font-semibold tracking-[-0.04em] text-white">
                        {phase.title}
                      </h3>

                      <p className="mt-3 text-lg font-medium text-cyan-100/75">
                        {phase.subtitle}
                      </p>

                      <p className="mt-5 min-h-[120px] text-sm leading-7 text-white/55 sm:text-[15px]">
                        {phase.desc}
                      </p>

                      <div className="mt-7 space-y-3">
                        {phase.steps.map((step) => (
                          <div
                            key={step}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/65"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-200/70" />
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-14 grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100">
                <Gauge size={18} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/70">
                  Method Discipline
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-white">
                  Tools follow the operating logic.
                </h3>
              </div>
            </div>

            <p className="text-base leading-8 text-white/62">
              CampE does not force a platform into the organization. We first
              define how the business should operate, then align the technology,
              dashboards, automation, controls, and training around that structure.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}