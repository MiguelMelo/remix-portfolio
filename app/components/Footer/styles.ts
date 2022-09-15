import styled from "styled-components";
import { BaseContainer } from "~/styles/global";

export const FooterSection = styled.footer`
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: ${({ theme }) => theme.palette.bg.main};

    &:hover {
      color: ${({ theme }) => theme.palette.commom.white};
    }
  }
`;

export const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
  cursor: pointer;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Link = styled.li``;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: ${({ theme }) => theme.palette.bg.main};
    color: ${({ theme }) => theme.palette.commom.white};
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    justify-content: center;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.palette.bg.main} !important;
      border-color: ${({ theme }) => theme.palette.bg.main};
    }
  }

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    margin-bottom: 2.6rem;
  }
`;

export const Copyrigth = styled.div`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.palette.bg.main};
`;
