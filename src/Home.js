import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Footer from "./components/Footer";
import "./App.css";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Service />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
