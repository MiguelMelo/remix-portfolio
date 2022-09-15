import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import {
  ContactCTA,
  ContactForm,
  ContactOption,
  ContactOptions,
  Container,
  FormField,
  Section,
} from "./styles";

const Contact = () => {
  const form = useRef<HTMLFormElement>({} as HTMLFormElement);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolio_service",
        "portfolio_template",
        form.current,
        "EypHxV3qakvG6wbxt"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.currentTarget.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <Container>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className="contact_icon" />
            <h4>Email</h4>
            <h5 className="text-light">miguel21.melo21@gmail.com</h5>
            <a href="mailto:miguel21@gmail.com" target="_blank">
              Send a message
            </a>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5 className="text-light">+5582996378818</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5582996378818&text=Hello,%20I%20came%20from%20portfolio"
              target="_blank"
            >
              Send a message
            </a>
          </ContactOption>
        </ContactOptions>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <FormField type="text" name="name" placeholder="Full Name" required />
          <FormField
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <FormField
            as="textarea"
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <ContactCTA as="button" type="submit" className="btn-primary">
            Send Message
          </ContactCTA>
        </ContactForm>
      </Container>
    </Section>
  );
};

export default Contact;
