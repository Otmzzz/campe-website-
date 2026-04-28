import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  Layers3,
  Workflow,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Testimonials() {
  const outcomes = [
    {
      icon: Workflow,
      title: 'Cleaner Workflow Movement',
      desc: 'Reduce friction between requests, approvals, handoffs, and execution steps.',
    },
    {
      icon: Eye,
      title: 'Better Operational Visibility',
      desc: 'See delays, priorities, workload pressure, and business movement earlier.',
    },
    {
      icon: BarChart3,
      title: 'Stronger Management Decisions',
      desc: 'Use dashboards and structured reports leaders can quickly understand.',
    },
    {
      icon: Layers3,
      title: 'More Control Across Teams',
      desc: 'Align people, process, data, and accountability into one operating flow.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-28">
      <div className="absolute left-[-140px] top-10 h-[360px] w-[360px] rounded-full bg-cyan-100 blur-3xl" />
      <div className="absolute right-[-160px] bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Results Snapshot
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
                Real improvements
                <span className="block text-slate-500">
                  leaders can actually feel.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                CampE focuses on practical gains: cleaner workflows, stronger
                visibility, clearer accountability, and better decisions.
              </p>

              <a
                href="#finalcta"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#07111f] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#10243d]"
              >
                Discuss Your Operations
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {outcomes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <div className="group h-full rounded-[1.7rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111f] text-cyan-200">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-xl font-semibold text-[#07111f]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-500">
                        {item.desc}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-700">
                        <CheckCircle2 size={15} />
                        Practical business gain
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}