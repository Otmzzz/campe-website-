import { Compass, FileText, Gauge, LineChart, Settings2 } from 'lucide-react';
import { Reveal } from './Reveal';

export function Process() {
  const stages = [
    {
      icon: Compass,
      stage: '01',
      title: 'Diagnose',
      summary:
        'Understand the operating reality before recommending a structure or platform.',
      work: [
        'Pain points and workflow gaps',
        'Ownership and responsibility gaps',
        'Data gaps and control risks',
      ],
    },
    {
      icon: FileText,
      stage: '02',
      title: 'Structure',
      summary:
        'Design the operating model that the system layer must support.',
      work: [
        'Workflow and approval path',
        'Responsibility matrix',
        'Data pointers and reporting logic',
      ],
    },
    {
      icon: Settings2,
      stage: '03',
      title: 'Implement',
      summary:
        'Build or configure the practical layer that helps teams execute the model.',
      work: [
        'System layer and forms',
        'Dashboards and documentation',
        'Operating controls',
      ],
    },
    {
      icon: LineChart,
      stage: '04',
      title: 'Stabilize',
      summary:
        'Test usage, document routines, monitor adoption, and refine before scale.',
      work: [
        'User testing and documentation',
        'Adoption monitoring',
        'Execution refinement',
      ],
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111f,#0b1728,#10243d)]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/58">
                  Engagement Model
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-5xl lg:text-[3.15rem]">
                From diagnosis to stable operating rhythm.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg lg:justify-self-end">
              CampE works through a disciplined implementation path: understand
              the operating problem, structure the model, configure the working
              layer, and stabilize adoption before expanding scope.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <Reveal key={stage.title} delay={index * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/15 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100">
                      <Icon size={18} />
                    </div>

                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/38">
                      Stage {stage.stage}
                    </span>
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold leading-tight tracking-[-0.01em] text-white">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/56 sm:text-[15px]">
                    {stage.summary}
                  </p>

                  <div className="mt-7 space-y-3">
                    {stage.work.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-white/66"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/75" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-5 rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-cyan-100">
                <Gauge size={18} />
              </div>

              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-200/68">
                  Implementation discipline
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.01em] text-white">
                  Change is treated as an operating system, not a handoff.
                </h3>
              </div>
            </div>

            <p className="text-base leading-8 text-white/62">
              Each stage is designed to leave the organization with clearer
              routines, documented decisions, measurable adoption, and a system
              layer that supports how the work should actually run.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
