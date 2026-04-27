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
      className="relative overflow-hidden bg-[#07111f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute left-[-160px] top-24 h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute right-[-140px] bottom-10 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Operating Environments
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem] lg:leading-[1.05]">
              Built for real businesses,
              <span className="block text-white/55">not ideal conditions.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
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
                <div className="group flex h-full flex-col rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.065]">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08]">
                      <Icon size={22} className="text-cyan-200" />
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white/42">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/60">
                    {item.tag}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
                        Common Pain
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/56">
                        {item.pain}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-200/10 bg-cyan-200/[0.06] p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/55">
                        CampE Outcome
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/70">
                        {item.outcome}
                      </p>
                    </div>
                  </div>

                  <a
                    href="#finalcta"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-cyan-100/75 transition group-hover:text-white"
                  >
                    Discuss this environment
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6 text-center shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            <p className="mx-auto max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Different industry? CampE can still model the workflow first, then
              design the system around the actual operating environment.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}