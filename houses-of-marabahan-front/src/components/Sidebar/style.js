import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 100%;

  position: fixed;
  left: ${props => props.left? '0' : 'auto'};
  right: ${props => props.right? '0' : 'auto'};
  top: 102px;

  width: 25vw;
`;
