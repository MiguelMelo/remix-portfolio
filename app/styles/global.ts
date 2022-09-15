import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.primary.variant};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.primary.main};
    border-radius: .5rem;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.7;
    background: ${({ theme }) => theme.palette.bg.main};
    color: ${({ theme }) => theme.palette.commom.white}
  }

  h1, h2, h3, h4, h5 {
    font-weight: 500;
  } 

  h1 {
    font-size: 2.5rem;
  }

  section {
    margin-top: 8rem;
  }

  section > h2, section > h5 {
    text-align: center;
    color: ${({ theme }) => theme.palette.commom.light};
  }

  section > h2 {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 3rem;
  }

  .text-light {
    color: ${({ theme }) => theme.palette.commom.light};
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    transition: ${({ theme }) => theme.transitions.allEase400};

    &:hover {
      color: ${({ theme }) => theme.palette.commom.white};
    }
  }

  .btn-primary {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.bg.main} !important;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    section {
      margin-top: 6rem;
    }
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    section > h2 {
      margin-bottom: 2rem;
    }
  }
`;

export const BaseContainer = styled.div`
  width: ${({ theme }) => theme.container.width.lg};
  margin: 0 auto;

  /* === MEDIA QUERIES (MEDIUM DEVICES) === */
  @media screen and (max-width: 1024px) {
    width: ${({ theme }) => theme.container.width.md};
  }

  /* === MEDIA QUERIES (SMALL DEVICES) === */
  @media screen and (max-width: 600px) {
    width: ${({ theme }) => theme.container.width.sm};
  }
`;

export const BaseButton = styled.a`
  width: max-content;
  display: inline-block;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  transition: ${({ theme }) => theme.transitions.allEase400};

  &:hover {
    background: ${({ theme }) => theme.palette.commom.white};
    color: ${({ theme }) => theme.palette.bg.main};
    border-color: transparent;
  }
`;
