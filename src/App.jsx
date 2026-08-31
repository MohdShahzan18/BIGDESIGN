import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeliverySystem from "./components/DeliverySystem";
import WhatWeSolve from "./components/hatWeSolve";
import About3D from "./components/About3D";
import Capabilities from "./components/Capabilities";
import Industries from "./components/Industries";
import Technology from "./components/Technology";
import IntegrationAI from "./components/IntegrationAI";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen bg-white text-black transition-colors duration-500 dark:bg-black dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Hero />
        <DeliverySystem />
        <WhatWeSolve />
        <About3D />
        <Capabilities />
        <Industries/>
        <Technology />
        <IntegrationAI/>
        <FAQ/>
        <FinalCTA/>
        <Footer />
      </main>
    </div>
  );
}

export default App;