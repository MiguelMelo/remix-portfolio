import { BiCheck } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";

import {
  Container,
  Section,
  Service,
  ServiceHead,
  ServiceItem,
  ServicesList,
} from "./styles";

const Services = () => {
  return (
    <Section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <Container>
        <Service>
          <ServiceHead>
            <h3>UI/UX Design</h3>
          </ServiceHead>
          <ServicesList>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Web Design UI</p>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Mobile Design UI</p>
            </ServiceItem>
            <ServiceItem>
              <MdOutlineWatchLater className="service_icon" />
              <p>Coming soon...</p>
            </ServiceItem>
          </ServicesList>
        </Service>
        <Service>
          <ServiceHead>
            <h3>Web/Mobile Development</h3>
          </ServiceHead>
          <ServicesList>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Landing Page</p>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Personal Blog</p>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Mobile App</p>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>CMS</p>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Dashboard</p>
            </ServiceItem>
            <ServiceItem>
              <MdOutlineWatchLater className="service_icon" />
              <p>Coming soon...</p>
            </ServiceItem>
          </ServicesList>
        </Service>
        <Service>
          <ServiceHead>
            <h3>Backend Development</h3>
          </ServiceHead>
          <ServicesList>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>RESTful API</p>
            </ServiceItem>
            <ServiceItem>
              <BiCheck className="service_icon" />
              <p>Database</p>
            </ServiceItem>
            <ServiceItem>
              <MdOutlineWatchLater className="service_icon" />
              <p>Coming soon...</p>
            </ServiceItem>
          </ServicesList>
        </Service>
      </Container>
    </Section>
  );
};

export default Services;
