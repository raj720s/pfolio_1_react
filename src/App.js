import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  About,
  Header,
  Footer,
  Work,
  Testimonials,
  Skills,
} from "./Containers/Containerexport";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
