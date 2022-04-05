import React from "react";
import About from "../about/About";
import Client from "../client/Client";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/Navbar2";
import Work from "../work/Work";

function Home() {
  return <>
      <Navbar />
      <Navbar2 />
      <Header />
      <About />
      <Client />
      <Work />
      <Contact />
      <Footer />
  </>;
}

export default Home;
