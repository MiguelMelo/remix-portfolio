import styled from "styled-components";

import { BaseContainer } from "~/styles/global";

export const HeaderWrapper = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
`;

export const Container = styled(BaseContainer)`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const MeWrapper = styled.div`
  background: linear-gradient(
    ${({ theme }) => theme.palette.primary.main},
    transparent
  );
  width: 20rem;
  height: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.allEase400};
  /* padding: 5rem 1.5rem 1.5rem 1.5rem; */

  &:hover {
    box-shadow: 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.1);
  }
`;

export const MeImage = styled.img``;

export const ScrollDown = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  cursor: pointer;
`;
