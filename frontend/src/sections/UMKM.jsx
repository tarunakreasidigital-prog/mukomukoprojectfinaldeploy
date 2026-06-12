import CountUp from "react-countup";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Reveal } from "../components/Reveal";
import { TrendingUp, Sparkles, ShoppingBag, Factory, Wheat, Fish, MapPin, Palette } from "lucide-react";

const pdrbSectors = [
  { name: "Pertanian, Kehutanan & Perikanan", value: 47.65, color: "#1E382B" },
  { name: "Ekonomi Kreatif", value: 28.10, color: "#B5533B" },
  { name: "Perdagangan Besar & Eceran", value: 15.42, color: "#8A7056" },
  { name: "Industri Pengolahan", value: 10.80, color: "#D4A373" },
];

const buyingIndicators = [
  { label: "NTP — Nilai Tukar Petani", value: 181.90, decimals: 2, note: "Surplus daya beli petani sangat tinggi" },
  { label: "NTN — Nilai Tukar Nelayan", value: 106.63, decimals: 2, note: "Daya beli nelayan positif tipis" },
  { label: "Inflasi YoY (Mei 2025)", value: -0.05, decimals: 2, suffix: "%", note: "Deflasi ringan — harga stabil" },
  { label: "Indeks Gini", value: 0.23, decimals: 2, note: "Konsumsi sangat merata antar kelompok" },
  { label: "Tingkat Kemiskinan", value: 10.76, decimals: 2, suffix: "%", note: "Tren menurun" },
  { label: "Pengangguran Terbuka", value: 2.41, decimals: 2, suffix: "%", note: "Serapan kerja tinggi" },
];

const sectorMap = [
  { icon: Wheat, name: "Perkebunan Rakyat", base: "Petani swadaya sawit (>2,04 juta ton) & karet (31,9 ribu ton)", challenge: "Jalan produksi; ketergantungan harga komoditas mentah" },
  { icon: TrendingUp, name: "Peternakan", base: "Peternak sapi rakyat 29.000 ekor; 70% terapkan SISKA", challenge: "Akses pakan, bibit, dan pasar" },
  { icon: Fish, name: "Perikanan", base: "Nelayan tangkap (24.915 ton) & budidaya (8.611 ton)", challenge: "Minim cold storage & pasar modern" },
  { icon: Palette, name: "Ekonomi Kreatif", base: "Kuliner olahan, kriya, perdagangan (28,10% PDRB)", challenge: "Akses modal, kemasan & digitalisasi" },
  { icon: MapPin, name: "Pariwisata", base: "UMKM jasa di Pantai Pandan Wangi, Danau Nibung, Batu Kumbang", challenge: "Konektivitas & infrastruktur wisata minim" },
];

const pendukung = [
  "Rasio elektrifikasi 99,99% & SUTT 150 kV — pasokan energi andal",
  "Akses air minum layak 90%",
  "Daya beli petani sangat tinggi (NTP 181,90)",
  "Harga stabil (deflasi) menjaga margin usaha",
  "Bonus demografi sebagai tenaga kerja & pasar",
];

const penghambat = [
  "Kemantapan jalan kabupaten baru 46,58% — biaya logistik tinggi",
  "Minimnya cold storage & pasar modern",
  "Hilirisasi lambat — UMKM tertahan di produk mentah",
  "PAD rendah (Rp 48,18 M) — ruang fiskal pemberdayaan terbatas",
  "Sebagian besar usaha mikro belum terformalkan",
];

const peluang = [
  "Hilirisasi skala mikro/koperasi untuk produk turunan CPO & karet",
  "Cold storage & kemitraan pemasaran bagi UMKM perikanan",
  "Digitalisasi UMKM (pemasaran daring & pembayaran digital)",
  "Penguatan ekonomi kreatif — kuliner olahan & kriya",
  "Pemberdayaan UMKM perempuan untuk menekan kesenjangan gender",
  "Pengembangan UMKM pariwisata dengan konektivitas yang membaik",
];

const PieTip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-[#FCFBF8] border border-[#E3DFD3] p-3 shadow-sm">
      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono">{d.name}</div>
      <div className="font-heading text-2xl text-[#1E382B] mt-1">{d.value.toLocaleString("id-ID", { minimumFractionDigits: 2 })}%</div>
    </div>
  );
};

