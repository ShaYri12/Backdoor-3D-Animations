import Image from "next/image";
import HeroSection from './components/HeroSection'
import RealEstateInsight from "./components/RealEstateInsight";
import MapSection from "./components/MapSection";
import CalculateAdPotential from "./components/CalculateAdPotential";
import AnalyzeAdverts from "./components/AnalyzeAdverts";
import Zones from "./components/Zones";
import Ai from "./components/Ai";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="overflow-hidden">
        <HeroSection/>
        <RealEstateInsight/>
        <MapSection/>
        <CalculateAdPotential/>
        <AnalyzeAdverts/>
        <Zones/>
        <Ai/>
        <HowItWorks/>
        <FAQ/>
        <Footer/>
    </main>
  );
}
