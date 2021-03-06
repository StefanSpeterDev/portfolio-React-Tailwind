import React from "react";
import About from "../about/About";
import Client from "../client/Client";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Work from "../work/Work";
import ScrollTop from "../scrollTop/ScrollTop";
import Skills from "../skills/skills";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Client />
      <Work />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Home;
