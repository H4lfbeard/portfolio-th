import "../../App.css";
import About from "../../components/About/About.tsx";
import Presentation from "../../components/Presentation/Presentation.tsx";
import Project from "../../components/Project/Project.tsx";
import Skills from "../../components/Skills/Skills.tsx";

export default function Homepage() {
  return (
    <section className="homepage">
      <Presentation />
      <About />
      <Skills />
      <Project />
    </section>
  );
}
