import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25vw;
  height: 100%;
  padding: 8px;

  position: fixed;
  left: ${props => props.left? '0' : 'auto'};
  right: ${props => props.right? '0' : 'auto'};
  top: 102px;

`;
