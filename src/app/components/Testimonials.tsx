import { ArrowUpRight, BarChart3, Gauge, Layers3, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export function Testimonials() {
  const results = [
    { icon: Gauge, value: '+40%', label: 'Workflow Speed', text: 'Cleaner process movement from request to decision.' },
    { icon: BarChart3, value: '3x', label: 'Visibility', text: 'Better management view across key operations.' },
    { icon: Layers3, value: '-60%', label: 'Manual Work', text: 'Reduced repetitive tracking and scattered reporting.' },
    { icon: ShieldCheck, value: '24/7', label: 'Readiness Mindset', text: 'Built around structure, governance, and continuity.' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f9fb] py-28">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-100 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Results Snapshot
            </div>

            <h2 className="text-4xl font-black tracking-tight text-[#07111f] md:text-5xl lg:text-6xl">
              Designed to make operations
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                measurable, visible, and clear.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              CampE focuses on practical improvements leaders can understand:
              clearer workflows, better dashboards, stronger governance, and faster execution.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-cyan-300 hover:shadow-2xl hover:shadow-blue-100">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-110">
                    <Icon size={25} />
                  </div>

                  <p className="text-5xl font-black tracking-tight text-[#07111f]">
                    {item.value}
                  </p>

                  <h3 className="mt-3 text-lg font-black text-[#07111f]">
                    {item.label}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-500">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-[#07111f] p-8 text-white shadow-2xl md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                  Social Proof
                </p>
                <h3 className="mt-3 text-2xl font-black md:text-3xl">
                  See updates, work highlights, and public activity.
                </h3>
              </div>

              <a
                href="https://www.facebook.com/campecomputing"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#07111f] transition-all hover:scale-105 hover:bg-cyan-100"
              >
                Visit Facebook Page
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}