import "../../App.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import ProjectPresentation from "../../components/ProjectPresentation/ProjectPresentation";

export default function ProjectPage() {
  return (
    <>
      <HeroImage />
      <section className="project-page">
        <ProjectPresentation />
      </section>
    </>
  );
}
