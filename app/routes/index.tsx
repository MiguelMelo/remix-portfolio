import { ThemeProvider } from "styled-components";

import About from "~/components/About";
import Contact from "~/components/Contact";
import Experience from "~/components/Experience";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Nav from "~/components/Nav";
import Portfolio from "~/components/Portfolio";
import Services from "~/components/Services";
import Testimonials from "~/components/Testimonials";
import GlobalStyles from "~/styles/global";

import mainTheme from "~/themes/main";

export default function Index() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
