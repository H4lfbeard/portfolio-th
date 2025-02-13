import { Link } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";
import "./Project.css";

export default function Project() {
  const { projects } = useProjects();
  return (
    <section className="project">
      <div className="title">
        <p>Présentation</p>
        <h3>de mes projets</h3>
      </div>
      <div className="project-container">
        {projects.map((project) => (
          <Link to="/project" key={project.title}>
            <article className="project-box">
              <img src={project.img} alt="" />
              <h4>{project.title}</h4>
              <p>Voir plus +</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
