import { Mail, MapPin, ArrowUpRight, Sparkles, Copy } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why CampE', href: '#why-campe' },
    { label: 'Process', href: '#process' },
    { label: 'Send Inquiry', href: '#finalcta' },
  ];

  const email = 'contact@campetechnologies.com';

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712] px-6 py-16 text-white lg:px-12">
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                CampE Technologies
              </p>
              <h3 className="mt-3 text-2xl font-black md:text-4xl">
                Transforming complexity into clarity.
              </h3>
            </div>

            <a
              href="#finalcta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-black text-[#07111f] hover:scale-105 hover:bg-white"
            >
              Send Inquiry
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/25">
                <Sparkles size={20} className="text-white" />
              </div>

              <div>
                <p className="text-2xl font-black tracking-tight">CampE</p>
                <p className="-mt-1 text-[10px] uppercase tracking-[0.28em] text-cyan-200/70">
                  Systems Intelligence
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xl leading-7 text-white/55">
              CampE helps organizations turn operational complexity into clear,
              measurable, and technology-enabled execution.
            </p>
          </div>

          <div>
            <h4 className="font-black text-white">Explore</h4>

            <div className="mt-5 space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/55 transition hover:translate-x-1 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-white">Contact</h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3 text-white/55">
                <Mail size={18} className="mt-1 text-cyan-200" />
                <span>{email}</span>
              </div>

              <div className="flex items-start gap-3 text-white/55">
                <MapPin size={18} className="mt-1 text-cyan-200" />
                <span>Cagayan de Oro City, Philippines</span>
              </div>

              <button
                type="button"
                onClick={() => navigator.clipboard.writeText(email)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-bold text-white/70 hover:border-cyan-300/40 hover:text-cyan-200"
              >
                <Copy size={16} />
                Copy Email
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {year} CampE Technologies. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-cyan-200">
              Privacy
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}