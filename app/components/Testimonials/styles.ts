import styled from "styled-components";
import { BaseContainer } from "~/styles/global";

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  width: 40%;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    width: ${({ theme }) => theme.container.width.sm};
  }
`;

export const Testimonial = styled.article`
  background: ${({ theme }) => theme.palette.bg.variant};
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

export const ClientAvatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid ${({ theme }) => theme.palette.primary.variant};
`;

export const ClientName = styled.h5``;

export const ClientReview = styled.small`
  color: ${({ theme }) => theme.palette.commom.light};
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    width: ${({ theme }) => theme.container.width.sm};
  }
`;
