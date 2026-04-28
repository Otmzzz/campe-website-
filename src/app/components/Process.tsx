import {
  ArrowRight,
  CheckCircle2,
  Gauge,
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
      title: 'Diagnose',
      desc: 'We identify where work slows down, where decisions are delayed, and what leadership cannot see clearly.',
      output: 'Pain point map',
    },
    {
      icon: Network,
      number: '02',
      title: 'Structure',
      desc: 'We map workflows, roles, handoffs, approvals, data sources, risks, and bottlenecks into one operating picture.',
      output: 'System gap map',
    },
    {
      icon: Workflow,
      number: '03',
      title: 'Design',
      desc: 'We turn scattered actions into clear workflows with responsibilities, checkpoints, data movement, and escalation paths.',
      output: 'Execution blueprint',
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Implement',
      desc: 'We apply the right mix of dashboards, AI workflows, cloud, automation, documentation, and control systems.',
      output: 'Deployment plan',
    },
    {
      icon: ShieldCheck,
      number: '05',
      title: 'Stabilize',
      desc: 'We help users adopt the system, verify usability, document the process, and reduce operational dependency.',
      output: 'User enablement',
    },
    {
      icon: LineChart,
      number: '06',
      title: 'Measure',
      desc: 'We monitor indicators, refine weak points, improve reports, and help leadership use data for continuous improvement.',
      output: 'Improvement dashboard',
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
                CampE Execution Method
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.65rem] lg:leading-[1.05]">
              From unclear operations
              <span className="block text-white/55">
                to controlled execution.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              We clarify the system before recommending tools, so every workflow,
              dashboard, automation, and control has a clear business reason.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-white/65 backdrop-blur-xl"
              >
                <CheckCircle2 size={16} className="text-cyan-200" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065] sm:p-7">
                  <div className="absolute right-[-70px] top-[-70px] h-44 w-44 rounded-full bg-cyan-300/8 blur-3xl transition group-hover:bg-cyan-300/14" />

                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                      <Icon size={22} className="text-cyan-200" />
                    </div>

                    <span className="text-4xl font-semibold tracking-[-0.04em] text-white/12">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-2xl font-semibold tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>

                  <p className="relative mt-4 min-h-[112px] text-sm leading-7 text-white/55 sm:text-[15px]">
                    {step.desc}
                  </p>

                  <div className="relative mt-6 rounded-2xl border border-cyan-200/10 bg-cyan-200/[0.06] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/55">
                      Output
                    </p>

                    <p className="mt-2 flex items-center justify-between gap-3 text-sm font-medium text-white/75">
                      {step.output}
                      <ArrowRight size={15} className="text-cyan-200" />
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-14 grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                <Gauge size={24} className="text-cyan-200" />
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