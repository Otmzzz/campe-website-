import {
  Store,
  Heart,
  GraduationCap,
  Landmark,
  Factory,
  Building,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Industries() {
  const industries = [
    {
      icon: Store,
      label: 'Retail',
      desc: 'POS, inventory, sales intelligence, multi-branch visibility.',
    },
    {
      icon: Heart,
      label: 'Healthcare',
      desc: 'Clinic workflow, queueing, records, patient operations.',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      desc: 'Campus systems, student services, admin efficiency.',
    },
    {
      icon: Landmark,
      label: 'Government',
      desc: 'Citizen services, command systems, accountability tools.',
    },
    {
      icon: Factory,
      label: 'Manufacturing',
      desc: 'Production tracking, operations control, dashboards.',
    },
    {
      icon: Building,
      label: 'Growing Businesses',
      desc: 'SME modernization, automation, scalable systems.',
    },
    {
      icon: Truck,
      label: 'Logistics',
      desc: 'Fleet visibility, dispatch flow, movement tracking.',
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0b1830] to-[#102341] py-28 text-white"
    >
      <div className="absolute top-0 left-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/70 backdrop-blur-md">
              Industry Coverage
            </div>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Solutions tailored for
              <span className="block text-cyan-300">
                real-world industries
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
              CampE adapts technology solutions to the actual workflows,
              priorities, and challenges of each sector we serve.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="group rounded-3xl border border-white/10 bg-white/7 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-2xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon size={26} strokeWidth={1.8} />
                </div>

                <div className="mb-2 text-xs uppercase tracking-widest text-white/35">
                  Sector {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.label}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-300 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                  View Solutions
                  <ArrowRight size={16} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/7 p-6 text-center backdrop-blur-xl">
            <p className="text-lg text-white/80">
              Don’t see your industry here?
              <span className="font-semibold text-cyan-300">
                {' '}CampE builds custom systems too.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}