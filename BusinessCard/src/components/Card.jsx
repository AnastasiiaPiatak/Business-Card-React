import About from "./About";
import Interests from "./Interests";
import MainInfo from "./MainInfo";
import SocialLinks from "./SocialLinks";
import photo from "./images/Photo.jpg";

export default function Card() {
  return (
    <>
      <div className="card">
        <img src={photo} alt="Anastasiia Piatak photo" className="card__img" />
        <MainInfo />
        <About />
        <Interests />
        <SocialLinks />
      </div>
    </>
  );
}
