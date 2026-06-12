import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowUpDown, Users, Factory } from "lucide-react";
import { Reveal } from "../components/Reveal";

const hguCompanies = [
  { name: "PT. MUKOMUKO AGRO SEJAHTERA", area: 22914.00 },
  { name: "PT. BINA BUMI SEJAHTERA", area: 9901.00 },
  { name: "PT. DHARIA DARMA PRATAMA", area: 8100.00 },
  { name: "PT. PD. PERKEBUNAN ACEH TIMUR", area: 3126.00 },
  { name: "PT. AGRICINAL", area: 2300.00 },
  { name: "PT. VANDA MUKO", area: 2000.00 },
  { name: "PT. ASIA PERMAI LESTARI", area: 1800.00 },
  { name: "PT. SARI RIMBA RAFFLESIA", area: 1167.00 },
  { name: "PT. ALNO AGRO UTAMA", area: 1003.00 },
  { name: "PT. AGRO MUKO", area: 900.00 },
  { name: "PT. KARYA SAWITINDO MAS (I)", area: 300.00 },
  { name: "PT. KARYA SAWITINDO MAS (II)", area: 200.00 },
  { name: "PT. BUMI MENTARI KARYA", area: 178.00 },
  { name: "PT. ASRI RIMBA WIRMA BAKTI", area: 122.03 },
  { name: "PT. USAHA SAWIT MANDIRI", area: 80.16 },
  { name: "PT. KARYA AGRO SAWITINDO", area: 56.61 },
  { name: "PT. SAPTA SENTOSA JAYA ABADI", area: 50.00 },
  { name: "PT. SURYA ANDALAN PRIMATAMA", area: 25.00 },
  { name: "PT. MUKO PANEN RAYA ABADI", area: 22.80 },
  { name: "PT. GAJAH SAKTI SAWIT", area: 21.00 },
  { name: "PT. KARYA SAWITINDO MAS (III)", area: 19.60 },
  { name: "PT. MUKOMUKO INDAH LESTARI", area: 15.00 },
  { name: "PT. AGRI MITRA KARYA", area: 12.74 },
  { name: "PT. DDP LUBUK BENTO", area: 11.00 },
  { name: "PT. SENTOSA SEJAHTERA SEJATI", area: 7.40 },
];

const totalHGU = hguCompanies.reduce((s, c) => s + c.area, 0);
const totalRakyat = 108000;
const grandTotal = totalHGU + totalRakyat;

