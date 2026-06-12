import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { Reveal } from "../components/Reveal";
import { Scale, BookOpen, FileText, Landmark, ShieldCheck, Building2 } from "lucide-react";

const layers = [
  {
    key: "konstitusi",
    label: "Konstitusi & TAP MPR",
    icon: ShieldCheck,
    items: [
      "UUD 1945 Pasal 28H ayat (1) — hak atas kesejahteraan & lingkungan hidup",
      "UUD 1945 Pasal 33 ayat (1) — asas kekeluargaan (dasar koperasi tani)",
      "UUD 1945 Pasal 33 ayat (3) — penguasaan negara atas SDA",
      "UUD 1945 Pasal 33 ayat (4) — demokrasi ekonomi",
      "TAP MPR No. XI/MPR/1998 — reforma agraria & perlindungan lahan pertanian",
    ],
  },
  {
    key: "uu",
    label: "Undang-Undang",
    icon: Scale,
    items: [
      "UU No. 5/1960 — Pokok-Pokok Agraria (UUPA)",
      "UU No. 41/1999 — Kehutanan",
      "UU No. 3/2003 — Pembentukan Kabupaten Mukomuko",
      "UU No. 18/2004 & 39/2014 — Perkebunan",
      "UU No. 41/2009 — Perlindungan LP2B",
      "UU No. 18/2012 — Pangan",
      "UU No. 19/2013 — Perlindungan & Pemberdayaan Petani",
      "UU No. 23/2014 — Pemerintahan Daerah",
      "UU No. 17/2017 — Koperasi",
      "UU No. 22/2019 — Sistem Budi Daya Pertanian Berkelanjutan",
      "UU No. 6/2023 — Penetapan Perppu Cipta Kerja menjadi UU",
    ],
  },
  {
    key: "pp",
    label: "Peraturan Pemerintah",
    icon: Landmark,
    items: [
      "PP No. 27/2014 jo. No. 28/2020 — Pengelolaan BMN/D",
      "PP No. 17/2015 jo. No. 72/2016 — Ketahanan Pangan & Gizi",
      "PP No. 54/2017 — BUMD",
      "PP No. 5/2021 — Perizinan Berusaha Berbasis Risiko",
      "PP No. 6/2021 — Perizinan Berusaha di Daerah",
      "PP No. 26 & 28/2021 — Penyelenggaraan Bidang Pertanian",
      "PP No. 125/2022 — Cadangan Pangan Pemerintah",
      "PP No. 7/2026 — Pelaksanaan UU No. 22/2019",
    ],
  },
  {
    key: "perpres",
    label: "Perpres & Inpres",
    icon: FileText,
    items: [
      "Perpres No. 66/2021 — Badan Pangan Nasional",
      "Perpres No. 125/2022 — Cadangan Pangan Pemerintah",
      "Perpres No. 14/2026 — Infrastruktur Pascapanen",
      "Inpres No. 9/2024 — Koperasi Desa/Kelurahan Merah Putih",
      "Inpres No. 2/2026 — Percepatan Swasembada Pangan",
      "Inpres No. 3/2026 — Pengadaan Jagung Dalam Negeri",
    ],
  },
  {
    key: "permen",
    label: "Permen & Standar",
    icon: BookOpen,
    items: [
      "Permentan No. 31/2017 — Kelas Mutu Beras",
      "Permentan No. 12/2018 — Produksi & Sertifikasi Benih",
      "Permentan No. 15/2021 & 34/2025 — Standar Usaha Pertanian",
      "Permentan No. 40/2024 — Pengawasan Mutu Hasil Pertanian",
      "Permenkop No. 08/2021 — Koperasi Multi Pihak (KMP)",
      "Permenkop No. 4–7/2023 — Koperasi (Multiguna, Produsen, Konsumen, Jasa)",
      "SNI 8420:2018 & SNI 8421:2018 — Standar mutu beras",
    ],
  },
  {
    key: "daerah",
    label: "Perda & Perbup",
    icon: Building2,
    items: [
      "Perda Prov. Bengkulu No. 3/2023 — RTRW Provinsi (terbaru)",
      "Pergub Bengkulu No. 2/2017 — Pengelolaan BMD",
      "Pergub Bengkulu No. 7/2023 — Rencana Aksi Pangan & Gizi",
      "Perda Mukomuko No. 7/2019 & 2/2023 — Perangkat Daerah",
      "Perda Mukomuko No. 7/2012 — Pembentukan BUMD",
      "Perda Mukomuko No. 6/2012 & 6/2015 — Perizinan Usaha Perkebunan",
      "Perbup Mukomuko No. 1/2024 — Koperasi Desa/Kelurahan",
      "Perbup Mukomuko No. 5/2024 — Pengelolaan BMD Pertanian",
    ],
  },
];

