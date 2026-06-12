import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#prolog", label: "Profil 2024" },
  { href: "#harga", label: "Harga TBS" },
  { href: "#perusahaan", label: "Perusahaan" },
  { href: "#rakyat", label: "Rakyat" },
  { href: "#pangan", label: "Pangan" },
  { href: "#lp2b", label: "LP2B" },
  { href: "#umkm", label: "UMKM" },
  { href: "#regulasi", label: "Regulasi" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F4F1EB]/95 backdrop-blur-md border-b border-[#E3DFD3]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
        <a href="#hero" className="flex items-baseline gap-3" data-testid="nav-logo">
          <span className="font-heading text-2xl text-[#1E382B] tracking-tight">
            Jejak Agraria
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] hidden md:inline">
            Mukomuko
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.replace('#', '')}`}
              className="px-4 py-2 text-sm text-[#5C6A5F] hover:text-[#1E382B] transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-4 right-4 bottom-1 h-px bg-[#1E382B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        <a
          href="#prolog"
          data-testid="nav-cta"
          className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-[#1E382B] border-b border-[#1E382B] pb-1 hover:opacity-60 transition-opacity"
        >
          Telusuri Data
        </a>
      </div>
    </motion.nav>
  );
};
