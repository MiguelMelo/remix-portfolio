import styled from "styled-components";
import { BaseContainer } from "~/styles/global";

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Service = styled.article`
  background: ${({ theme }) => theme.palette.bg.variant};
  border-radius: 0 0 2rem 2rem;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  height: fit-content;
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.palette.primary.variant};
    cursor: default;
  }

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

export const ServiceHead = styled.div`
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ theme }) => theme.palette.bg.main};
    font-size: 1rem;
    text-align: center;
  }
`;

export const ServicesList = styled.ul`
  padding: 2rem;
`;

export const ServiceItem = styled.li`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;

  .service_icon {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-top: 3px;
  }

  p {
    font-size: 0.9rem;
  }
`;
