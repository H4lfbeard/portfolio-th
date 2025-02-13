import "./ProjectPresentation.css";

export default function ProjectPresentation() {
  return (
    <>
      <section className="project-presentation">
        <div className="title">
          <p>Présentation</p>
          <h3>du projet</h3>
        </div>
        <article className="project-article">
          <img src="../../src/assets/images/mockup-phone.png" alt="" />
          <p>
            Après plus de 7 années à travailler en tant que designer et
            intégrateur web aux côtés de développeurs, j’ai décidé de moi aussi
            commencer à coder mes propres applications. J’ai donc profité
            d’avoir l’opportunité de prendre un départ volontaire de mon
            ancienne entreprise pour me former dans développement front-end en
            Javascript et ReactJS afin d’ajouter une corde de plus à mon arc de
            designer. J’espère pouvoir mettre toutes mon expérience ainsi que
            mes compétences au service d’une nouvelle aventure.
          </p>
        </article>
      </section>

      <section className="project-description">
        <article className="project-article-description">
          <div className="project-stack">
            <p>Présentation</p>
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
            <button className="btn-github" type="button">
              Github
            </button>
          </div>
          <img src="../../src/assets/images/mockup-charte.png" alt="" />
        </article>
      </section>
    </>
  );
}
