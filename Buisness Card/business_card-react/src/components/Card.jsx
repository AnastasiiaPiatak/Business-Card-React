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
        <MainInfo/>
       </div>
      <MainInfo />
      <About />
      <Interests />
      <SocialLinks />
    </>
  );
}
