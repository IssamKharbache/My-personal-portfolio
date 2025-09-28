import { Toaster } from "sonner";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Cursor from "./components/cursor/Cursor";
import { useContext } from "react";
import { modalContext } from "./context/modalContext";
function App() {
  const { showModalcv } = useContext(modalContext);
  if (showModalcv) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div>
      <Cursor />
      <section id="home">
        <NavBar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>

      <section>
        <About />
      </section>

      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Projects />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
