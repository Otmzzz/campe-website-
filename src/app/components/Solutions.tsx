import {
  BarChart3,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import { Reveal } from './Reveal';

export function Solutions() {
  const services = [
    {
      icon: Workflow,
      title: 'Business Systems Architecture',
      desc: 'We map messy operations into clear workflows, dashboards, SOPs, and execution-ready systems.',
      points: ['Process Mapping', 'Workflow Design', 'Operational Clarity'],
    },
    {
      icon: BrainCircuit,
      title: 'Applied AI Consulting',
      desc: 'We help teams use AI practically for productivity, decision support, documentation, and automation.',
      points: ['AI Workflows', 'Prompt Systems', 'Productivity Design'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Dashboards',
      desc: 'We turn raw business data into decision-ready Power BI dashboards and performance indicators.',
      points: ['Power BI', 'KPI Design', 'Executive Reports'],
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity Readiness',
      desc: 'We assess risks, structure controls, and guide organizations toward safer digital operations.',
      points: ['Risk Review', 'Control Mapping', 'Security Awareness'],
    },
    {
      icon: Cloud,
      title: 'Cloud & Digital Modernization',
      desc: 'We help organizations prepare for modern cloud-based systems, backups, access control, and scalability.',
      points: ['Cloud Planning', 'System Migration', 'Access Governance'],
    },
  ];

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#07111f] px-6 py-28 text-white lg:px-12"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200">
              CampE Elite Services
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Systems built for clarity,
              <span className="block bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                control, and execution.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              CampE helps organizations move from scattered operations to structured,
              measurable, and technology-enabled execution.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl transition group-hover:bg-cyan-300/20" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 shadow-lg shadow-cyan-500/20">
                    <Icon size={25} className="text-white" />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/60">
                    {service.desc}
                  </p>

                  <div className="mt-7 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#finalcta"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition group-hover:text-white"
                  >
                    Explore Service
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}