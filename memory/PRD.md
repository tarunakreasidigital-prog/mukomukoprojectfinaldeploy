# PRD — Jejak Agraria Mukomuko

## Problem Statement
"buatkan landingpage interaktif sesuai data lampiran" — User uploaded a PDF infographic about Mukomuko Regency (Bengkulu, Indonesia) agricultural data covering 7 themes.

## User Choices
- Visual style: free (designer's choice → Organic Earthy editorial theme)
- Features: animated counters + charts + scroll reveal + interactive land map + year tabs (2024 vs 2025)
- Backend: frontend-only with static data extracted from PDF

## Architecture
- Frontend-only React app
- Cormorant Garamond (headings) + Manrope (body) + JetBrains Mono (data)
- Earthy palette: #F4F1EB (bg), #1E382B (forest green primary), #B5533B (terracotta accent), #D4A373 (warm gold)
- Stack: React 19, framer-motion, recharts, lucide-react, react-countup, Tailwind, shadcn UI

## Implemented (2026-12-09)
- Hero with parallax palm image, animated counters (108.987 Ha, 4.675,17 LP2B, 53.795 KK, 15 Kec.)
- §01 TBS Pricing — Indeks K, CPO, PK indicators + full age-price table with Rp 3.527,60 highlight
- §02 Plantation Companies — interactive bar viz with hover focus
- §03 Smallholder Stats — tabbed comparison 2024 vs 2025 with animated CountUp + Recharts horizontal bar
- §04 Irrigation Plan — alternating timeline with 6 projects, coordinates
- §05 Food Crops — rice image hero strip + 5 crop cards (Padi, Jagung, Ubi Kayu, Kacang Tanah, Kedelai)
- §06 LP2B Distribution — interactive proportional grid map + active detail card + sortable list (15 kecamatan)
- Footer with sources

## Files
- /app/frontend/src/App.js
- /app/frontend/src/index.css
- /app/frontend/src/data/mukomuko.js
- /app/frontend/src/components/{Nav,Reveal}.jsx
- /app/frontend/src/sections/{Hero,TBSPricing,Companies,Smallholder,Irrigation,FoodCrops,LP2B,Footer}.jsx

## Backlog (P1/P2)
- P1: Export-to-PDF button for the whole report
- P1: Search/filter input on LP2B kecamatan list
- P2: SVG geographic outline of Mukomuko regency
- P2: i18n (English version)
- P2: Print stylesheet for offline distribution
