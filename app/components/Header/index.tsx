import CTA from "./CTA";
import Socials from "./Socials";

import profile from "../../assets/profile.jpg";

import { BsArrowRight } from "react-icons/bs";

import {
  Container,
  HeaderWrapper,
  MeImage,
  MeWrapper,
  ScrollDown,
} from "./styles";

const Header = () => {
  return (
    <HeaderWrapper id="#">
      <Container>
        <h5>Hello I'm</h5>
        <h1>Carlos Silva</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <MeWrapper>
          <MeImage src={profile} alt="Carlos Profile Image" />
        </MeWrapper>
        <Socials />
        <ScrollDown href="#footer">
          Scroll Down
          <BsArrowRight />
        </ScrollDown>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
