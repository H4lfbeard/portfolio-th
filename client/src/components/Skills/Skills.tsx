import "./Skills.css";

export default function HeroImage() {
  return (
    <section className="project-description">
      <article className="skills-article">
        <div className="dev-skills">
          <p>Skills</p>
          <h3>développement</h3>
          <div className="dev-logo">
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
              <img src="../../src/assets/pictos/js.svg" alt="" />
              <p>Javascript</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/mysql.svg" alt="" />
              <p>MySQL</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/wp.svg" alt="" />
              <p>Wordpress</p>
            </article>
          </div>
        </div>

        <div className="design-skills">
          <p>Skills</p>
          <h3>design</h3>
          <div className="design-logo">
            <article className="logo">
              <img src="../../src/assets/pictos/xd.svg" alt="" />
              <p>Xd</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/ai.svg" alt="" />
              <p>Illustrator</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/ae.svg" alt="" />
              <p>After Effects</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/ps.svg" alt="" />
              <p>Photoshop</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/pr.svg" alt="" />
              <p>Premier Pro</p>
            </article>
            <article className="logo">
              <img src="../../src/assets/pictos/lrc.svg" alt="" />
              <p>Lightroom Classic</p>
            </article>
          </div>
        </div>
      </article>
    </section>
  );
}
