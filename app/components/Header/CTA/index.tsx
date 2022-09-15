import { Button, Container } from "./styles";

const CTA = () => {
  return (
    <Container>
      <Button
        href="https://github.com/MiguelMelo/remix-portfolio/files/9191678/CV.-.Carlos.pdf"
        download="cv"
      >
        Download CV
      </Button>
      <Button className="btn-primary" href="#contact">
        Let's Talk
      </Button>
    </Container>
  );
};

export default CTA;
