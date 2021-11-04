import * as React from "react";

const Intro = () => {
    return (
        <div className="main-intro">
            <article className="my-self">
          <h2>Développeur Web Junior</h2>
          <p>En formation développeur web junior chez Becode. 
            Je suis fasciné par ce qui se cache derrière les nouvelles technologies que nous utilisons au quotidien.
            Mon intégration chez Becode m'a permis de me découvrir une réelle passion pour le monde de la programmation.</p>  
          <p>Vous pouvez télécharger mon CV ici: <a  href="assets/Loiclissens.pdf" download="Cv-Loiclissens"><img alt="Download Animation" width="50px" height="50px" src="assets/images/anim-card/dl.svg"/ ></a></p>
        </article>
        <article className="skills">
          <h2>Technologies</h2>
          <h3>Développement web</h3>
          <div className="dev-web-logo">
            <div className="dev-web-logo-row">
              <div className="dev-web-logo-single">
                <img src="assets/images/html5.svg" alt="HTML 5" />
              </div>
              <div className="dev-web-logo-single">
                <img src="assets/images/css3.svg" alt="CSS 3" />
              </div>
              <div className="dev-web-logo-single">
                <img src="assets/images/javascript.svg" alt="javascript" />
              </div>
              <div className="dev-web-logo-single">
                <img src="assets/images/sass.svg" alt="Sass" />
              </div>

              <div className="dev-web-logo-single">
                <img src="assets/images/php.svg" alt="PHP" />
              </div>
            </div>
            <div className="dev-web-logo-row">
              <div className="dev-web-logo-single">
                <img src="assets/images/python.svg" alt="Python" />
              </div>
              <div className="dev-web-logo-single">
                <img src="assets/images/nodejs.svg" alt="NodeJS" />
              </div>
              <div className="dev-web-logo-single">
                <img src="assets/images/react.svg" alt="React" />
              </div>
              <div className="dev-web-logo-single">
                <img src="assets/images/electron.svg" alt="ElectronJS" />
              </div>
            </div>
          </div>
          <h3>Outils</h3>
          <div className="design-logo">
            <div className="dev-web-logo-single">
              <img src="assets/images/git.svg" alt="Git" />
            </div>
            <div className="dev-web-logo-single">
              <img src="assets/images/figma.svg" alt="Figma" />
            </div>
            <div className="dev-web-logo-single">
              <img src="assets/images/docker.svg" alt="Docker" />
            </div>
            <div className="dev-web-logo-single">
              <img src="assets/images/visualstudiocode.svg" alt="VSCode" />
            </div>
          </div>
        </article>
        </div>
    )
}
export default Intro