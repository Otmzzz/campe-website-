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
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-[1440px] rounded-full border transition-all duration-500 ${
          isScrolled
            ? 'border-white/10 bg-[#07111f]/80 shadow-2xl shadow-black/30 backdrop-blur-2xl'
            : 'border-white/10 bg-white/[0.04] backdrop-blur-xl'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="group flex items-center">
            <img
              src={campeLogo}
              alt="CampE Technologies"
             className="-mt-8 h-30 w-auto object-contain sm:h-50 md:h-123"
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
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white backdrop-blur-xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mx-3 mb-3 rounded-3xl border border-white/10 bg-[#0b1728]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/10 hover:text-cyan-200"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#finalcta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#07111f]"
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