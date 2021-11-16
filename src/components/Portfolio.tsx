import * as React from "react";
import PortfolioCard from "./PortfolioCard";
import { cardsData } from "../data/portfoliocards";
const Portfolio = () => {
  return (
    <div className="portefolio">
      <h2>Mes travaux</h2>

      <article className="card-project">
        {cardsData.map((e, i) => (
          <PortfolioCard key={i} cardTitle={e.cardTitle} description={e.description} links={e.links} screenProject={e.screenProject} />
        ))}
      </article>
    </div>
  );
};
export default Portfolio;
