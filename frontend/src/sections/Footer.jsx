export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-[#1E382B] text-[#F4F1EB] py-20 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-30 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4A373] font-mono mb-6">
              Jejak Agraria · Mukomuko
            </div>
            <h3 className="font-heading text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Data adalah <span className="italic text-[#D4A373]">peta jalan</span>
              <br />menuju pertanian berkelanjutan.
            </h3>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/50 font-mono mb-4">Sumber Data</div>
            <ul className="space-y-2 text-sm text-[#F4F1EB]/80">
              <li>Dinas Tanaman Pangan, Hortikultura &amp; Perkebunan Provinsi Bengkulu</li>
              <li>BPS Kabupaten Mukomuko</li>
              <li>Pemda Kabupaten Mukomuko</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#F4F1EB]/50 font-mono mb-4">Periode</div>
            <ul className="space-y-2 text-sm text-[#F4F1EB]/80">
              <li>Statistik Perkebunan 2024 — 2025</li>
              <li>Penetapan Harga TBS · April 2026</li>
              <li>Rencana Irigasi 2015</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F4F1EB]/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-[#F4F1EB]/50">
          <div>© {new Date().getFullYear()} · Jejak Agraria Mukomuko — Visualisasi Data Pertanian</div>
          <div className="uppercase tracking-[0.25em]">Bengkulu · Indonesia</div>
        </div>
      </div>
    </footer>
  );
};
