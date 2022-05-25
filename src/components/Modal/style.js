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

  input {
      width: 100%;
  }

  button: {
    width: 50%;
  }

  h3:last-of-type {
      :hover {
          color: pink
      }
  }

  .x {
    position: absolute;
    top: 8px;
    right: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 32px;
    width: 32px;
    border-radius: 50%;

    background: red;
    color: white;
    box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

    text-align: center;

    font-weight: 700;

  }
`;
