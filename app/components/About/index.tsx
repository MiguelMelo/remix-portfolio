import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";

import profile from "../../assets/profile.jpg";

import {
  AboutCard,
  AboutCards,
  AboutContainer,
  AboutMe,
  AboutMeImage,
  Button,
  CardDescription,
  CardTitle,
  Content,
  Section,
} from "./styles";

const cards = [
  {
    title: "Experience",
    desc: "3+ Years",
    icon: <TbAward className="about_icon" />,
  },
  {
    title: "Clients",
    desc: "4+ Satisfied",
    icon: <FiUsers className="about_icon" />,
  },
  {
    title: "Projects",
    desc: "10+ Completed",
    icon: <MdOutlineFolderSpecial className="about_icon" />,
  },
];

const About = () => {
  return (
    <Section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <AboutContainer>
        <AboutMe>
          <AboutMeImage src={profile} alt="My profile image" />
        </AboutMe>
        <Content>
          <AboutCards>
            {cards.map((card, index) => (
              <AboutCard key={index}>
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.desc}</CardDescription>
              </AboutCard>
            ))}
          </AboutCards>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam
            nemo molestiae repudiandae perspiciatis doloremque dolores sequi
            tenetur quis quos explicabo odio molestias ducimus, quaerat, debitis
            adipisci? Atque, ipsa debitis?
          </p>
          <Button className="btn-primary" href="#contact">
            Let's Talk
          </Button>
        </Content>
      </AboutContainer>
    </Section>
  );
};

export default About;
