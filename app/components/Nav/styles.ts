import styled from "styled-components";

export const NavWrapper = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

export const Link = styled.a`
  background: transparent;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  color: ${({ theme }) => theme.palette.commom.light};
  font-size: 1.1rem;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.active {
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.bg.main};
  }
`;
