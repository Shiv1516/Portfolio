import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function Home() {
  return (
    <div className="bg1">
      <Header />
      <About />
      <Features />
      <Portfolio />
      <Resume />
      <Clients />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
