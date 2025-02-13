import "./HeroImage.css";

interface HeroImageProps {
  heroImg: string;
  title: string;
}

export default function HeroImage({ heroImg, title }: HeroImageProps) {
  return (
    <section className="hero-section">
      <h2>Project {title}</h2>
      <img src={heroImg} alt={title} />
    </section>
  );
}
