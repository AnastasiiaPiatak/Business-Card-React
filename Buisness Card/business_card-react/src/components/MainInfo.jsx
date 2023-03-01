export default function MainInfo(){
    return (
      <>
        <h1>Anastasiia Piatak</h1>
        <h3>Front-End Developer</h3>
        <a href="https://anastasiiapiatak-portfolio.netlify.app">
          Personal Website
        </a>
        <div className="card__btns">
          <button type="button" className="card__btns email__btn">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <a href="mailto:iamsherlocked031199@gmail.com">Email</a>
          </button>
          <button type="button" className="card__btns linkedin__btn">
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
            <a href="www.linkedin.com/in/anastasiia-piatak-022609266">
              LinkedIn
            </a>
          </button>
        </div>
      </>
    );
}