export const UMKM = () => {
  return (
    <section id="umkm" data-testid="section-umkm" className="relative py-24 md:py-36 bg-[#FCFBF8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono mb-4">
                §07 · Ekonomi Mikro & UMKM
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl text-[#1E382B] tracking-tight leading-[1.05]">
                Denyut ekonomi rakyat
                <span className="italic text-[#B5533B]"> — usaha mikro sebagai tulang punggung.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-[#5C6A5F] leading-relaxed">
                Disarikan dari RPJMD/RKPD Mukomuko 2024/2025 — basis usaha rakyat
                pada sektor agro, perdagangan, dan ekonomi kreatif dengan daya
                beli rumah tangga yang sehat dan inklusif.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Top headline stats */}
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-3 gap-0 border-t border-b border-[#E3DFD3] py-12 mb-20">
            {[
              { icon: Sparkles, label: "Ekonomi Kreatif", val: 28.10, suf: "%", note: "Pangsa PDRB 2024" },
              { icon: ShoppingBag, label: "Perdagangan Eceran", val: 15.42, suf: "%", note: "Sektor basis UMKM" },
              { icon: TrendingUp, label: "Nilai Tukar Petani", val: 181.90, suf: "", note: "Indeks NTP 2024" },
            ].map((s, i) => (
              <div key={i} data-testid={`umkm-top-${i}`} className={`px-6 md:px-10 ${i !== 0 ? "md:border-l border-[#E3DFD3]" : ""}`}>
                <s.icon size={20} strokeWidth={1.4} className="text-[#8A7056] mb-4" />
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">{s.label}</div>
                <div className="font-heading text-5xl md:text-6xl text-[#1E382B] tracking-tighter font-light">
                  <CountUp end={s.val} duration={2.4} decimals={2} decimal="," separator="." enableScrollSpy scrollSpyOnce />
                  <span className="text-2xl text-[#5C6A5F]">{s.suf}</span>
                </div>
                <div className="text-xs font-mono text-[#5C6A5F] mt-2">{s.note}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* PDRB pie + buying power grid */}
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="border border-[#E3DFD3] p-6 md:p-8 bg-[#F4F1EB]">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Struktur PDRB 2024</div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#1E382B] mb-6">Pangsa sektor terhadap ekonomi.</h3>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie data={pdrbSectors} cx="50%" cy="50%" innerRadius={60} outerRadius={110} dataKey="value" strokeWidth={2} stroke="#F4F1EB">
                    {pdrbSectors.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Pie>
                  <Tooltip content={<PieTip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {pdrbSectors.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3" style={{ background: s.color }} />
                      <span className="text-[#1E382B]">{s.name}</span>
                    </div>
                    <span className="font-mono text-[#5C6A5F]">{s.value.toFixed(2)}%</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8A948D] mt-4 italic">*Ekonomi kreatif sebagian beririsan dengan perdagangan & industri pengolahan.</p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.15}>
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Daya Beli & Konsumsi Rumah Tangga</div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#1E382B] mb-8">Enam indikator yang menggambarkan kesehatan permintaan domestik.</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {buyingIndicators.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    data-testid={`buying-${i}`}
                    className="border border-[#E3DFD3] p-5 bg-[#F4F1EB] hover:border-[#1E382B] transition-colors"
                  >
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono mb-2 leading-tight min-h-[28px]">{b.label}</div>
                    <div className="font-heading text-3xl text-[#1E382B] tracking-tight">
                      <CountUp end={b.value} duration={2} decimals={b.decimals} decimal="," separator="." enableScrollSpy scrollSpyOnce />
                      {b.suffix || ""}
                    </div>
                    <div className="text-[10px] text-[#5C6A5F] mt-2 leading-snug">{b.note}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sector cards */}
        <Reveal>
          <div className="mb-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono">Peta Usaha Mikro per Sektor</div>
            <h3 className="font-heading text-3xl md:text-4xl text-[#1E382B] mt-2">Lima ranah pelaku mikro & tantangannya.</h3>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 mb-20">
          {sectorMap.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                data-testid={`umkm-sector-${i}`}
                className="border border-[#E3DFD3] p-6 bg-[#F4F1EB] hover:bg-[#1E382B] hover:text-[#F4F1EB] transition-colors duration-500 group flex flex-col"
              >
                <Icon size={22} strokeWidth={1.4} className="mb-5 text-[#8A7056] group-hover:text-[#D4A373]" />
                <h4 className="font-heading text-2xl leading-tight">{s.name}</h4>
                <div className="mt-5 pt-4 border-t border-current border-opacity-20 flex-1">
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono mb-2">Basis Pelaku</div>
                  <div className="text-sm leading-snug">{s.base}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-current border-opacity-20">
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono mb-2">Tantangan</div>
                  <div className="text-sm leading-snug">{s.challenge}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pendukung vs Penghambat */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-0 border-t border-[#E3DFD3]">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#E3DFD3]" data-testid="pendukung">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#5F7C51]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#5F7C51] font-mono">Faktor Pendukung</span>
              </div>
              <h4 className="font-heading text-2xl md:text-3xl text-[#1E382B] mb-6 leading-tight">Lima keunggulan yang mempermudah UMKM tumbuh.</h4>
              <ul className="space-y-3">
                {pendukung.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[#1E382B]">
                    <span className="font-mono text-xs text-[#5F7C51] mt-1.5">0{i + 1}</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-12" data-testid="penghambat">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#B5533B]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono">Faktor Penghambat</span>
              </div>
              <h4 className="font-heading text-2xl md:text-3xl text-[#1E382B] mb-6 leading-tight">Lima beban struktural yang harus diurai.</h4>
              <ul className="space-y-3">
                {penghambat.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[#1E382B]">
                    <span className="font-mono text-xs text-[#B5533B] mt-1.5">0{i + 1}</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Peluang */}
        <Reveal>
          <div className="mt-20 bg-[#1E382B] text-[#F4F1EB] p-8 md:p-14">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-mono mb-4">Rekomendasi</div>
                <h4 className="font-heading text-3xl md:text-4xl leading-tight">Enam peluang pengembangan UMKM Mukomuko.</h4>
              </div>
              <ul className="md:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {peluang.map((p, i) => (
                  <li key={i} className="flex gap-3 text-[#F4F1EB]/90 border-t border-[#F4F1EB]/15 pt-4">
                    <span className="font-mono text-xs text-[#D4A373]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="leading-relaxed text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
