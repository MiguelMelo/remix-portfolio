import { VscGithub } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";

import project1 from "~/assets/project1.webp";

import {
  Container,
  PortfolioImageWrapper,
  PortfolioItem,
  PortfolioItemButton,
  PortfolioItemCTA,
  PortfolioItemTitle,
  Section,
} from "./styles";

const portfolioProjects = [
  {
    title: "Some project 1",
    img: {
      src: project1,
      alt: "Some project",
    },
    cta: {
      github: "https://github.com/",
      liveDemo: "https://github.com/",
    },
  },
  {
    title: "Some project 2",
    img: {
      src: project1,
      alt: "Some project",
    },
    cta: {
      github: "https://github.com/",
      liveDemo: "https://github.com/",
    },
  },
  {
    title: "Some project 3",
    img: {
      src: project1,
      alt: "Some project",
    },
    cta: {
      github: "https://github.com/",
      liveDemo: "https://github.com/",
    },
  },
];

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      <Container>
        {portfolioProjects.map((item, index) => (
          <PortfolioItem key={index}>
            <PortfolioImageWrapper>
              <img src={item.img.src} alt={item.img.alt} />
            </PortfolioImageWrapper>
            <PortfolioItemTitle>{item.title}</PortfolioItemTitle>
            <PortfolioItemCTA>
              <PortfolioItemButton href={item.cta.github} target="_blank">
                <VscGithub className="cta_icon" />
                <p>Github</p>
              </PortfolioItemButton>
              <PortfolioItemButton
                className="btn-primary"
                href={item.cta.liveDemo}
                target="_blank"
              >
                <AiOutlineEye className="cta_icon" />
                <p>Live Demo</p>
              </PortfolioItemButton>
            </PortfolioItemCTA>
          </PortfolioItem>
        ))}
      </Container>
    </Section>
  );
};

export default Portfolio;
