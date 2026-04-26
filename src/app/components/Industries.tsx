import {
  ArrowRight,
  Building,
  Factory,
  GraduationCap,
  Heart,
  Landmark,
  Store,
  Truck,
  UsersRound,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Industries() {
  const industries = [
    {
      icon: Store,
      label: 'Retail & Multi-Branch Sales',
      desc: 'Sales tracking, inventory visibility, product movement, branch performance, and executive dashboards.',
      useCase: 'Ideal for POS-driven businesses with multiple locations.',
    },
    {
      icon: Building,
      label: 'SMEs & Growing Companies',
      desc: 'Manual workflows, scattered spreadsheets, approvals, reporting gaps, and operational structure.',
      useCase: 'Best for teams growing faster than their internal systems.',
    },
    {
      icon: Heart,
      label: 'Clinics & Healthcare Operations',
      desc: 'Queue flow, patient handling, internal coordination, service tracking, and management reporting.',
      useCase: 'Useful for clinics that need cleaner service movement.',
    },
    {
      icon: GraduationCap,
      label: 'Schools & Training Institutions',
      desc: 'Student services, admin workflows, campus requests, digital tracking, and reporting tools.',
      useCase: 'Built for institutions that need organized digital workflows.',
    },
    {
      icon: Landmark,
      label: 'LGUs & Civic Systems',
      desc: 'Citizen services, emergency coordination, command visibility, routing, accountability, and reports.',
      useCase: 'Designed for governance teams needing faster coordination.',
    },
    {
      icon: Factory,
      label: 'Manufacturing & Production',
      desc: 'Job order tracking, production lanes, operator assignment, output monitoring, and bottleneck visibility.',
      useCase: 'Works for operations that need floor-to-dashboard clarity.',
    },
    {
      icon: Truck,
      label: 'Logistics & Field Teams',
      desc: 'Dispatch flow, route visibility, field reporting, delivery updates, and movement accountability.',
      useCase: 'Useful when field movement needs central visibility.',
    },
    {
      icon: UsersRound,
      label: 'Associations & Communities',
      desc: 'Member records, dues tracking, announcements, facility requests, governance documents, and reporting.',
      useCase: 'For groups that need structure, transparency, and records.',
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-br from-[#07111f] via-[#0b1830] to-[#102341] py-28 text-white"
    >
      <div className="absolute left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/70 backdrop-blur-md">
              Real-World Use Cases
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl">
              Built around actual
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                operating environments.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
              The best system depends on the market, the workflow, the people
              using it, and the decisions leadership needs to make.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 0.06}>
                <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-2xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <div className="mb-2 text-xs uppercase tracking-widest text-white/35">
                    Use Case {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-xl font-black text-white">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.desc}
                  </p>

                  <div className="mt-5 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50/80">
                    {item.useCase}
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-cyan-300 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                    Match This Industry
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.07] p-7 text-center backdrop-blur-xl">
            <p className="text-lg leading-8 text-white/80">
              Don’t see your industry here?
              <span className="font-bold text-cyan-300">
                {' '}CampE can model the workflow first, then design the system around it.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}