export const Companies = () => {
  const [hover, setHover] = useState(null);
  const [sort, setSort] = useState("desc");

  const sorted = useMemo(() => {
    const c = [...hguCompanies];
    c.sort((a, b) => (sort === "desc" ? b.area - a.area : a.area - b.area));
    return c;
  }, [sort]);

  const maxArea = hguCompanies[0].area;

  return (
    <section id="perusahaan" data-testid="section-companies" className="relative py-24 md:py-36 bg-[#EAE5D9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono mb-4">
                §02 · Konsentrasi Lahan
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl text-[#1E382B] tracking-tight leading-[1.05]">
                Dua wajah penguasaan lahan
                <span className="italic"> — korporasi vs petani rakyat.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-[#5C6A5F] leading-relaxed">
                Lahan sawit di Kabupaten Mukomuko terbagi dua: kebun rakyat
                yang mendominasi secara luas dan 25 perusahaan berbasis HGU
                yang sebagian besar terpusat pada beberapa pemain utama.
              </p>
            </div>
          </div>
        </Reveal>

        {/* COMPARISON BAR: HGU vs RAKYAT */}
        <Reveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-baseline justify-between mb-3 text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono">
              <span>Komposisi Total Lahan Sawit</span>
              <span>≈ {Math.round(grandTotal).toLocaleString("id-ID")} Ha</span>
            </div>
            <div className="flex h-14 md:h-20 w-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(totalRakyat / grandTotal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1E382B] flex items-center px-4 md:px-6 text-[#F4F1EB]"
                data-testid="bar-rakyat"
              >
                <span className="text-xs md:text-sm font-mono">
                  {((totalRakyat / grandTotal) * 100).toFixed(1)}% · Rakyat
                </span>
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(totalHGU / grandTotal) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#B5533B] flex items-center justify-end px-4 md:px-6 text-[#F4F1EB]"
                data-testid="bar-hgu"
              >
                <span className="text-xs md:text-sm font-mono">
                  {((totalHGU / grandTotal) * 100).toFixed(1)}% · Korporasi
                </span>
              </motion.div>
            </div>
          </div>
        </Reveal>

        {/* TWO BIG STATS */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <Reveal delay={0.1}>
            <div className="bg-[#1E382B] text-[#F4F1EB] p-8 md:p-12" data-testid="stat-rakyat">
              <div className="flex items-center gap-3 mb-6">
                <Users size={20} strokeWidth={1.4} className="text-[#D4A373]" />
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-mono">Perkebunan Rakyat</div>
              </div>
              <div className="font-heading text-6xl md:text-7xl tracking-tighter font-light leading-none">
                ±<CountUp end={108} duration={2.5} enableScrollSpy scrollSpyOnce />
                <span className="text-3xl text-[#F4F1EB]/60 ml-2">Ribu Ha</span>
              </div>
              <div className="text-sm font-mono text-[#F4F1EB]/60 mt-3">≈ 108.000 hektar · ~67% total</div>
              <div className="mt-8 pt-6 border-t border-[#F4F1EB]/15 text-[#F4F1EB]/85 leading-relaxed">
                Dikelola oleh <span className="font-mono text-[#D4A373]">~53.795 rumah tangga</span> petani lokal — basis ekonomi mikro pedesaan, sumber utama TBS untuk pabrik kelapa sawit di Mukomuko.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#FCFBF8] border border-[#E3DFD3] p-8 md:p-12" data-testid="stat-hgu">
              <div className="flex items-center gap-3 mb-6">
                <Factory size={20} strokeWidth={1.4} className="text-[#B5533B]" />
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono">Perusahaan (HGU)</div>
              </div>
              <div className="font-heading text-6xl md:text-7xl text-[#1E382B] tracking-tighter font-light leading-none">
                <CountUp end={totalHGU} duration={2.5} separator="." decimal="," decimals={2} enableScrollSpy scrollSpyOnce />
                <span className="text-3xl text-[#5C6A5F] ml-2">Ha</span>
              </div>
              <div className="text-sm font-mono text-[#5C6A5F] mt-3">≈ 53.000 hektar · ~33% total · 25 perusahaan</div>
              <div className="mt-8 pt-6 border-t border-[#E3DFD3] text-[#1E382B]/80 leading-relaxed">
                Tiga pemain teratas — <span className="font-mono text-[#B5533B]">PT. Mukomuko Agro Sejahtera, PT. Bina Bumi Sejahtera, PT. Dharia Darma Pratama</span> — menguasai &gt;75% lahan korporasi.
              </div>
            </div>
          </Reveal>
        </div>

        {/* FULL HGU LIST */}
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Daftar Lengkap · 25 Perusahaan HGU</div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#1E382B]">Seluruh korporasi sawit di Mukomuko.</h3>
            </div>
            <button
              onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
              data-testid="hgu-sort-toggle"
              className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-mono text-[#1E382B] border border-[#1E382B]/30 px-5 py-3 hover:bg-[#1E382B] hover:text-[#F4F1EB] transition-colors"
            >
              <ArrowUpDown size={14} strokeWidth={1.4} />
              {sort === "desc" ? "Terbesar dulu" : "Terkecil dulu"}
            </button>
          </div>
        </Reveal>

        <div className="bg-[#FCFBF8] border border-[#E3DFD3]" data-testid="hgu-list">
          <div className="hidden md:grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono px-6 py-4 border-b border-[#E3DFD3]">
            <div className="col-span-1">№</div>
            <div className="col-span-5">Nama Perusahaan</div>
            <div className="col-span-4">Proporsi terhadap pemain terbesar</div>
            <div className="col-span-2 text-right">Luas (Ha)</div>
          </div>
          {sorted.map((c, i) => {
            const pct = (c.area / maxArea) * 100;
            const isActive = hover === null || hover === i;
            return (
              <motion.div
                key={c.name}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                data-testid={`hgu-row-${i}`}
                className={`grid grid-cols-12 gap-2 px-6 py-5 border-b border-[#E3DFD3] last:border-b-0 items-center transition-opacity ${
                  isActive ? "opacity-100" : "opacity-30"
                } hover:bg-[#EAE5D9]/40`}
              >
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-[#8A948D]">{String(i + 1).padStart(2, "0")}</div>
                <div className="col-span-10 md:col-span-5 font-heading text-base md:text-lg text-[#1E382B] leading-tight">{c.name}</div>
                <div className="col-span-8 md:col-span-4 mt-2 md:mt-0">
                  <div className="h-[3px] bg-[#E3DFD3] relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
                      className="h-full bg-[#1E382B]"
                    />
                  </div>
                </div>
                <div className="col-span-4 md:col-span-2 text-right font-mono text-sm md:text-base text-[#1E382B] mt-2 md:mt-0">
                  {c.area.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
                </div>
              </motion.div>
            );
          })}
          <div className="grid grid-cols-12 gap-2 px-6 py-5 bg-[#1E382B] text-[#F4F1EB] items-center" data-testid="hgu-total">
            <div className="col-span-2 md:col-span-1 font-mono text-xs text-[#D4A373]">Σ</div>
            <div className="col-span-10 md:col-span-9 font-heading text-lg uppercase tracking-wide">Total Lahan HGU Korporasi</div>
            <div className="col-span-12 md:col-span-2 text-right font-mono text-base md:text-lg">
              {totalHGU.toLocaleString("id-ID", { minimumFractionDigits: 2 })} Ha
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
