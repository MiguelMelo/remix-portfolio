import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import {
  Copyrigth,
  FooterLogo,
  FooterSection,
  Link,
  LinksList,
  Socials,
} from "./styles";

const Footer = () => {
  return (
    <FooterSection id="footer">
      <FooterLogo href="#">{"<CS />"}</FooterLogo>
      <LinksList>
        <Link>
          <a href="#">Home</a>
        </Link>
        <Link>
          <a href="#about">About</a>
        </Link>
        <Link>
          <a href="#experience">Experience</a>
        </Link>
        <Link>
          <a href="#services">Services</a>
        </Link>
        <Link>
          <a href="#portfolio">Portfolio</a>
        </Link>
        <Link>
          <a href="#testimonials">Testimonials</a>
        </Link>
        <Link>
          <a href="#contact">Contact</a>
        </Link>
      </LinksList>
      <Socials>
        <a href="https://instagram.com/">
          <BsInstagram />
        </a>
        <a href="https://linkedin.com/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
      </Socials>
      <Copyrigth>
        <small>&copy; Carlos Silva. Maked with ❤️</small>
      </Copyrigth>
    </FooterSection>
  );
};

export default Footer;
