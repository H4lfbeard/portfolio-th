import { Link } from "react-router-dom";
import "./ProjectPresentation.css";

interface ProjectPresentationProps {
  title: string;
  description: string;
  img1: string;
  img2: string;
  url: string;
}

export default function ProjectPresentation({ title, description, img1, img2, url }: ProjectPresentationProps) {
  return (
    <>
      <section className="project-presentation">
        <div className="title">
          <p>Présentation</p>
          <h3>du projet {title}</h3>
        </div>
        <article className="project-article">
          <img src={img1} alt="" />
          <p>
            {description}
          </p>
        </article>
      </section>

      <section className="project-description">
        <article className="project-article-description">
          <div className="project-stack">
            <p>La stack</p>
            <h3>du projet</h3>
            <div className="stack-logo">
              <article className="logo">
                <img src="../../src/assets/pictos/html.svg" alt="" />
                <p>HTML</p>
              </article>
              <article className="logo">
                <img src="../../src/assets/pictos/css.svg" alt="" />
                <p>CSS</p>
              </article>
              <article className="logo">
                <img src="../../src/assets/pictos/react.svg" alt="" />
                <p>React</p>
              </article>
              <article className="logo">
                <img src="../../src/assets/pictos/mysql.svg" alt="" />
                <p>MySQL</p>
              </article>
            </div>
            <Link to={url} >
            <button className="btn-github" type="button">
              Github
            </button>
            </Link>
          </div>
          <img src={img2} alt="" />
        </article>
      </section>
    </>
  );
}
