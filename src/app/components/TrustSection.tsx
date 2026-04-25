import {
  Shield,
  Cloud,
  BarChart3,
  Zap,
  Server,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export function TrustSection() {
  const capabilities = [
    { icon: Shield, label: 'Cybersecurity' },
    { icon: Cloud, label: 'Cloud Systems' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Zap, label: 'Automation' },
    { icon: Server, label: 'Infrastructure' },
  ];

  const trustItems = [
    'Business-first approach',
    'Deployment ready',
    'Scalable solutions',
    'Executive visibility',
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-1">
      {/* Soft glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-100 blur-[110px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
            <Sparkles size={15} className="text-cyan-500" />
            Trusted Enterprise Capabilities
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            CampE combines business understanding with modern technology execution
            to help organizations move faster and operate smarter.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-xl"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg transition-transform group-hover:scale-110">
                <item.icon size={26} strokeWidth={1.8} />
              </div>

              <p className="text-sm font-semibold text-[#07111f]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5">
          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-8">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600"
              >
                <CheckCircle2 size={16} className="text-cyan-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}