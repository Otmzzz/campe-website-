import { useEffect, useState } from 'react';
import { ArrowRight, Menu, Sparkles, X } from 'lucide-react';

import campeLogo from '../assets/logos/campe-technologies.png';

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
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`mx-auto max-w-[1440px] rounded-[2rem] border transition-all duration-500 sm:rounded-full ${
          isScrolled
            ? 'border-white/10 bg-[#07111f]/85 shadow-2xl shadow-black/30 backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.04] backdrop-blur-xl'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          {/* MOBILE BRAND */}
          <a href="#" className="flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/25">
              <Sparkles size={19} className="text-white" />
            </div>

            <div className="leading-none">
              <p className="text-xl font-black tracking-tight text-white">
                CampE
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-200/80">
                Systems Intelligence
              </p>
            </div>
          </a>

          {/* DESKTOP BRAND */}
          <a href="#" className="hidden items-center lg:flex">
            <img
              src={campeLogo}
              alt="CampE Technologies"
              className="-translate-y-2 h-24 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-white/65 transition hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#07111f] shadow-xl shadow-white/10 transition-all hover:scale-105 hover:bg-cyan-100"
            >
              Book for Consultation
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <button
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white shadow-lg backdrop-blur-xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mx-3 mb-3 rounded-3xl border border-white/10 bg-[#0b1728]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-black text-[#07111f]"
            >
              Book for Consultation
              <ArrowRight size={17} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}