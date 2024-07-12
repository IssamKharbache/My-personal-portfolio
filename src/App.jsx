import { Toaster } from "sonner";
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Cursor from "./components/cursor/Cursor";
function App() {
  return (
    <div>
      <Cursor />
      <Toaster richColors position="top-center" />
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
