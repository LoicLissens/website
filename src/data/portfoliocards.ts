import { PortfolioCardProps } from "../components/PortfolioCard";

export const cardsData: PortfolioCardProps[] = [
  {
    cardTitle: "Chat NodeJs",
    description: "Création d'un chat en temps réel basé sur NodeJS lors de ma formation Becode Charleroi.",
    screenProject: { link: "../images/screen-card/chat-node.png", alt: "Scrrenshot projet" },
    links: [
      {
        link: "https://github.com/LoicLissens/chat-node-js",
        text: "Repo Github",
      },
      {
        link: "https://node-js-becode-chat.herokuapp.com/",
        text: "Application",
      },
    ],
  },
];
