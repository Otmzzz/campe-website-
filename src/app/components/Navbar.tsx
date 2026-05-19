import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import campeLogo from '../assets/logos/campe-technologies.png';

type MegaMenuItem = {
  label: string;
  href?: string;
  description?: string;
};

type MegaMenuGroup = {
  label: string;
  href: string;
  description: string;
  items: MegaMenuItem[];
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const megaMenuGroups: MegaMenuGroup[] = [
    {
      label: 'Services',
      href: '#solutions',
      description: 'Structured consulting and systems execution support.',
      items: [
        {
          label: 'Power BI Development',
          href: '/services/power-bi-development',
          description: 'Dashboards, operational reporting, and decision visibility.',
        },
        {
          label: 'Governance and Control Review',
          href: '/services/governance-control-review',
          description: 'Approval flows, accountability, documentation, and risk gaps.',
        },
        {
          label: 'Cloud and IT Advisory',
          href: '/services/cloud-it-advisory',
          description: 'Access, deployment, contractor, and cloud control review.',
        },
        {
          label: 'Systems Architecture',
          href: '/services/systems-architecture',
          description: 'Process structure, data flow, and operating model design.',
        },
      ],
    },
    {
      label: 'Industries',
      href: '#industries',
      description: 'CampE supports organizations where complexity needs control.',
      items: [
        {
          label: 'Retail and Inventory Operations',
          href: '#industries',
          description: 'Sales, receiving, stock movement, and reporting control.',
        },
        {
          label: 'Emergency and Civic Systems',
          href: '#industries',
          description: 'Coordination, lifecycle tracking, and governance visibility.',
        },
        {
          label: 'MSMEs and Growing Teams',
          href: '#industries',
          description: 'Practical systems for owners who need clearer execution.',
        },
        {
          label: 'Technology-Led Operations',
          href: '#industries',
          description: 'Where software, workflow, and people must align.',
        },
      ],
    },
    {
      label: 'Solutions',
      href: '#solutions',
      description: 'Clearer execution through structured systems and reporting.',
      items: [
        {
          label: 'Business Clarity Systems',
          href: '/solutions/business-clarity-systems',
          description: 'Turn scattered operations into visible decision structures.',
        },
        {
          label: 'Control Dashboards',
          href: '/solutions/control-dashboards',
          description: 'Track what matters before problems become invisible.',
        },
        {
          label: 'Process Mapping',
          href: '/solutions/process-mapping',
          description: 'Clarify ownership, handoffs, approvals, and exceptions.',
        },
        {
          label: 'Risk Visibility',
          href: '/solutions/risk-visibility',
          description: 'Expose weak points in people, process, data, and systems.',
        },
      ],
    },
    {
      label: 'Process',
      href: '#process',
      description: 'A practical engagement flow from diagnosis to control.',
      items: [
        {
          label: 'Diagnose',
          href: '#process',
          description: 'Understand the actual workflow, not just the stated process.',
        },
        {
          label: 'Structure',
          href: '#process',
          description: 'Define ownership, rules, reports, and control points.',
        },
        {
          label: 'Build',
          href: '#process',
          description: 'Create usable dashboards, documents, and operating tools.',
        },
        {
          label: 'Monitor',
          href: '#process',
          description: 'Keep execution visible after the system goes live.',
        },
      ],
    },
    {
      label: 'Why CampE',
      href: '#why-campe',
      description: 'Built for clarity where operations become too complex.',
      items: [
        {
          label: 'Control-First Thinking',
          href: '#why-campe',
          description: 'Every system should make responsibility and status visible.',
        },
        {
          label: 'Business + Technical Alignment',
          href: '#why-campe',
          description: 'Technology must follow the operating reality of the business.',
        },
        {
          label: 'Execution Visibility',
          href: '#why-campe',
          description: 'Leaders need reliable signals, not scattered updates.',
        },
      ],
    },
  ];

  const activeMegaGroup = activeGroup
    ? megaMenuGroups.find((group) => group.label === activeGroup) || null
    : null;

  const openMenu = () => {
    setActiveGroup(null);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveGroup(null);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ease-out ${
          isScrolled
            ? 'border-cyan-300/10 bg-slate-950/70 shadow-lg shadow-slate-950/20 backdrop-blur-xl'
            : 'border-cyan-300/20 bg-[#06101d]/95 shadow-2xl shadow-black/30'
        }`}
      >
        {/* TOP BAR */}
        <div className="hidden border-b border-white/10 bg-[#020712]/85 lg:block">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-1.5 text-[11px] text-white/65">
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
        <div className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-5 sm:h-[90px] sm:px-7 lg:h-[92px] lg:px-10">
          {/* LEFT SIDE: HAMBURGER + BRAND */}
          <div className="flex min-w-0 items-center gap-4 lg:gap-5">
            <button
              className="group -ml-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/90 transition hover:bg-white/[0.06] hover:text-white sm:h-12 sm:w-12"
              onClick={openMenu}
              aria-label="Open menu"
            >
              <Menu
                size={29}
                className="transition duration-300 group-hover:scale-105"
              />
            </button>

            <a href="#" className="flex shrink-0 items-center" onClick={closeMenu}>
              <div className="w-[210px] -translate-y-0.5 sm:w-[285px] lg:w-[340px] lg:-translate-y-1 xl:w-[375px]">
                <img
                  src={campeLogo}
                  alt="CampE Technologies"
                  className="block h-auto w-full object-contain brightness-110"
                />
              </div>
            </a>
          </div>

          {/* DESKTOP RIGHT ACTIONS */}
          <div className="hidden items-center lg:flex">
            <a
              href="#finalcta"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-[13px] font-bold text-[#06101d] shadow-md shadow-black/15 transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              Book Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* MOBILE CTA */}
          <a
            href="#finalcta"
            className="hidden rounded-full bg-white px-4 py-2.5 text-[12px] font-bold text-[#06101d] shadow-md shadow-black/15 sm:inline-flex lg:hidden"
          >
            Consult
          </a>
        </div>

        {/* CAMP-E ACCENT LINE */}
        <div className="h-[2px] bg-gradient-to-r from-cyan-300/0 via-cyan-300 to-blue-400/0" />
      </nav>

      {/* LEFT MEGA MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* OVERLAY */}
            <motion.button
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-sm"
            />

            {/* DRAWER WRAPPER */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed left-0 top-0 z-[70] flex h-screen w-full overflow-hidden bg-white text-slate-950 shadow-2xl shadow-slate-950/25 transition-[max-width,width] duration-300 ${
                activeMegaGroup
                  ? 'max-w-[420px] lg:w-[860px] lg:max-w-[980px] xl:w-[960px]'
                  : 'max-w-[420px] lg:w-[420px]'
              }`}
            >
              {/* LEFT MAIN PANEL */}
              <div className="flex h-full w-full max-w-[390px] flex-col border-r border-slate-200 bg-white sm:max-w-[420px]">
                <div className="flex h-[96px] items-center justify-between border-b border-slate-200 px-7">
                  <button
                    onClick={closeMenu}
                    className="group inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:text-slate-950"
                    aria-label="Close menu"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-slate-300 group-hover:bg-slate-50">
                      <X size={22} strokeWidth={2.1} />
                    </span>
                    Close
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-7 py-8">
                  <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-700">
                    CampE Navigation
                  </p>

                  <div className="border-t border-slate-200">
                    {megaMenuGroups.map((group) => {
                      const isActive = activeGroup === group.label;

                      return (
                        <div
                          key={group.label}
                          className={`border-b transition ${
                            isActive ? 'border-slate-300' : 'border-slate-200'
                          }`}
                        >
                          <button
                            onMouseEnter={() => setActiveGroup(group.label)}
                            onClick={() => setActiveGroup(group.label)}
                            className={`group flex w-full items-center justify-between py-5 text-left transition ${
                              isActive
                                ? 'text-slate-950'
                                : 'text-slate-700 hover:text-slate-950'
                            }`}
                          >
                            <span>
                              <span className="block text-[16px] font-black uppercase tracking-[0.08em]">
                                {group.label}
                              </span>
                              <span
                                className={`mt-1.5 block max-w-[280px] text-[12px] leading-relaxed ${
                                  isActive ? 'text-slate-600' : 'text-slate-500'
                                }`}
                              >
                                {group.description}
                              </span>
                            </span>

                            <ChevronRight
                              size={22}
                              className={`ml-4 shrink-0 transition ${
                                isActive
                                  ? 'translate-x-1 text-cyan-700'
                                  : 'text-slate-400 group-hover:translate-x-1 group-hover:text-slate-950'
                              }`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key={`${group.label}-mobile-submenu`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden lg:hidden"
                              >
                                <div className="border-t border-slate-200/80 pb-5 pt-2">
                                  {group.items.map((item) => (
                                    <a
                                      key={item.label}
                                      href={item.href}
                                      onClick={closeMenu}
                                      className="flex items-center justify-between gap-4 py-3 text-[13px] font-bold text-slate-800 transition hover:text-cyan-800"
                                    >
                                      <span>
                                        <span className="block">{item.label}</span>
                                        {item.description && (
                                          <span className="mt-1 block text-[12px] font-medium leading-5 text-slate-500">
                                            {item.description}
                                          </span>
                                        )}
                                      </span>
                                      <ArrowRight
                                        size={14}
                                        className="shrink-0 text-slate-400"
                                      />
                                    </a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT POPOUT PANEL */}
              <AnimatePresence>
                {activeMegaGroup && (
                  <motion.div
                    key="desktop-popout"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="hidden h-full flex-1 flex-col bg-[#f8fafc] lg:flex"
                  >
                    <div className="border-b border-slate-200 px-10 py-9">
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-700">
                        Explore
                      </p>

                      <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                        {activeMegaGroup.label}
                      </h3>

                      <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-600">
                        {activeMegaGroup.description}
                      </p>
                    </div>

                    <div className="flex-1 overflow-y-auto px-10 py-7">
                      <div className="border-t border-slate-200">
                        {activeMegaGroup.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className="group block border-b border-slate-200 py-5 transition hover:border-cyan-200"
                          >
                            <div className="flex items-start justify-between gap-5">
                              <div>
                                <h4 className="text-[16px] font-black text-slate-950 transition group-hover:text-cyan-800">
                                  {item.label}
                                </h4>

                                {item.description && (
                                  <p className="mt-2 max-w-md text-[14px] leading-6 text-slate-600">
                                    {item.description}
                                  </p>
                                )}
                              </div>

                              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-700">
                                <ArrowRight size={16} />
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
