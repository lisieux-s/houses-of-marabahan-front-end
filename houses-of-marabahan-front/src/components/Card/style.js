import styled from 'styled-components';

export const Card = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  //border: 2px solid black;
  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(40, 160, 255, 1) 100%
  ); */

  /* width: 150px;
  height: 300px; */

  width: 128px;
  height: 128px;

  padding: 16px;
  margin: 16px;
  img {
    object-fit: none;
    filter: brightness(1000%);
  }

  p {
    color: white;
    opacity: 0;
  }

  p:last-of-type {
    display: ${(props) => (props.show ? 'block' : 'none')};
  }

  :hover {
    box-shadow: ${(props) =>
      props.selection
        ? `5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)`
        : '0px 0px 31px 19px #ffeeba'};
    
    p {
      opacity: 100;
    }
  }

  box-shadow: ${(props) =>
      props.selection
        ? `5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)`
        : ''};
`;
