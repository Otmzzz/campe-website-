import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Solutions() {
  const solutionAreas = [
    {
      icon: Workflow,
      eyebrow: '01 / Operations',
      title: 'Workflow & Operations Structuring',
      pressure:
        'Fragmented processes, unclear handoffs, manual tracking, and work that depends too heavily on informal follow-ups.',
      outcome:
        'CampE defines how work should move across teams, roles, approvals, and operating checkpoints.',
      focus: [
        'Workflow mapping and role clarity',
        'Handoff, approval, and escalation paths',
        'Practical operating standards for daily execution',
      ],
    },
    {
      icon: ShieldCheck,
      eyebrow: '02 / Governance',
      title: 'Governance & Control Systems',
      pressure:
        'Approval paths, accountability, documentation, and execution discipline are often inconsistent as teams grow.',
      outcome:
        'CampE structures control points so leaders can see ownership, enforce discipline, and reduce operational drift.',
      focus: [
        'Accountability and approval design',
        'Documentation and control requirements',
        'Execution discipline across teams and locations',
      ],
    },
    {
      icon: BarChart3,
      eyebrow: '03 / Visibility',
      title: 'Data Visibility & Decision Intelligence',
      pressure:
        'Reports, spreadsheets, operating records, and KPI signals are scattered across tools and people.',
      outcome:
        'CampE designs reporting layers and dashboards that give leadership a clearer view of movement, risk, and performance.',
      focus: [
        'Dashboard and KPI architecture',
        'Management reporting layers',
        'Decision signals from operational data',
      ],
    },
    {
      icon: Network,
      eyebrow: '04 / Coordination',
      title: 'Emergency & Field Coordination Systems',
      pressure:
        'Incident flow, field updates, escalation, and resolution tracking become difficult without a structured coordination model.',
      outcome:
        'CampE helps define response workflows, visibility layers, and lifecycle tracking for time-sensitive operations.',
      focus: [
        'Incident intake and escalation flow',
        'Coordination visibility for field teams',
        'Status, resolution, and lifecycle tracking',
      ],
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-y border-slate-200 bg-[#f8fbfd] px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Solution Areas
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.45rem] lg:leading-[1.05]">
                Systems work for organizations that need control,
                <span className="block text-slate-500">not another tool layer.</span>
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE structures the operating model behind the technology: how
              work moves, who owns decisions, what data leadership needs, and
              how coordination stays visible when pressure increases.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {solutionAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal key={area.title} delay={index * 0.06}>
                <div className="group flex h-full flex-col rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl sm:p-7 lg:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-[#07111f] text-cyan-200 shadow-sm">
                      <Icon size={19} />
                    </div>

                    <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {area.eyebrow}
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-xl text-2xl font-semibold tracking-[-0.025em] text-[#07111f] sm:text-3xl">
                    {area.title}
                  </h3>

                  <div className="mt-6 grid gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Designed for
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-500 sm:text-[15px]">
                        {area.pressure}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700/70">
                        CampE structures
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-[15px]">
                        {area.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {area.focus.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-700" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#finalcta"
                    className="group/link mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#07111f] transition hover:text-cyan-700"
                  >
                    Discuss this solution area
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
