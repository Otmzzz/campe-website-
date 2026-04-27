import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

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
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-[1280px] rounded-[1.7rem] border transition-all duration-500 ${
          isScrolled
            ? 'border-white/10 bg-[#07111f]/90 shadow-2xl shadow-black/30 backdrop-blur-2xl'
            : 'border-white/10 bg-[#07111f]/55 backdrop-blur-xl'
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-5 sm:px-7 lg:px-8">
          {/* BRAND */}
          <a href="#" className="flex items-center">
            <img
              src={campeLogo}
              alt="CampE Technologies"
              className="-mt-7 h-20 w-auto object-contain sm:h-14 lg:h-120"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium tracking-wide text-white/65 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#07111f] shadow-lg shadow-black/20 transition-all hover:bg-cyan-50"
            >
              Book Consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white backdrop-blur-xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="mx-3 mb-3 rounded-[1.4rem] border border-white/10 bg-[#0b1728]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-white/75 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f]"
            >
              Book Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}