import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Definition from "./components/Definition";
import Cards from "./components/Cards";
import Opinions from "./components/Opinions";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Definition />
      <Cards />
      <Opinions />
      <Footer />
    </div>
  );
}

export default App;
