import React from "react";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import EducationTimeline from "./pages/EducationTimeline";
import Footer from "./pages/Footer";
import Landing from "./pages/Landing";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <EducationTimeline />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Footer />
    </div>
  );
}

export default App;
