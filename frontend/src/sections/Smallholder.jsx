import { useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Reveal } from "../components/Reveal";
import { smallholderStats } from "../data/mukomuko";

const FARMER_IMG =
  "https://images.unsplash.com/photo-1512631118612-7bf02594062b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxmYXJtZXIlMjBpbmRvbmVzaWElMjBoYXJ2ZXN0fGVufDB8fHx8MTc4MTAxNDQyOXww&ixlib=rb-4.1.0&q=85";

const TooltipBox = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#FCFBF8] border border-[#E3DFD3] p-4 shadow-sm">
      <div className="text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono">{label}</div>
      <div className="font-heading text-2xl text-[#1E382B] mt-1">
        {payload[0].value.toLocaleString("id-ID")} <span className="text-sm text-[#5C6A5F]">Ha</span>
      </div>
    </div>
  );
};

export const Smallholder = () => {
  const [year, setYear] = useState("2025");
  const d = smallholderStats[year];

  const chartData = [
    { name: "Kelapa Sawit", area: d.palm.area, fill: "#1E382B" },
    { name: "Karet", area: d.rubber.area, fill: "#8A7056" },
    { name: "Kelapa Dalam", area: d.coconut.area, fill: "#5F7C51" },
    { name: "Pinang", area: d.pinang.area, fill: "#B5533B" },
  ];

  return (
    <section id="rakyat" data-testid="section-smallholder" className="relative py-24 md:py-36 bg-[#1E382B] text-[#F4F1EB] overflow-hidden">
      {/* Subtle image accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 mix-blend-luminosity pointer-events-none hidden lg:block">
        <img src={FARMER_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1E382B]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-mono mb-4">
                §03 · Perkebunan Rakyat
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-[1.05]">
                Dominasi mutlak
                <span className="italic text-[#D4A373]"> kelapa sawit.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Year tabs */}
        <Reveal delay={0.1}>
          <div className="flex items-center gap-0 mb-12 border-b border-[#F4F1EB]/15" data-testid="year-tabs">
            {["2024", "2025"].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                data-testid={`tab-year-${y}`}
                className={`px-6 md:px-10 py-4 text-sm uppercase tracking-[0.25em] font-mono transition-colors relative ${
                  year === y ? "text-[#F4F1EB]" : "text-[#F4F1EB]/40 hover:text-[#F4F1EB]/70"
                }`}
              >
                Tahun {y}
                {year === y && (
                  <motion.span
                    layoutId="year-underline"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#D4A373]"
                  />
                )}
              </button>
            ))}
            <div className="ml-auto text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/40 font-mono hidden md:block">
              Bandingkan periode →
            </div>
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-12 gap-10"
          >
            {/* Big stats */}
            <div className="md:col-span-5 space-y-10">
              <div data-testid="stat-palm-area">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-mono mb-3">
                  Lahan Sawit
                </div>
                <div className="font-heading text-6xl md:text-7xl tracking-tighter font-light">
                  <CountUp end={162322} duration={2} separator="." preserveValue />
                  <span className="text-2xl text-[#F4F1EB]/60 ml-3">Ha</span>
                </div>
                <div className="text-sm text-[#F4F1EB]/60 mt-2">&gt;90% dari total lahan perkebunan Kabupaten</div>
              </div>

              <div data-testid="stat-palm-production">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-mono mb-3">
                  Produksi TBS
                </div>
                <div className="font-heading text-5xl md:text-6xl tracking-tighter font-light">
                  <CountUp end={d.palm.production / 1_000_000} duration={2.5} separator="." decimal="," decimals={1} preserveValue />
                  <span className="text-xl text-[#F4F1EB]/60 ml-3">Juta Kg</span>
                </div>
                <div className="text-sm text-[#F4F1EB]/60 mt-2">
                  Total = {d.palm.production.toLocaleString("id-ID")} kg
                </div>
              </div>

              <div data-testid="stat-households">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-mono mb-3">
                  Rumah Tangga Petani
                </div>
                <div className="font-heading text-5xl md:text-6xl tracking-tighter font-light">
                  <CountUp end={d.palm.households} duration={2.2} separator="." preserveValue />
                </div>
                <div className="text-sm text-[#F4F1EB]/60 mt-2">Mayoritas bergantung pada sektor kelapa sawit</div>
              </div>
            </div>

            {/* Chart + other commodities */}
            <div className="md:col-span-7 space-y-10">
              <div className="border border-[#F4F1EB]/15 p-6 md:p-8" data-testid="chart-commodities">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/60 font-mono mb-6">
                  Luas Areal Komoditas (Ha) · {year}
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData} layout="vertical" margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                    <CartesianGrid strokeDasharray="2 4" stroke="#F4F1EB" strokeOpacity={0.1} />
                    <XAxis type="number" stroke="#F4F1EB" tick={{ fill: '#F4F1EB', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
                    <YAxis dataKey="name" type="category" stroke="#F4F1EB" tick={{ fill: '#F4F1EB', fontSize: 12, fontFamily: 'Manrope' }} axisLine={false} tickLine={false} width={110} />
                    <Tooltip content={<TooltipBox />} cursor={{ fill: '#F4F1EB', fillOpacity: 0.05 }} />
                    <Bar dataKey="area" radius={0} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#F4F1EB]/15 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-mono mb-2">Karet (#2)</div>
                  <div className="font-heading text-3xl">{d.rubber.area.toLocaleString("id-ID")} Ha</div>
                  <div className="text-xs text-[#F4F1EB]/60 mt-1">{(d.rubber.production / 1_000_000).toFixed(1)} Juta Kg Lateks</div>
                </div>
                <div className="border border-[#F4F1EB]/15 p-6">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#D4A373] font-mono mb-2">Pinang</div>
                  <div className="font-heading text-3xl">{d.pinang.farmers.toLocaleString("id-ID")} Petani</div>
                  <div className="text-xs text-[#F4F1EB]/60 mt-1">{d.pinang.area} Ha lahan</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