const matrix = [
  { aspek: "Pengelolaan & Pemanfaatan BMD", pusat: "PP 27/2014 jo. 28/2020; Permendagri 19/2016", daerah: "Pergub Bengkulu 2/2017; Perbup Mukomuko 5/2024", status: "perlu" },
  { aspek: "Kerja Sama Pemanfaatan Aset Pertanian (KSP/BGS-BSG) KMP", pusat: "PP 28/2020; Permendagri 19/2016", daerah: "Belum ada Perbup teknis khusus", status: "kosong" },
  { aspek: "Penataan Ruang, RTRW & LP2B", pusat: "UU 26/2007; UU 41/2009; UU 6/2023; PP 21/2021", daerah: "Perda Prov. 3/2023 RTRW; Perda RTRW Mukomuko", status: "selaras" },
  { aspek: "Perizinan Berusaha Berbasis Risiko", pusat: "UU 6/2023; PP 5/2021 & 6/2021; Permentan 15/2021 & 34/2025", daerah: "Sistem OSS nasional", status: "selaras" },
  { aspek: "Perkoperasian & KMP", pusat: "UU 17/2017; Permenkop 08/2021; Inpres 9/2024", daerah: "Perbup Mukomuko 1/2024", status: "selaras" },
  { aspek: "Ketahanan & Cadangan Pangan", pusat: "UU 18/2012; PP 17/2015; PP 125/2022; Perpres 66/2021", daerah: "Pergub Bengkulu 7/2023; Permentan 11/2018", status: "selaras" },
  { aspek: "Kelembagaan & Perangkat Daerah (OPD)", pusat: "UU 23/2014; PP 18/2016", daerah: "Perda Mukomuko 2/2023", status: "perlu" },
  { aspek: "BUMD", pusat: "PP 54/2017", daerah: "Pergub Bengkulu 15/2019; Perda Mukomuko 7/2012", status: "selaras" },
  { aspek: "Mutu, Benih & Tata Niaga Beras", pusat: "Permentan 31/2017; SNI 8420/8421:2018; Permentan 12/2018; Bapanas", daerah: "Mengikuti standar nasional", status: "selaras" },
  { aspek: "Penanaman Modal & Perlindungan Investasi", pusat: "UU 25/2007; UU 6/2023; UU 30/1999 (Arbitrase)", daerah: "Perlu Perbup tata cara kerja sama", status: "perlu" },
];

const statusMap = {
  selaras: { label: "Selaras", color: "#5F7C51", bg: "rgba(95, 124, 81, 0.12)" },
  perlu: { label: "Perlu Penyesuaian", color: "#D4A373", bg: "rgba(212, 163, 115, 0.18)" },
  kosong: { label: "Kosong / Perlu Dibentuk", color: "#B5533B", bg: "rgba(181, 83, 59, 0.15)" },
};

const recommendations = [
  "Susun Peraturan Bupati tentang Tata Cara Kerja Sama Pemanfaatan Aset Daerah sektor pertanian dalam kerangka kemitraan multipihak.",
  "Harmonisasi Perbup No. 5/2024 dengan PP No. 28/2020, Pergub Bengkulu No. 2/2017, dan Permendagri No. 19/2016.",
  "Pastikan kesesuaian dengan RTRW Provinsi Bengkulu No. 3/2023 dan ketentuan LP2B (delineasi & penerbitan KKPR).",
  "Bentuk KMP berbadan hukum sesuai Permenkop No. 08/2021 sebagai subjek hukum pengelola.",
  "Lembagakan koordinasi lintas-OPD (Tim Percepatan Pemanfaatan Aset Pertanian).",
];

