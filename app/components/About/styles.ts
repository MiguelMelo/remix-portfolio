import styled from "styled-components";
import { BaseButton, BaseContainer } from "~/styles/global";

export const Section = styled.section``;

export const AboutContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    ${({ theme }) => theme.palette.primary.main},
    transparent
  );
  display: grid;
  place-items: center;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

export const AboutMeImage = styled.img`
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    transform: rotate(0);
  }
`;

export const Content = styled.div`
  p {
    margin: 2rem 0 2.6rem;
    color: ${({ theme }) => theme.palette.commom.light};
  }

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    p {
      margin: 1rem 0 1.5rem;
    }
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    text-align: center;

    p {
      margin: 1.5rem 0;
    }
  }
`;

export const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const AboutCard = styled.div`
  background: ${({ theme }) => theme.palette.bg.variant};
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.palette.primary.main};
    cursor: default;
  }

  .about_icon {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const CardTitle = styled.h5`
  font-size: 0.95rem;
`;

export const CardDescription = styled.small`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.palette.commom.light};
`;

export const Button = styled(BaseButton)``;
