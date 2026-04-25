import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Why CampE', href: '#why-campe' },
    { label: 'Process', href: '#process' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-white/10 bg-[#07111f]/80 shadow-2xl shadow-black/20 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/25">
              <Sparkles size={19} className="text-white" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div>
              <p className="text-xl font-black tracking-tight text-white">
                CampE
              </p>
              <p className="-mt-1 text-[10px] uppercase tracking-[0.28em] text-cyan-200/70">
                Systems Intelligence
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-white/70 transition-colors hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#07111f] shadow-xl shadow-white/10 transition-all hover:scale-105 hover:bg-cyan-100"
            >
              Book Consultation
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <button
            className="rounded-xl border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mb-5 rounded-3xl border border-white/10 bg-[#0b1728]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#07111f]"
            >
              Book Consultation
              <ArrowRight size={17} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}