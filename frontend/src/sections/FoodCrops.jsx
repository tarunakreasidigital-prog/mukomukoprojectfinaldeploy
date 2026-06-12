import CountUp from "react-countup";
import { Reveal } from "../components/Reveal";
import { foodCrops } from "../data/mukomuko";

const RICE_IMG =
  "https://images.unsplash.com/photo-1544644181-af0e1e14916f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxyaWNlJTIwZmllbGRzJTIwaGFydmVzdCUyMGluZG9uZXNpYXxlbnwwfHx8fDE3ODEwMTQ0Mjl8MA&ixlib=rb-4.1.0&q=85";

export const FoodCrops = () => {
  return (
    <section id="pangan" data-testid="section-food" className="relative py-24 md:py-36 bg-[#F4F1EB] overflow-hidden">
      {/* Hero image strip */}
      <div className="relative h-[280px] md:h-[420px] mb-20 overflow-hidden">
        <img src={RICE_IMG} alt="Sawah Mukomuko" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E382B]/40 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#F4F1EB] font-mono">
            §05 · Pertanian Pangan 2025
          </div>
          <h2 className="font-heading text-4xl md:text-6xl text-[#F4F1EB] tracking-tight mt-3 leading-none">
            Padi, jagung, <span className="italic">ubi.</span>
          </h2>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-3">
                Lubuk Pinang
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#1E382B] leading-tight">
                Kontributor utama dengan luas tanam padi sawah lebih dari <span className="italic text-[#5F7C51]">5.200 hektar.</span>
              </h3>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 gap-6">
              <div data-testid="food-stat-area">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Total Luas Tanam Padi</div>
                <div className="font-heading text-5xl md:text-6xl text-[#1E382B] tracking-tighter font-light">
                  <CountUp end={8627.04} duration={2.5} separator="." decimal="," decimals={2} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-xs font-mono text-[#5C6A5F] mt-1">Hektar (Sawah + Gogo)</div>
              </div>
              <div data-testid="food-stat-productivity">
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Produktivitas Padi</div>
                <div className="font-heading text-5xl md:text-6xl text-[#1E382B] tracking-tighter font-light">
                  <CountUp end={65.08} duration={2.5} separator="." decimal="," decimals={2} enableScrollSpy scrollSpyOnce />
                </div>
                <div className="text-xs font-mono text-[#5C6A5F] mt-1">Ku/Ha</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-4 mt-16">
          {foodCrops.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="border border-[#E3DFD3] bg-[#FCFBF8] p-6 hover:bg-[#1E382B] hover:text-[#F4F1EB] transition-colors duration-500 group h-full"
                data-testid={`crop-card-${i}`}
              >
                <div className="w-10 h-10 mb-6" style={{ backgroundColor: c.color }} />
                <div className="text-[10px] uppercase tracking-[0.25em] font-mono opacity-60 mb-2">
                  Komoditas
                </div>
                <h4 className="font-heading text-2xl leading-tight mb-6">{c.name}</h4>
                <div className="pt-4 border-t border-current border-opacity-20 space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono">Luas</div>
                    <div className="font-mono text-base">{c.area.toLocaleString("id-ID")} Ha</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-mono">Produktivitas</div>
                    <div className="font-mono text-base">{c.productivity.toLocaleString("id-ID")} Ku/Ha</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
