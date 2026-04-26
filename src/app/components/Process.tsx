import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  LineChart,
  Network,
  Search,
  ShieldCheck,
  Workflow,
  Wrench,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Understand the Pain Points',
      desc: 'We identify where the organization slows down, where confusion happens, what decisions are delayed, and what information leaders cannot see clearly.',
      output: 'Pain point map',
    },
    {
      icon: Network,
      number: '02',
      title: 'Diagnose the System Gaps',
      desc: 'We review workflows, roles, tools, documents, data sources, risks, approvals, and bottlenecks to understand the real operating condition.',
      output: 'Gap diagnosis',
    },
    {
      icon: Workflow,
      number: '03',
      title: 'Design the Execution Flow',
      desc: 'We convert scattered actions into structured workflows with clear responsibilities, data movement, checkpoints, and escalation paths.',
      output: 'Workflow blueprint',
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Deploy the Right Tools',
      desc: 'We apply the right mix of AI, dashboards, cloud, automation, cybersecurity controls, and documentation based on actual business needs.',
      output: 'Tool deployment plan',
    },
    {
      icon: GraduationCap,
      number: '05',
      title: 'Train the People',
      desc: 'We guide users and leaders so the system becomes usable, repeatable, measurable, and easier to maintain after rollout.',
      output: 'User enablement',
    },
    {
      icon: LineChart,
      number: '06',
      title: 'Measure and Improve',
      desc: 'We monitor indicators, refine weak points, improve reports, and help leadership use data for continuous operational improvement.',
      output: 'Improvement dashboard',
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
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              <ShieldCheck size={15} />
              CampE Execution Method
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              From unclear operations
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                to controlled execution.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
              Our process is designed to prevent technology from becoming random.
              We clarify the system first, then select the tools that support the work.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
            {[
              'Business-first diagnosis',
              'Workflow before software',
              'Measurement after deployment',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-white/70"
              >
                <CheckCircle2 size={16} className="text-cyan-300" />
                {item}
              </div>
            ))}
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
                  <div className="relative grid items-center gap-6 lg:grid-cols-2">
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

                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                          Output: {step.output}
                          <ArrowRight size={15} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-cyan-300 shadow-[0_0_28px_rgba(103,232,249,0.8)] lg:block" />
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