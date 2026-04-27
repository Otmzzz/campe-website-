import { ArrowUpRight, Copy, Mail, MapPin } from 'lucide-react';

import campeLogo from '../assets/logos/campe-technologies.png';

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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-[-160px] right-[-120px] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-cyan-200/70">
                CampE Technologies
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Structure clarity before complexity slows the business.
              </h3>
            </div>

            <a
              href="#finalcta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07111f] transition hover:bg-cyan-50"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.65fr_1fr]">
          <div>
            <a href="#" className="inline-flex items-center">
              <img
                src={campeLogo}
                alt="CampE Technologies"
                className="h-30 w-auto max-w-[400px] object-contain"
              />
            </a>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/52 sm:text-base">
              CampE helps organizations turn operational complexity into
              structured systems, practical dashboards, and measurable execution.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Explore
            </h4>

            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
              Contact
            </h4>

            <div className="mt-5 space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 text-sm text-white/52 transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>{email}</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/52">
                <MapPin size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span>Cagayan de Oro City, Philippines</span>
              </div>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(email)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-white/65 transition hover:border-white/20 hover:bg-white/[0.065] hover:text-white"
              >
                <Copy size={16} />
                Copy Email
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/38 md:flex-row md:items-center md:justify-between">
          <p>© {year} CampE Technologies. All rights reserved.</p>

          <p className="text-white/35">
            Business Systems Intelligence & AI-Driven Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}