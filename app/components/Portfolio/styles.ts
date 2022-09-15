import styled from "styled-components";
import { BaseButton, BaseContainer } from "~/styles/global";

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: ${({ theme }) => theme.palette.bg.variant};
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.variant};
    background: transparent;
  }
`;

export const PortfolioImageWrapper = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const PortfolioItemTitle = styled.h3`
  margin: 1.2rem 0 2rem;
`;

export const PortfolioItemCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PortfolioItemButton = styled(BaseButton)`
  display: flex;
  gap: 0.4rem;

  .cta_icon {
    margin-top: 5px;
  }
`;
