import styled from 'styled-components';

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 102px;
  z-index: 300;
  width: 45vw;

  margin: 16px;
  padding: 8px;

  background: white;
  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

  input, button {
      width: 100%;
  }

  h3:last-of-type {
      :hover {
          color: pink
      }
  }
`;
