import * as React from "react";

export interface PortfolioCardProps {
  cardTitle: string;
  svgAnimation?: { link: string; alt: string };
  screnPoject?: { link: string; alt: string };
  links: { link: string; text: string }[];
  description: string;
}
const PortfolioCard = (props: PortfolioCardProps) => {
  return (
    <div className="card">
      <div className="flip-card">
        <div className="card-front">
          <h2>{props.cardTitle}</h2>
          <img src="assets/images/anim-card/chat.svg" alt="Animation chat" />
          <img width="250px" height="120px" className="screen-project" src="assets/images/screen-card/chat-node.png" alt="Scrrenshot projet" />
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
