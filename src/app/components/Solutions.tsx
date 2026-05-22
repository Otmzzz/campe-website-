import { Reveal } from './Reveal';

export function Solutions() {
  const solutionAreas = [
    {
      title: 'Workflow & Operations Structuring',
      description:
        'Clarify how work moves across roles, handoffs, approvals, and recurring operating checkpoints so execution is easier to manage.',
    },
    {
      title: 'Governance & Control Systems',
      description:
        'Define accountability, documentation, approval discipline, and control points that keep decisions visible as teams grow.',
    },
    {
      title: 'Data Visibility & Decision Intelligence',
      description:
        'Shape reporting layers, dashboards, and decision signals so leadership can see movement, risk, and performance with less noise.',
    },
    {
      title: 'Emergency & Field Coordination Systems',
      description:
        'Structure incident flow, field updates, escalation, and resolution tracking for operations where timing and coordination matter.',
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-y border-slate-200 bg-[#f8fbfd] px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Solution Areas
              </p>

              <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f] sm:text-5xl lg:text-[3.05rem]">
                Systems work for organizations that need control, not another
                tool layer.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                CampE structures the operating model behind the technology: how
                work moves, who owns decisions, what data leadership needs, and
                how coordination stays visible when pressure increases.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-slate-200">
            {solutionAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.05}>
                <article className="border-b border-slate-200 py-8 sm:py-9">
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#07111f]">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
                    {area.description}
                  </p>

                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
