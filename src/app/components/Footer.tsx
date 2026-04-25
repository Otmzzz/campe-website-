import { Mail, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why CampE', href: '#why-campe' },
    { label: 'Process', href: '#process' },
    { label: 'Book Consultation', href: '#finalcta' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b14] px-6 py-14 text-white lg:px-12">
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/25">
                <Sparkles size={19} className="text-white" />
              </div>

              <div>
                <p className="text-xl font-black tracking-tight">CampE</p>
                <p className="-mt-1 text-[10px] uppercase tracking-[0.28em] text-cyan-200/70">
                  Systems Intelligence
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-xl leading-7 text-white/55">
              CampE helps organizations turn operational complexity into clear,
              measurable, and technology-enabled execution.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              Transforming complexity into clarity.
            </div>
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
                <span>contact@campetechnologies.com</span>
              </div>

              <div className="flex items-start gap-3 text-white/55">
                <MapPin size={18} className="mt-1 text-cyan-200" />
                <span>Cagayan de Oro City, Philippines</span>
              </div>

              <a
                href="#finalcta"
                className="group mt-2 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#07111f] transition hover:bg-cyan-100"
              >
                Book Consultation
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
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