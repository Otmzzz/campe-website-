import { Reveal } from './Reveal';

export function TrustSection() {
  const domains = [
    {
      icon: '/domain-icons/work.png',
      label: 'Business workflow',
      detail: 'Process movement, handoffs, approvals, and manual tracking.',
    },
    {
      icon: '/domain-icons/system-integration.png',
      label: 'Governance and control',
      detail: 'Accountability, documentation, approval paths, and execution discipline.',
    },
    {
      icon: '/domain-icons/data.png',
      label: 'Data visibility',
      detail: 'Dashboards, reporting layers, KPI signals, and management views.',
    },
    {
      icon: '/domain-icons/security.png',
      label: 'Cybersecurity readiness',
      detail: 'Access, ownership, risk exposure, and practical control requirements.',
    },
    {
      icon: '/domain-icons/cloud-server.png',
      label: 'Emergency and field coordination',
      detail: 'Incident flow, escalation, status visibility, and lifecycle tracking.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 text-[#07111f] sm:px-8 lg:px-10 lg:py-24">
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                Operating Domains
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                Where CampE applies systems clarity.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
              CampE works across the operating areas where complexity usually
              builds: workflow, governance, data, control readiness, and
              coordination under pressure.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-slate-200">
            {domains.map((domain) => (
              <div
                key={domain.label}
                className="grid gap-3 border-b border-slate-200 py-6 md:grid-cols-[0.46fr_1fr] md:items-start md:gap-8 lg:py-7"
              >
                <h3 className="flex items-center gap-4 text-xl font-semibold leading-tight tracking-[-0.02em] text-[#07111f] sm:text-[1.35rem]">
                  <img
                    src={domain.icon}
                    alt=""
                    className="h-8 w-8 shrink-0 object-contain"
                  />
                  {domain.label}
                </h3>

                <p className="max-w-3xl text-[15px] leading-7 text-slate-600">
                  {domain.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-4xl text-sm leading-7 text-slate-500 sm:text-base">
            <span className="font-semibold text-[#07111f]">
              Operating principle:
            </span>{' '}
            The domain changes. The discipline stays consistent.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
