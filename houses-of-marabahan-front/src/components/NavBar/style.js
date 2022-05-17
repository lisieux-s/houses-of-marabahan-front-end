import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 1000;

  width: 100vw;
  height: 102px;
  padding: 16px;

  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 1) 50%
  );
`;
