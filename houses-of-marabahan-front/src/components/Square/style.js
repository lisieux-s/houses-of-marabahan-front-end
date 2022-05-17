import styled from 'styled-components';

export const Square = styled.label`
  width: 50px;
  height: 50px;

  position: relative;
  bottom: ${(props) => (props.selection ? '8px' : '')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

  width: 128px;
  height: 128px;

  padding: 16px;
  margin: 16px;

  background: white;
  img {
    position: absolute;
    top: 0;
    object-fit: contain;
  }

  p {
    position: relative;
    z-index: 300;

    text-shadow: 0px 0px 4px white;

    text-align: center;
    opacity: 0;
  }

  :hover {
    box-shadow: 0px 0px 31px 19px #ffeeba;

    p {
      opacity: 100;
    }
  }
`;
