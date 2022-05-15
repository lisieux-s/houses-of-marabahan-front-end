import styled from 'styled-components';

export const Card = styled.label`

  width: 50px;
  height: 50px;

  position: relative;
  bottom: ${(props) => props.selection ? '8px' : ''};
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

  width: 128px;
  height: 128px;

  padding: 16px;
  margin: 16px;
  img {
    object-fit: none;
    filter: brightness(1000%);
  }

  p {
    color: black;
    opacity: 0;
  }

  :hover {
    box-shadow: 0px 0px 31px 19px #ffeeba;
    
    p {
      opacity: 100;
    }
  }
`;
