// Data ekstraksi infografis Kabupaten Mukomuko, Provinsi Bengkulu

export const tbsPricing = {
  period: "Periode II April 2026",
  authority: "Dinas Tanaman Pangan, Hortikultura dan Perkebunan Provinsi Bengkulu",
  indikator: {
    indeksK: 83.55,
    cpo: 16253.46,
    pk: 15379.28,
  },
  hargaUmur: [
    { umur: "3 Tahun", harga: 2926.46 },
    { umur: "4 Tahun", harga: 3055.12 },
    { umur: "5 Tahun", harga: 3158.40 },
    { umur: "6 Tahun", harga: 3220.18 },
    { umur: "7 Tahun", harga: 3289.50 },
    { umur: "8 Tahun", harga: 3348.74 },
    { umur: "9 Tahun", harga: 3411.92 },
    { umur: "10-20 Tahun", harga: 3463.54 },
    { umur: "21 Tahun", harga: 3527.60 },
  ],
};

export const plantationCompanies = [
  { name: "PT Agro Muko", area: 22914, color: "#1E382B" },
  { name: "PT Dharia Darma Pratama", area: 18001, color: "#5F7C51" },
  { name: "PT PD Perkebunan Aceh Timur", area: 3126, color: "#8A7056" },
  { name: "PT Sentosa Sawit Lestari", area: 1850, color: "#B5533B" },
  { name: "PT Bukit Mas Indah", area: 1240, color: "#D4A373" },
  { name: "Unit Pengolahan Skala Kecil (10+)", area: 850, color: "#A89074" },
];

export const smallholderStats = {
  "2024": {
    palm: { area: 108967, production: 2031602300, households: 53785 },
    rubber: { area: 9741, production: 7101278, households: 8500 },
    coconut: { area: 709, production: 382041, households: 2280 },
    pinang: { area: 211, farmers: 1170 },
  },
  "2025": {
    palm: { area: 108987, production: 1920000000, households: 53795 },
    rubber: { area: 9730, production: 7300000, households: 8596 },
    coconut: { area: 712, production: 385000, households: 2319 },
    pinang: { area: 215, farmers: 1180 },
  },
};

export const irrigationPlan = [
  {
    name: "D.I Air Payang II",
    value: 1032,
    unit: "Meter",
    type: "Jaringan",
    desc: "Total peningkatan saluran irigasi gabungan dalam dua segmen utama.",
  },
  {
    name: "D.I Air Lubuk Enau",
    value: 336,
    unit: "Meter",
    type: "Jaringan",
    desc: "Peningkatan jaringan irigasi berlokasi di area Bukit Benang.",
  },
  {
    name: "D.I Air Lubuk Bangko",
    value: 304,
    unit: "Meter",
    type: "Jaringan",
    desc: "Pekerjaan fisik untuk memperkuat distribusi air di wilayah Lubuk Bangko.",
  },
  {
    name: "D.I Air Lubuk Angit",
    value: 1,
    unit: "Unit",
    type: "Bendung",
    desc: "Pembangunan satu unit bendung beserta jaringan irigasinya secara terintegrasi.",
    coords: "X: 766739.30 / Y: 9724338.50",
  },
  {
    name: "D.I Air Selagan Kecil",
    value: 1,
    unit: "Unit",
    type: "Bendung",
    desc: "Fokus pada peningkatan infrastruktur bendung untuk mengoptimalkan debit air.",
    coords: "X: 762485.30 / Y: 9720688.50",
  },
  {
    name: "D.I Air Tfiuh",
    value: 1,
    unit: "Unit",
    type: "Bendung",
    desc: "Konstruksi satu unit infrastruktur irigasi di lokasi strategis.",
  },
];

export const foodCrops = [
  { name: "Padi (Sawah+Gogo)", area: 8627.04, productivity: 65.08, color: "#5F7C51" },
  { name: "Jagung", area: 315.35, productivity: 111.23, color: "#D4A373" },
  { name: "Ubi Kayu", area: 64.00, productivity: 329.72, color: "#B5533B" },
  { name: "Kacang Tanah", area: 28.5, productivity: 14.2, color: "#8A7056" },
  { name: "Kedelai", area: 12.3, productivity: 13.8, color: "#A89074" },
];

export const lp2bData = [
  { kecamatan: "Lubuk Pinang", luas: 2149.596 },
  { kecamatan: "Selagan Raya", luas: 827.585 },
  { kecamatan: "XIV Koto", luas: 596.880 },
  { kecamatan: "Air Manjuto", luas: 312.450 },
  { kecamatan: "Ipuh", luas: 285.120 },
  { kecamatan: "V Koto", luas: 198.340 },
  { kecamatan: "Air Dikit", luas: 142.220 },
  { kecamatan: "Penarik", luas: 98.640 },
  { kecamatan: "Air Rami", luas: 67.310 },
  { kecamatan: "Malin Deman", luas: 45.180 },
  { kecamatan: "Kota Mukomuko", luas: 3.624 },
  { kecamatan: "Pondok Suguh", luas: 0 },
  { kecamatan: "Sungai Rumbai", luas: 0 },
  { kecamatan: "Teras Terunjam", luas: 0 },
  { kecamatan: "Teramang Jaya", luas: 0 },
];

export const lp2bTotal = 4675.170;
