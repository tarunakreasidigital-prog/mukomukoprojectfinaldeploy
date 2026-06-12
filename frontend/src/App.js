import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { Prolog } from "./sections/Prolog";
import { TBSPricing } from "./sections/TBSPricing";
import { Companies } from "./sections/Companies";
import { Smallholder } from "./sections/Smallholder";
import { FoodCrops } from "./sections/FoodCrops";
import { LP2B } from "./sections/LP2B";
import { UMKM } from "./sections/UMKM";
import { Regulasi } from "./sections/Regulasi";
import { Footer } from "./sections/Footer";

const Home = () => (
  <div data-testid="home-page" className="bg-[#F4F1EB] text-[#1E382B]">
    <Nav />
    <Hero />
    <Prolog />
    <TBSPricing />
    <Companies />
    <Smallholder />
    <FoodCrops />
    <LP2B />
    <UMKM />
    <Regulasi />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
