import CountUp from "react-countup";
import { Reveal } from "../components/Reveal";
import { tbsPricing } from "../data/mukomuko";
import { TrendingUp, Droplet, Wheat } from "lucide-react";

const Indicator = ({ icon: Icon, label, value, prefix = "", suffix = "", decimals = 0, testid }) => (
  <div className="p-8 border border-[#E3DFD3] bg-[#FCFBF8] hover:border-[#1E382B] transition-colors duration-500 group" data-testid={testid}>
    <Icon size={22} strokeWidth={1.4} className="text-[#8A7056] mb-6" />
    <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-3">
      {label}
    </div>
    <div className="font-heading text-4xl md:text-5xl text-[#1E382B] tracking-tighter">
      {prefix}
      <CountUp
        end={value}
        duration={2.5}
        separator="."
        decimal=","
        decimals={decimals}
        enableScrollSpy
        scrollSpyOnce
      />
      {suffix}
    </div>
  </div>
);

export const TBSPricing = () => {
  return (
    <section id="harga" data-testid="section-tbs" className="relative py-24 md:py-36 bg-[#F4F1EB]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono mb-4">
                §01 · Komoditas Strategis
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl text-[#1E382B] tracking-tight leading-[1.05]">
                Harga TBS Kelapa Sawit
                <span className="italic text-[#B5533B]"> — Periode II April 2026.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-[#5C6A5F] leading-relaxed">
                {tbsPricing.authority} menetapkan harga pembelian Tandan Buah
                Segar (TBS) produksi pekebun berdasarkan hasil rapat tim
                penetapan sesuai regulasi.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-20">
          <Reveal delay={0.1}>
            <Indicator icon={TrendingUp} label="Indeks K" value={tbsPricing.indikator.indeksK} suffix="%" decimals={2} testid="indicator-k" />
          </Reveal>
          <Reveal delay={0.2}>
            <Indicator icon={Droplet} label="Harga CPO (Rp)" value={tbsPricing.indikator.cpo} decimals={2} testid="indicator-cpo" />
          </Reveal>
          <Reveal delay={0.3}>
            <Indicator icon={Wheat} label="Harga PK (Rp)" value={tbsPricing.indikator.pk} decimals={2} testid="indicator-pk" />
          </Reveal>
        </div>

        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 items-end pt-12 border-t border-[#E3DFD3]">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-3">
                Harga Berdasarkan Umur Tanaman
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#1E382B] tracking-tight leading-tight">
                Tanaman usia 21 tahun mencapai harga tertinggi.
              </h3>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-heading text-7xl md:text-8xl text-[#1E382B] tracking-tighter font-light">
                  <CountUp end={3527.60} duration={2.5} separator="." decimal="," decimals={2} enableScrollSpy scrollSpyOnce prefix="Rp " />
                </span>
              </div>
              <div className="text-sm text-[#5C6A5F] mt-2 font-mono">per kilogram · usia 21 tahun</div>
            </div>

            <div className="md:col-span-7" data-testid="table-umur">
              <div className="grid grid-cols-12 text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono pb-3 border-b border-[#E3DFD3]">
                <div className="col-span-5">Umur Tanaman</div>
                <div className="col-span-7 text-right">Harga TBS (Rp/Kg)</div>
              </div>
              {tbsPricing.hargaUmur.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 py-4 border-b border-[#E3DFD3] hover:bg-[#EAE5D9]/40 transition-colors group ${
                    row.umur === "21 Tahun" ? "bg-[#1E382B] text-[#F4F1EB] -mx-4 px-4" : ""
                  }`}
                  data-testid={`umur-row-${i}`}
                >
                  <div className={`col-span-5 ${row.umur === "21 Tahun" ? "font-heading text-xl italic" : "text-base"}`}>
                    {row.umur}
                  </div>
                  <div className={`col-span-7 text-right font-mono ${row.umur === "21 Tahun" ? "text-xl" : "text-base"}`}>
                    Rp {row.harga.toLocaleString("id-ID", { minimumFractionDigits: 2 })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
