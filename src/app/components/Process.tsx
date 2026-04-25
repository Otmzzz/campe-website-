import {
  Search,
  Network,
  Workflow,
  Wrench,
  GraduationCap,
  LineChart,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Understand Pain Points',
      desc: 'We identify what is slowing the organization down, where confusion happens, and what decisions need better visibility.',
    },
    {
      icon: Network,
      number: '02',
      title: 'Diagnose System Gaps',
      desc: 'We check workflows, data sources, roles, tools, risks, and operational bottlenecks.',
    },
    {
      icon: Workflow,
      number: '03',
      title: 'Design Clear Workflow',
      desc: 'We convert scattered processes into structured flows, responsibilities, dashboards, and control points.',
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Deploy Tools & Automation',
      desc: 'We apply the right mix of AI, analytics, cloud, cybersecurity, and system tools based on actual needs.',
    },
    {
      icon: GraduationCap,
      number: '05',
      title: 'Train the Team',
      desc: 'We help users understand the system so execution becomes repeatable, measurable, and practical.',
    },
    {
      icon: LineChart,
      number: '06',
      title: 'Measure & Improve',
      desc: 'We monitor performance, refine weak points, and continuously improve the system over time.',
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-[#07111f] via-[#0b1728] to-[#07111f] px-6 py-28 text-white lg:px-12"
    >
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              CampE Execution Process
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              From confusion to control
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                in six practical moves.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              We follow a structured process that helps organizations move from
              unclear operations into measurable, technology-enabled execution.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/30 to-transparent lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <Reveal key={step.title} delay={index * 0.06}>
                  <div
                    className={`relative grid items-center gap-6 lg:grid-cols-2 ${
                      isRight ? '' : ''
                    }`}
                  >
                    <div className={isRight ? 'lg:col-start-2' : ''}>
                      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

                        <div className="relative flex items-start justify-between gap-5">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 shadow-lg shadow-cyan-500/20">
                            <Icon size={25} className="text-white" />
                          </div>

                          <span className="text-5xl font-black text-white/10">
                            {step.number}
                          </span>
                        </div>

                        <h3 className="mt-7 text-2xl font-black text-white">
                          {step.title}
                        </h3>

                        <p className="mt-4 leading-7 text-white/60">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-cyan-300 shadow-[0_0_28px_rgba(103,232,249,0.8)] lg:block`}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}