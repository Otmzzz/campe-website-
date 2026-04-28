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
      tag: 'BRANCH CONTROL',
      title: 'Retail & Multi-Branch Operations',
      pain: 'Sales, stock, product movement, and branch performance often sit in separate reports.',
      outcome: 'CampE helps create one operating view for sales, inventory, margin, and location performance.',
    },
    {
      icon: Building,
      tag: 'GROWTH STRUCTURE',
      title: 'SMEs & Growing Companies',
      pain: 'Teams grow faster than their workflows, approvals, documents, and reporting discipline.',
      outcome: 'We structure the operating flow so leaders can scale without losing visibility or control.',
    },
    {
      icon: Heart,
      tag: 'SERVICE FLOW',
      title: 'Clinics & Healthcare Operations',
      pain: 'Patient movement, queue handling, internal coordination, and reporting can become fragmented.',
      outcome: 'We help organize service flow, tracking, and management visibility for cleaner daily operations.',
    },
    {
      icon: GraduationCap,
      tag: 'ADMIN WORKFLOW',
      title: 'Schools & Training Institutions',
      pain: 'Student services, requests, records, and admin tasks often rely on manual coordination.',
      outcome: 'CampE designs structured digital workflows for campus operations, tracking, and reporting.',
    },
    {
      icon: Landmark,
      tag: 'GOVERNANCE VISIBILITY',
      title: 'LGUs & Civic Systems',
      pain: 'Citizen services, emergency routing, accountability, and field updates need faster coordination.',
      outcome: 'We help design command visibility, routing logic, status tracking, and governance reports.',
    },
    {
      icon: Factory,
      tag: 'PRODUCTION CLARITY',
      title: 'Manufacturing & Production',
      pain: 'Job orders, production lanes, operator assignments, and bottlenecks are hard to monitor manually.',
      outcome: 'We convert production movement into measurable floor-to-dashboard control.',
    },
    {
      icon: Truck,
      tag: 'FIELD MOVEMENT',
      title: 'Logistics & Field Teams',
      pain: 'Dispatch, route updates, delivery movement, and field reporting often lack central visibility.',
      outcome: 'CampE structures field coordination, movement tracking, and operational accountability.',
    },
    {
      icon: UsersRound,
      tag: 'MEMBER RECORDS',
      title: 'Associations & Communities',
      pain: 'Dues, records, requests, announcements, and governance documents become difficult to manage.',
      outcome: 'We help create transparent records, cleaner member workflows, and better reporting discipline.',
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07111f] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute left-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-100 blur-3xl" />
      <div className="absolute right-[-140px] bottom-10 h-[460px] w-[460px] rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Operating Environments
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.55rem] lg:leading-[1.05]">
              Built for real businesses,
              <span className="block text-slate-500">not ideal conditions.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              CampE adapts to how each organization actually works — the people,
              the workflow, the data, the risks, and the decisions leadership
              needs to make.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="group flex h-full flex-col rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#07111f] shadow-sm">
                      <Icon size={17} />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-700/65">
                    {item.tag}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#07111f]">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Common Pain
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-500">
                        {item.pain}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700/65">
                        CampE Outcome
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                  <a
                    href="#finalcta"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#07111f] transition group-hover:text-cyan-700"
                  >
                    Discuss this environment
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-[1.7rem] border border-slate-200 bg-slate-50 p-6 text-center shadow-sm sm:p-7">
            <p className="mx-auto max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Different industry? CampE can still model the workflow first, then
              design the system around the actual operating environment.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}