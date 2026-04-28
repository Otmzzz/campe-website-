import { ArrowUpRight, Copy, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why CampE', href: '#why-campe' },
    { label: 'Process', href: '#process' },
  ];

  const email = 'contact@campetechnologies.com';

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#f8fbfd] px-5 py-16 text-[#07111f] sm:px-8 lg:px-10">
      {/* Glow Background */}
      <div className="absolute left-[-140px] top-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Top CTA */}
        <div className="mb-12 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700/70">
                CampE Technologies
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-[#07111f] sm:text-4xl">
                Structure clarity before complexity slows the business.
              </h3>
            </div>

            <a
              href="#finalcta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#07111f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#10243d]"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.65fr_1fr]">
          {/* Brand Column */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700/75">
              CampE Technologies
            </p>

            <h4 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#07111f]">
              Structured systems for modern organizations.
            </h4>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              CampE helps organizations reduce operational friction, improve
              leadership visibility, modernize workflows, and build structured
              systems designed for measurable growth.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Explore
            </h4>

            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-500 transition hover:translate-x-1 hover:text-cyan-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
              Contact
            </h4>

            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 text-sm text-slate-500 transition hover:text-cyan-700"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-cyan-700" />
                <span>{email}</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin size={17} className="mt-0.5 shrink-0 text-cyan-700" />
                <span>Cagayan de Oro City, Philippines</span>
              </div>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(email)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-cyan-200 hover:text-cyan-700"
              >
                <Copy size={15} />
                Copy Email
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} CampE Technologies. All rights reserved.</p>

          <p>Structured Clarity. Scalable Control.</p>
        </div>
      </div>
    </footer>
  );
}