export const Regulasi = () => {
  const [activeLayer, setActiveLayer] = useState("daerah");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => (filter === "all" ? matrix : matrix.filter((m) => m.status === filter)),
    [filter]
  );

  const counts = {
    total: matrix.length,
    selaras: matrix.filter((m) => m.status === "selaras").length,
    perlu: matrix.filter((m) => m.status === "perlu").length,
    kosong: matrix.filter((m) => m.status === "kosong").length,
  };

  const active = layers.find((l) => l.key === activeLayer);

  return (
    <section id="regulasi" data-testid="section-regulasi" className="relative py-24 md:py-36 bg-[#EAE5D9]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-3">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#B5533B] font-mono mb-4">
                §08 · Kerangka Regulasi
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-heading text-4xl md:text-6xl text-[#1E382B] tracking-tight leading-[1.05]">
                Enam lapis regulasi,
                <span className="italic text-[#B5533B]"> satu arah harmonisasi.</span>
              </h2>
              <p className="mt-6 max-w-3xl text-base md:text-lg text-[#5C6A5F] leading-relaxed">
                Ringkasan kajian akademik & kebijakan untuk pengembangan
                ekosistem pertanian terintegrasi Mukomuko 2026 — fokus pada
                kecukupan regulasi daerah untuk investasi dan harmonisasi
                pusat–daerah dalam kerangka Koperasi Multi Pihak (KMP).
              </p>
            </div>
          </div>
        </Reveal>

        {/* Status summary */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#1E382B]/15 py-10 mb-16">
            <div className="px-4 md:px-8" data-testid="stat-total">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono">Aspek Regulasi</div>
              <div className="font-heading text-5xl md:text-6xl text-[#1E382B] tracking-tighter font-light mt-2">
                <CountUp end={counts.total} duration={2} enableScrollSpy scrollSpyOnce />
              </div>
            </div>
            {["selaras", "perlu", "kosong"].map((k) => (
              <div key={k} className="px-4 md:px-8 md:border-l border-[#1E382B]/15" data-testid={`stat-${k}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2" style={{ background: statusMap[k].color }} />
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono">{statusMap[k].label}</div>
                </div>
                <div className="font-heading text-5xl md:text-6xl text-[#1E382B] tracking-tighter font-light mt-2">
                  <CountUp end={counts[k]} duration={2} enableScrollSpy scrollSpyOnce />
                  <span className="text-2xl text-[#5C6A5F]">/{counts.total}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Layered regulation explorer */}
        <Reveal>
          <div className="mb-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Eksplorasi Per Lapis</div>
            <h3 className="font-heading text-2xl md:text-3xl text-[#1E382B]">Pilih lapis hukum untuk membuka daftarnya.</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-6 mb-20">
          <div className="md:col-span-4 space-y-2" data-testid="layer-list">
            {layers.map((l) => {
              const Icon = l.icon;
              const isActive = activeLayer === l.key;
              return (
                <button
                  key={l.key}
                  onClick={() => setActiveLayer(l.key)}
                  data-testid={`layer-${l.key}`}
                  className={`w-full text-left flex items-center justify-between gap-3 p-4 border transition-all ${
                    isActive
                      ? "bg-[#1E382B] border-[#1E382B] text-[#F4F1EB]"
                      : "bg-[#FCFBF8] border-[#E3DFD3] text-[#1E382B] hover:border-[#1E382B]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} strokeWidth={1.4} />
                    <span className="font-heading text-lg">{l.label}</span>
                  </div>
                  <span className="font-mono text-xs opacity-60">{String(l.items.length).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FCFBF8] border border-[#E3DFD3] p-6 md:p-8"
                data-testid="layer-content"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">{active.label}</div>
                <div className="font-heading text-3xl md:text-4xl text-[#1E382B] mb-6">{active.items.length} dokumen tercatat.</div>
                <ul className="divide-y divide-[#E3DFD3]">
                  {active.items.map((it, i) => (
                    <li key={i} className="py-3 flex gap-4 text-[#1E382B]">
                      <span className="font-mono text-xs text-[#8A7056] mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="leading-relaxed">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Harmonization matrix */}
        <Reveal>
          <div className="mb-6">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#8A948D] font-mono mb-2">Matriks Harmonisasi Pusat–Daerah</div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-heading text-2xl md:text-3xl text-[#1E382B]">Sepuluh aspek dipetakan dengan status harmonisasi.</h3>
              <div className="flex flex-wrap gap-2" data-testid="matrix-filters">
                {[
                  { k: "all", label: "Semua" },
                  { k: "selaras", label: "Selaras" },
                  { k: "perlu", label: "Perlu Penyesuaian" },
                  { k: "kosong", label: "Kosong" },
                ].map((f) => (
                  <button
                    key={f.k}
                    onClick={() => setFilter(f.k)}
                    data-testid={`filter-${f.k}`}
                    className={`text-[10px] uppercase tracking-[0.25em] font-mono px-4 py-2 border transition-colors ${
                      filter === f.k
                        ? "bg-[#1E382B] text-[#F4F1EB] border-[#1E382B]"
                        : "border-[#1E382B]/30 text-[#1E382B] hover:border-[#1E382B]"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="bg-[#FCFBF8] border border-[#E3DFD3] mb-20 overflow-x-auto" data-testid="matrix-table">
          <table className="w-full text-left min-w-[760px]">
            <thead>
              <tr className="border-b border-[#E3DFD3] text-[10px] uppercase tracking-[0.2em] text-[#8A948D] font-mono">
                <th className="p-4 w-10">№</th>
                <th className="p-4">Aspek Regulasi</th>
                <th className="p-4">Regulasi Pusat</th>
                <th className="p-4">Produk Hukum Daerah</th>
                <th className="p-4 w-44">Status</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {filtered.map((m, i) => (
                  <motion.tr
                    key={m.aspek}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    data-testid={`matrix-row-${i}`}
                    className="border-b border-[#E3DFD3] last:border-b-0 hover:bg-[#EAE5D9]/30 transition-colors"
                  >
                    <td className="p-4 font-mono text-xs text-[#8A948D] align-top">{String(i + 1).padStart(2, "0")}</td>
                    <td className="p-4 font-heading text-lg text-[#1E382B] align-top leading-snug">{m.aspek}</td>
                    <td className="p-4 text-sm text-[#5C6A5F] align-top leading-relaxed">{m.pusat}</td>
                    <td className="p-4 text-sm text-[#5C6A5F] align-top leading-relaxed">{m.daerah}</td>
                    <td className="p-4 align-top">
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] font-mono"
                        style={{ background: statusMap[m.status].bg, color: statusMap[m.status].color }}
                      >
                        <span className="w-1.5 h-1.5" style={{ background: statusMap[m.status].color }} />
                        {statusMap[m.status].label}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Recommendations */}
        <Reveal>
          <div className="bg-[#1E382B] text-[#F4F1EB] p-8 md:p-14">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-mono mb-4">Rekomendasi Regulatif</div>
                <h4 className="font-heading text-3xl md:text-4xl leading-tight">Lima langkah menutup celah & menjamin investasi.</h4>
                <p className="mt-6 text-sm text-[#F4F1EB]/70 leading-relaxed italic">
                  "Yang diperlukan bukan penambahan norma baru di pusat, melainkan harmonisasi pada tataran daerah serta pemastian sinkronisasi vertikal dan horizontal."
                </p>
              </div>
              <ol className="md:col-span-8 space-y-1">
                {recommendations.map((r, i) => (
                  <li
                    key={i}
                    className="flex gap-5 py-5 border-b border-[#F4F1EB]/15 last:border-b-0"
                  >
                    <span className="font-heading text-4xl text-[#D4A373] tracking-tighter font-light shrink-0 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-base text-[#F4F1EB]/90 leading-relaxed pt-1">{r}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
