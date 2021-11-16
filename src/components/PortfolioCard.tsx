import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export interface PortfolioCardProps {
  cardTitle: string;
  svgAnimation?: { link: string; alt: string };
  screenProject?: { link: string; alt: string };
  links: { link: string; text: string }[];
  description: string;
}
const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div className="card">
      <div className="flip-card">
        <div className="card-front">
          <h2>{props.cardTitle}</h2>
          {/* <img src={svg} /> */}
          <StaticImage width={250} height={120} src={props.screenProject.link} alt={props.screenProject.alt} className="screen-project" />
        </div>
        <div className="card-back">
          <h2>{props.cardTitle}</h2>
          <h3>Liens:</h3>
          <p>
            <a href="https://github.com/LoicLissens/chat-node-js" target="_blank">
              Repo GitHub
            </a>
          </p>
          <p>
            <a href="https://node-js-becode-chat.herokuapp.com/" target="_blank">
              Application
            </a>
            <p>(Prends du temps à se lancer)</p>
          </p>
          <h3>Description:</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
