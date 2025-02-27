import { useParams } from "react-router-dom";
import "../../App.css";
import { useEffect } from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import ProjectPresentation from "../../components/ProjectPresentation/ProjectPresentation";
import { useProjects } from "../../components/context/ProjectContext";

export default function ProjectPage() {
  const { id } = useParams();
  const { projects } = useProjects();
  const project = projects.find((project) => project.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <h2>Project not fucking found</h2>;
  }
  return (
    <>
      <HeroImage heroImg={project.heroImg} title={project.title} />
      <section className="project-page">
        <ProjectPresentation
          title={project.title}
          description={project.description}
          img1={project.img1}
          img2={project.img2}
          url={project.url}
        />
      </section>
    </>
  );
}
