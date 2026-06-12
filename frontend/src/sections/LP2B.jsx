import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ArrowUpDown, MapPin } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { lp2bData, lp2bTotal } from "../data/mukomuko";

export const LP2B = () => {
  const [sort, setSort] = useState("desc");
  const [active, setActive] = useState("Lubuk Pinang");

  const sorted = useMemo(() => {
    const copy = [...lp2bData];
    copy.sort((a, b) => (sort === "desc" ? b.luas - a.luas : a.luas - b.luas));
    return copy;
  }, [sort]);

  const max = Math.max(...lp2bData.map((d) => d.luas));
  const activeData = lp2bData.find((d) => d.kecamatan === active) || lp2bData[0];

  return (
    <section id="lp2b" data-testid="section-lp2b" className="relative py-24 md:py-36 bg-[#EAE5D9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono mb-4">
                §06 · Lahan Berkelanjutan
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl text-[#1E382B] tracking-tight leading-[1.05]">
                Sebaran LP2B
                <span className="italic"> — peta ketahanan pangan.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-[#5C6A5F] leading-relaxed">
                Lahan Pertanian Pangan Berkelanjutan tersebar di 15 kecamatan
                Kabupaten Mukomuko, dengan Kecamatan Lubuk Pinang sebagai
                pusat utama.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-12 gap-8 mb-16 pb-16 border-b border-[#1E382B]/15">
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Total LP2B</div>
              <div className="font-heading text-6xl md:text-7xl text-[#1E382B] tracking-tighter font-light">
                <CountUp end={lp2bTotal} duration={2.5} separator="." decimal="," decimals={2} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm font-mono text-[#5C6A5F] mt-1">Hektar</div>
            </div>
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Pusat Utama</div>
              <div className="font-heading text-4xl md:text-5xl text-[#1E382B] tracking-tight">Lubuk Pinang</div>
              <div className="text-sm font-mono text-[#5C6A5F] mt-2">2.149,596 Ha · ≈46% total kabupaten</div>
            </div>
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Kecamatan Aktif</div>
              <div className="font-heading text-4xl md:text-5xl text-[#1E382B] tracking-tight">
                <CountUp end={lp2bData.filter(d => d.luas > 0).length} duration={2} enableScrollSpy scrollSpyOnce /> / 15
              </div>
              <div className="text-sm font-mono text-[#5C6A5F] mt-2">Sisanya: Pondok Suguh, Sungai Rumbai, Teras Terunjam, Teramang Jaya</div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Visual map (proportional squares) */}
          <Reveal className="md:col-span-7" delay={0.1}>
            <div className="bg-[#FCFBF8] border border-[#E3DFD3] p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono">
                  Peta Proporsi · Klik untuk detail
                </div>
                <MapPin size={16} strokeWidth={1.4} className="text-[#8A7056]" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3" data-testid="lp2b-map-grid">
                {lp2bData.map((d, i) => {
                  const size = d.luas === 0 ? 0.15 : Math.max(0.35, d.luas / max);
                  const isActive = active === d.kecamatan;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => setActive(d.kecamatan)}
                      data-testid={`map-cell-${i}`}
                      whileHover={{ scale: 1.04 }}
                      className={`aspect-square relative flex items-end p-3 transition-all border ${
                        isActive
                          ? "border-[#1E382B] ring-2 ring-[#1E382B]"
                          : "border-transparent"
                      } ${d.luas === 0 ? "bg-[#E3DFD3]" : ""}`}
                      style={d.luas > 0 ? {
                        background: `linear-gradient(to top, #1E382B ${size * 100}%, #EAE5D9 ${size * 100}%)`,
                      } : {}}
                    >
                      <span className={`text-[10px] font-mono leading-tight text-left ${
                        size > 0.5 ? "text-[#F4F1EB]" : "text-[#1E382B]"
                      }`}>
                        {d.kecamatan}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Active detail + sortable list */}
          <div className="md:col-span-5 space-y-6">
            <Reveal delay={0.15}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-[#1E382B] text-[#F4F1EB] p-8"
                data-testid="lp2b-active-detail"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-mono mb-2">Kecamatan Terpilih</div>
                <div className="font-heading text-4xl md:text-5xl tracking-tight">{activeData.kecamatan}</div>
                <div className="mt-6 pt-6 border-t border-[#F4F1EB]/15">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/60 font-mono">Luas LP2B</div>
                  <div className="font-heading text-5xl tracking-tighter font-light mt-1">
                    {activeData.luas.toLocaleString("id-ID", { minimumFractionDigits: 3 })}
                    <span className="text-xl text-[#F4F1EB]/60 ml-2">Ha</span>
                  </div>
                  <div className="text-xs font-mono text-[#F4F1EB]/60 mt-3">
                    {((activeData.luas / lp2bTotal) * 100).toFixed(2)}% dari total kabupaten
                  </div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-[#FCFBF8] border border-[#E3DFD3]">
                <button
                  onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
                  data-testid="lp2b-sort-toggle"
                  className="w-full flex items-center justify-between px-6 py-4 border-b border-[#E3DFD3] hover:bg-[#EAE5D9]/40 transition-colors"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono">
                    Daftar · {sort === "desc" ? "Terbesar" : "Terkecil"}
                  </span>
                  <ArrowUpDown size={14} strokeWidth={1.4} className="text-[#1E382B]" />
                </button>
                <div className="max-h-[320px] overflow-y-auto">
                  {sorted.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(d.kecamatan)}
                      data-testid={`lp2b-row-${i}`}
                      className={`w-full flex items-baseline justify-between px-6 py-3 border-b border-[#E3DFD3] last:border-b-0 hover:bg-[#EAE5D9]/40 transition-colors text-left ${
                        active === d.kecamatan ? "bg-[#EAE5D9]" : ""
                      }`}
                    >
                      <span className="text-[#1E382B]">{d.kecamatan}</span>
                      <span className="font-mono text-sm text-[#5C6A5F]">
                        {d.luas.toLocaleString("id-ID", { minimumFractionDigits: 3 })}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
