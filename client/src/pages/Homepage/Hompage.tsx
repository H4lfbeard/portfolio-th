import "../../App.css";
import About from "../../components/About/About.tsx";
import Presentation from "../../components/Presentation/Presentation.tsx";
import Project from "../../components/Project/Project.tsx";

export default function Homepage() {
  return (
    <section className="homepage">
      <Presentation />
      <About />
      <Project />
    </section>
  );
}
