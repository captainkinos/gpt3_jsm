import React from "react";
import "./app.css";

import {
  Footer,
  Header,
  Blog,
  Features,
  WhatGPT3,
  Possibility,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

//sampai 02:11:00
