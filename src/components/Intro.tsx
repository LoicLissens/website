import * as React from "react";
import Tooltip from "../components/Tooltip";
// @ts-ignore
import htmlLogo from "../images/html5.svg";
// @ts-ignore
import cssLogo from "../images/css3.svg";
// @ts-ignore
import jsLogo from "../images/javascript.svg";
// @ts-ignore
import sassLogo from "../images/sass.svg";
// @ts-ignore
import phpLogo from "../images/php.svg";
// @ts-ignore
import pythonLogo from "../images/python.svg";
// @ts-ignore
import nodeLogo from "../images/nodejs.svg";
// @ts-ignore
import reactLogo from "../images/react.svg";
// @ts-ignore
import electronLogo from "../images/electron.svg";
// @ts-ignore
import gitLogo from "../images/git.svg";
// @ts-ignore
import figmaLogo from "../images/figma.svg";
// @ts-ignore
import dockerLogo from "../images/docker.svg";
// @ts-ignore
import vscodeLogo from "../images/visualstudiocode.svg";

const Intro = () => {
  return (
    <div className="main-intro">
      <article className="my-self">
        <h2>Développeur Web Junior</h2>
        <p>
          En formation développeur web junior chez Becode. Je suis fasciné par ce qui se cache derrière les nouvelles technologies que nous utilisons au quotidien. Mon intégration
          chez Becode m'a permis de me découvrir une réelle passion pour le monde de la programmation.
        </p>
        <p>
          Vous pouvez télécharger mon CV ici:{" "}
          <a href="assets/Loiclissens.pdf" download="Cv-Loiclissens">
            <img alt="Download Animation" width="50px" height="50px" src="assets/images/anim-card/dl.svg" />
          </a>
        </p>
      </article>
      <article className="skills">
        <h2>Technologies</h2>
        <h3>Développement web</h3>
        <div className="dev-web-logo">
          <div className="dev-web-logo-row">
            <Tooltip content="HTML5">
              <div className="dev-web-logo-single">
                <img src={htmlLogo} alt="HTML 5" />
              </div>
            </Tooltip>
            <div className="dev-web-logo-single">
              <img src={cssLogo} alt="CSS 3" />
            </div>
            <div className="dev-web-logo-single">
              <img src={jsLogo} alt="javascript" />
            </div>
            <div className="dev-web-logo-single">
              <img src={sassLogo} alt="Sass" />
            </div>

            <div className="dev-web-logo-single">
              <img src={phpLogo} alt="PHP" />
            </div>
          </div>
          <div className="dev-web-logo-row">
            <div className="dev-web-logo-single">
              <img src={pythonLogo} alt="Python" />
            </div>
            <div className="dev-web-logo-single">
              <img src={nodeLogo} alt="NodeJS" />
            </div>
            <div className="dev-web-logo-single">
              <img src={reactLogo} alt="React" />
            </div>
            <div className="dev-web-logo-single">
              <img src={electronLogo} alt="ElectronJS" />
            </div>
          </div>
        </div>
        <h3>Outils</h3>
        <div className="design-logo">
          <div className="dev-web-logo-single">
            <img src={gitLogo} alt="Git" />
          </div>
          <div className="dev-web-logo-single">
            <img src={figmaLogo} alt="Figma" />
          </div>
          <div className="dev-web-logo-single">
            <img src={dockerLogo} alt="Docker" />
          </div>
          <div className="dev-web-logo-single">
            <img src={vscodeLogo} alt="VSCode" />
          </div>
        </div>
      </article>
    </div>
  );
};
export default Intro;
