import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1690244564081-38c405aff6d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwzfHxwYWxtJTIwb2lsJTIwcGxhbnRhdGlvbiUyMGluZG9uZXNpYSUyMGFlcmlhbHxlbnwwfHx8fDE3ODEwMTQ0Mjl8MA&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden bg-[#1E382B]"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Perkebunan sawit Mukomuko dari udara"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E382B]/40 via-[#1E382B]/30 to-[#1E382B]/90" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-40 pb-24 min-h-screen flex flex-col justify-between">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="block w-12 h-px bg-[#F4F1EB]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#F4F1EB]/80 font-mono">
              Edisi Data · Mukomuko, Bengkulu
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-tight text-[#F4F1EB] max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Kekayaan Agraria
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block italic text-[#D4A373]"
            >
              Mukomuko.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 max-w-xl text-lg md:text-xl text-[#F4F1EB]/85 leading-relaxed"
          >
            Sebuah narasi data tentang pertumbuhan, lahan, dan masa depan
            pertanian di kabupaten terdepan Provinsi Bengkulu.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 pt-10 border-t border-[#F4F1EB]/15"
        >
          {[
            { value: 162322, label: "Hektar Sawit", suffix: "" },
            { value: 4675.17, label: "Ha LP2B", suffix: "", dec: 2 },
            { value: 53795, label: "Rumah Tangga", suffix: "" },
            { value: 15, label: "Kecamatan", suffix: "" },
          ].map((s, i) => (
            <div key={i} data-testid={`hero-stat-${i}`}>
              <div className="font-heading text-4xl md:text-5xl text-[#F4F1EB] tracking-tight">
                <CountUp end={s.value} duration={2.5} separator="." decimal="," decimals={s.dec || 0} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/60 mt-2 font-mono">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.a
          href="#harga"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 right-6 md:right-12 lg:right-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#F4F1EB]/70 hover:text-[#F4F1EB] transition-colors font-mono"
          data-testid="hero-scroll-cue"
        >
          Gulir
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={16} strokeWidth={1.5} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};
