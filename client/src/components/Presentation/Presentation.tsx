import "./Presentation.css";

export default function Presentation() {
  return (
    <section className="top">
      <article className="presentation">
        <img src="../../src/assets/images/th.png" alt="" />
        <div className="text-presentation">
          <h2>Hey, je m'appel Thomas</h2>
          <p>je suis développeur frontend</p>
          <p>et designer UX / UI !</p>
        </div>
      </article>
      <article className="buttons">
        <button className="btn-dl" type="button">
          Télécharger mon CV <i className="material-icons">face</i>
        </button>
        <button className="btn-about" type="button">
          À propos de moi <i className="material-icons">bolt</i>
        </button>
      </article>
    </section>
  );
}
