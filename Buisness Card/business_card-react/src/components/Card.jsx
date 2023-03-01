import About from "./About";
import Interests from "./Interests";
import MainInfo from "./MainInfo";
import SocialLinks from "./SocialLinks";

export default function Card() {
  return (
    <>
      <div className="card">
        <img
          src="src/images/Photo.jpg"
          alt="Anastasiia Piatak photo"
          className="card__img"
        />
        <h1>Anastasiia Piatak</h1>
        <h3>Front-End developer</h3>
        <a href="https://anastasiiapiatak-portfolio.netlify.app">
          Anastasiia's website
        </a>
      </div>
      <MainInfo />
      <About />
      <Interests />
      <SocialLinks />
    </>
  );
}
