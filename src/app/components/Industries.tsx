import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

export function Industries() {
  const primaryEnvironments = [
    {
      image: '/environments/retail.png',
      label: 'Branch operations',
      title: 'Retail and multi-branch operations',
      description:
        'For organizations that need stronger tracking across sales, inventory, branch activity, approvals, and location performance.',
      useCases: ['Branch visibility', 'Stock and movement tracking', 'Management reporting'],
    },
    {
      image: '/environments/governance.png',
      label: 'Administration',
      title: 'Governance and administrative workflows',
      description:
        'For offices and institutions that manage requests, documentation, approvals, accountability, and recurring administrative work.',
      useCases: ['Approval routing', 'Documented accountability', 'Service request flow'],
    },
    {
      image: '/environments/emergency.png',
      label: 'Coordination',
      title: 'Emergency and field coordination',
      description:
        'For teams that need structured intake, escalation, field updates, status visibility, and resolution tracking under pressure.',
      useCases: ['Incident lifecycle', 'Field status updates', 'Escalation control'],
    },
    {
      image: '/environments/managed-services.png',
      label: 'Technical operations',
      title: 'Managed services and technical operations',
      description:
        'For service teams that need cleaner ticket flow, asset ownership, maintenance routines, reporting, and operating controls.',
      useCases: ['Ticket and task flow', 'Asset responsibility', 'Support performance signals'],
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Operating Environments
                </span>
              </div>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:text-[3.1rem]">
              Built for environments where work moves across people, places, and pressure.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              CampE is useful where coordination breaks down, records scatter,
              approvals slow execution, or leadership needs a more dependable
              view of daily operations.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {primaryEnvironments.map((environment, index) => {
            return (
              <Reveal key={environment.title} delay={index * 0.05}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20 sm:p-7 lg:h-[440px]">
                  <img
                    src={environment.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/78 to-slate-950/30" />
                  <div className="absolute inset-0 bg-slate-950/10" />

                  <div className="relative z-10 flex h-full max-w-xl flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-200/75">
                        {environment.label}
                      </p>

                      <span className="text-[11px] font-medium tracking-[0.14em] text-white/35">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-[2rem] lg:min-h-[76px]">
                      {environment.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-[15px] lg:min-h-[84px]">
                      {environment.description}
                    </p>

                    <div className="mt-7 space-y-3">
                      {environment.useCases.map((useCase) => (
                        <div
                          key={useCase}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-cyan-200" />
                          {useCase}
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
    </section>
  );
}
