import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import campeLogo from '../assets/logos/campe-technologies.png';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions', dropdown: true },
    { label: 'Industries', href: '#industries', dropdown: true },
    { label: 'Why CampE', href: '#why-campe', dropdown: false },
    { label: 'Process', href: '#process', dropdown: false },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
        isScrolled
          ? 'border-cyan-300/10 bg-slate-950/70 shadow-lg shadow-slate-950/20 backdrop-blur-xl'
          : 'border-cyan-300/20 bg-[#06101d]/95 shadow-2xl shadow-black/30'
      }`}
    >
      {/* TOP BAR */}
      <div className="hidden border-b border-white/10 bg-[#020712]/85 lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-2 text-[12px] text-white/65">
          <p className="tracking-[0.18em] text-cyan-100/80">
            SYSTEMS INTELLIGENCE CONSULTING
          </p>

          <div className="flex items-center gap-6">
            <a href="#why-campe" className="transition hover:text-white">
              Need clarity?
            </a>

            <a
              href="#finalcta"
              className="font-semibold text-cyan-100 transition hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="mx-auto flex h-[118px] max-w-[1440px] items-center justify-between px-5 sm:px-7 lg:px-10">
        {/* BRAND */}
        <a href="#" className="flex shrink-0 items-center">
          {/* 
            LOGO CONTROL:
            Mobile: w-[300px]
            Tablet: sm:w-[360px]
            Desktop: lg:w-[430px]

            Move higher/lower:
            -translate-y-2 = slightly higher
            -translate-y-4 = more higher
            translate-y-0 = normal
          */}
          <div className="w-[300px] -translate-y-2 sm:w-[360px] lg:w-[430px] lg:-translate-y-3">
            <img
              src={campeLogo}
              alt="CampE Technologies"
              className="block h-auto w-full object-contain brightness-110"
            />
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group inline-flex items-center gap-1.5 rounded-2xl px-4 py-3 text-[15px] font-semibold tracking-wide text-white/76 transition hover:bg-white/[0.07] hover:text-white"
            >
              {item.label}

              {item.dropdown && (
                <ChevronDown
                  size={16}
                  className="text-cyan-100/70 transition duration-300 group-hover:rotate-180 group-hover:text-white"
                />
              )}
            </a>
          ))}

          <a
            href="#finalcta"
            className="group ml-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white px-6 py-3 text-[14px] font-bold text-[#06101d] shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
          >
            Book Consultation
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/[0.1] lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* CAMP-E ACCENT LINE */}
      <div className="h-[3px] bg-gradient-to-r from-cyan-300/0 via-cyan-300 to-blue-400/0" />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-[#07111f] lg:hidden"
          >
            <div className="space-y-2 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-[15px] font-semibold text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  {item.label}

                  {item.dropdown && (
                    <ChevronDown size={16} className="text-cyan-100/70" />
                  )}
                </a>
              ))}

              <a
                href="#finalcta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-[#06101d]"
              >
                Book Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
