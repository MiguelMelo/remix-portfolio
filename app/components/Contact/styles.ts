import styled from "styled-components";
import { BaseButton, BaseContainer } from "~/styles/global";

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    width: ${({ theme }) => theme.container.width.sm};
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ContactOption = styled.article`
  background: ${({ theme }) => theme.palette.bg.variant};
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.palette.primary.variant};
  }

  .contact_icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FormField = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.palette.primary.variant};
  resize: none;
  color: ${({ theme }) => theme.palette.commom.white};
`;

export const ContactCTA = styled(BaseButton)``;
