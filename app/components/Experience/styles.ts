import styled from "styled-components";
import { BaseContainer } from "~/styles/global";

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const Skills = styled.div`
  background: ${({ theme }) => theme.palette.bg.variant};
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.palette.primary.variant};
    cursor: default;
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 2rem;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

export const Skill = styled.article`
  display: flex;
  gap: 1rem;

  .skill_icon {
    margin-top: 6px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
