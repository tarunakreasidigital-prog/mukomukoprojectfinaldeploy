import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { TrendingUp, Users, Factory, Zap, AlertTriangle } from "lucide-react";

const macroIndicators = [
  { label: "PDRB ADHB", value: 7.57, suffix: " T", decimals: 2, note: "Triliun Rupiah", prefix: "Rp " },
  { label: "Indeks Pembangunan Manusia", value: 73.65, suffix: "", decimals: 2, note: "Kategori Tinggi" },
  { label: "Pertumbuhan Ekonomi", value: 4.05, suffix: "%", decimals: 2, note: "Tumbuh Positif" },
];

const pillars = [
  {
    icon: TrendingUp,
    tag: "Pemerataan",
    title: "Pertumbuhan Inklusif",
    stats: [
      { label: "Gini Rasio", value: 0.23, decimals: 2 },
      { label: "Pengangguran", value: 2.41, decimals: 2, suffix: "%" },
    ],
    desc: "Pemerataan pendapatan sangat baik, didukung tingkat pengangguran rendah.",
    accent: "#5F7C51",
  },
  {
    icon: Users,
    tag: "Demografi",
    title: "Bonus Demografi Produktif",
    stats: [
      { label: "Usia Produktif", value: 139099, decimals: 0 },
      { label: "Total Penduduk", value: 203000, decimals: 0, prefix: "≈" },
    ],
    desc: "Potensi besar tenaga kerja & pertumbuhan ekonomi jangka panjang.",
    accent: "#8A7056",
  },
  {
    icon: Factory,
    tag: "Hilirisasi",
    title: "Sektor Unggulan Sawit",
    stats: [
      { label: "Produksi Sawit", value: 2.04, decimals: 2, suffix: " Jt Ton" },
      { label: "Pangsa Industri", value: 10.8, decimals: 2, suffix: "%" },
    ],
    desc: "Peluang besar pengembangan industri hilir & nilai tambah produk.",
    accent: "#B5533B",
  },
  {
    icon: Zap,
    tag: "Infrastruktur",
    title: "Energi Paripurna",
    stats: [
      { label: "Rasio Elektrifikasi", value: 99.99, decimals: 2, suffix: "%" },
      { label: "Gardu Induk", value: 150, decimals: 0, suffix: " kV" },
    ],
    desc: "Hampir 100% elektrifikasi mendukung kesiapan industrialisasi.",
    accent: "#D4A373",
  },
  {
    icon: AlertTriangle,
    tag: "Tantangan",
    title: "Kemandirian Fiskal & Lingkungan",
    stats: [
      { label: "PAD", value: 48.18, decimals: 2, prefix: "Rp ", suffix: " M" },
      { label: "Lahan Kritis", value: 86000, decimals: 0, suffix: " Ha" },
    ],
    desc: "Perlu penguatan PAD dan program rehabilitasi lahan kritis.",
    accent: "#1E382B",
  },
];

const NTP_HIGHLIGHT = 181.90;

export const Prolog = () => {
  return (
    <section id="prolog" data-testid="section-prolog" className="relative py-24 md:py-36 bg-[#FCFBF8]">
      <div className="absolute inset-0 dotted-bg pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
        {/* Header */}
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono mb-4">
                Prolog · Profil Ekonomi 2024
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl text-[#1E382B] tracking-tight leading-[1.05]">
                Kekuatan agraris
                <span className="italic text-[#B5533B]"> menuju transformasi industri.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-[#5C6A5F] leading-relaxed">
                Sebelum menyelami data komoditas dan lahan, mari membaca peta
                besar ekonomi Kabupaten Mukomuko tahun 2024 — fondasi yang
                menentukan arah seluruh narasi di halaman ini.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Macro indicators band */}
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-3 border-t border-b border-[#E3DFD3] py-12 mb-20">
            {macroIndicators.map((m, i) => (
              <div
                key={i}
                data-testid={`macro-${i}`}
                className={`px-6 md:px-10 ${i !== 0 ? "md:border-l border-[#E3DFD3]" : ""}`}
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-3">
                  {m.label}
                </div>
                <div className="font-heading text-5xl md:text-6xl text-[#1E382B] tracking-tighter font-light">
                  {m.prefix && <span className="text-3xl text-[#5C6A5F] mr-1">{m.prefix}</span>}
                  <CountUp
                    end={m.value}
                    duration={2.5}
                    separator="."
                    decimal=","
                    decimals={m.decimals}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span className="text-2xl text-[#5C6A5F]">{m.suffix}</span>
                </div>
                <div className="text-xs font-mono text-[#5C6A5F] mt-2">{m.note}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* NTP Highlight - editorial pull */}
        <Reveal delay={0.15}>
          <div className="grid md:grid-cols-12 gap-8 items-center bg-[#1E382B] text-[#F4F1EB] p-8 md:p-14 mb-20">
            <div className="md:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-mono mb-4">
                Sorotan · Nilai Tukar Petani
              </div>
              <h3 className="font-heading text-3xl md:text-5xl leading-tight">
                "Kesejahteraan petani <span className="italic text-[#D4A373]">luar biasa</span> — surplus signifikan di sektor perkebunan."
              </h3>
            </div>
            <div className="md:col-span-5 md:text-right" data-testid="ntp-stat">
              <div className="font-heading text-7xl md:text-8xl tracking-tighter font-light leading-none">
                <CountUp end={NTP_HIGHLIGHT} duration={2.5} separator="." decimal="," decimals={2} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-xs font-mono text-[#F4F1EB]/60 mt-3 uppercase tracking-[0.25em]">
                Indeks NTP 2024
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillars grid */}
        <Reveal>
          <div className="mb-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#8A948D] font-mono">
              Pilar Ekonomi & Tantangan
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-[#1E382B] mt-3">
              Lima fondasi membaca arah Mukomuko 2024.
            </h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`pillar-${i}`}
                className="bg-[#F4F1EB] border border-[#E3DFD3] p-7 hover:border-[#1E382B] hover:-translate-y-1 transition-all duration-500 group flex flex-col"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6"
                  style={{ backgroundColor: p.accent, color: "#F4F1EB" }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.25em] font-mono text-[#8A948D]">
                  {p.tag}
                </div>
                <h4 className="font-heading text-xl md:text-2xl text-[#1E382B] mt-2 leading-tight">
                  {p.title}
                </h4>

                <div className="mt-6 space-y-4 flex-1">
                  {p.stats.map((s, j) => (
                    <div key={j}>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono">
                        {s.label}
                      </div>
                      <div className="font-heading text-2xl text-[#1E382B] tracking-tight">
                        {s.prefix || ""}
                        <CountUp
                          end={s.value}
                          duration={2.2}
                          separator="."
                          decimal=","
                          decimals={s.decimals}
                          enableScrollSpy
                          scrollSpyOnce
                        />
                        {s.suffix || ""}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-[#5C6A5F] mt-6 pt-4 border-t border-[#E3DFD3] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
