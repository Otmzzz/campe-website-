import {
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Network,
  ServerCog,
  Store,
  Truck,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Industries() {
  const primaryEnvironments = [
    {
      icon: Store,
      label: 'Branch operations',
      title: 'Retail and multi-branch operations',
      description:
        'For organizations that need stronger tracking across sales, inventory, branch activity, approvals, and location performance.',
      useCases: ['Branch visibility', 'Stock and movement tracking', 'Management reporting'],
    },
    {
      icon: Landmark,
      label: 'Administration',
      title: 'Governance and administrative workflows',
      description:
        'For offices and institutions that manage requests, documentation, approvals, accountability, and recurring administrative work.',
      useCases: ['Approval routing', 'Documented accountability', 'Service request flow'],
    },
    {
      icon: Network,
      label: 'Coordination',
      title: 'Emergency and field coordination',
      description:
        'For teams that need structured intake, escalation, field updates, status visibility, and resolution tracking under pressure.',
      useCases: ['Incident lifecycle', 'Field status updates', 'Escalation control'],
    },
    {
      icon: ServerCog,
      label: 'Technical operations',
      title: 'Managed services and technical operations',
      description:
        'For service teams that need cleaner ticket flow, asset ownership, maintenance routines, reporting, and operating controls.',
      useCases: ['Ticket and task flow', 'Asset responsibility', 'Support performance signals'],
    },
  ];

  const secondaryEnvironments = [
    { icon: GraduationCap, label: 'Education' },
    { icon: HeartPulse, label: 'Healthcare support' },
    { icon: Truck, label: 'Logistics' },
    { icon: Building2, label: 'Local enterprise' },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Operating Environments
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
                Built for environments where work moves across people, places, and pressure.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE is useful where coordination breaks down, records scatter,
              approvals slow execution, or leadership needs a more dependable
              view of daily operations.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {primaryEnvironments.map((environment, index) => {
            const Icon = environment.icon;

            return (
              <Reveal key={environment.title} delay={index * 0.05}>
                <div className="group h-full rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#07111f] text-cyan-200">
                        <Icon size={19} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700/70">
                          {environment.label}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#07111f]">
                          {environment.title}
                        </h3>
                      </div>
                    </div>

                    <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-[15px]">
                    {environment.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {environment.useCases.map((useCase) => (
                      <div
                        key={useCase}
                        className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 size={14} className="mt-1 shrink-0 text-cyan-700" />
                        {useCase}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#finalcta"
                    className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#07111f] transition hover:text-cyan-700"
                  >
                    Discuss this environment
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

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-[1.7rem] border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Secondary fit
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#07111f]">
                  Also applicable where operations need better structure.
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {secondaryEnvironments.map((environment) => {
                  const Icon = environment.icon;

                  return (
                    <div
                      key={environment.label}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600"
                    >
                      <Icon size={16} className="shrink-0 text-cyan-700" />
                      {environment.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
