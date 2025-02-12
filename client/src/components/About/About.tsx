import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="title">
      <p>Présentation</p>
      <h3>À propos de moi</h3>
      </div>
      <article className="about-article">
        <div className="text-presentation">
          <div className="personality-adjective">
            <article className="personality-box">
              <i className="material-icons">emoji_objects</i>
              <h4>Créativité</h4>
            </article>
            <article className="personality-box">
              <i className="material-icons">signpost</i>
              <h4>Adaptation</h4>
            </article>
            <article className="personality-box">
              <i className="material-icons">handshake</i>
              <h4>Sociabilité</h4>
            </article>
          </div>
          <p>Après plus de 7 années à travailler en tant que designer et intégrateur web aux côtés de développeurs, j’ai décidé de moi aussi commencer à coder mes propres applications. 
          J’ai donc profité d’avoir l’opportunité de prendre un départ volontaire de mon ancienne entreprise pour me former dans développement front-end en Javascript et ReactJS afin d’ajouter une corde de plus à mon arc de designer.
          J’espère pouvoir mettre toutes mon expérience ainsi que mes compétences au service d’une nouvelle aventure.</p><br/>
          <p>Dynamique, autonome, coopératif et passionné, je serais ravi de rejoindre votre équipe pour y apporter mon expertise et ma bonne humeur ! </p>
          <button className="btn-contact" type="button">
            Contactez moi
          </button>
        </div>
        <img src="../../src/assets/images/tom.jpg" alt="" />
      </article>
    </section>
  );
}
