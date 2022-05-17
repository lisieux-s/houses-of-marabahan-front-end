import styled from 'styled-components';

export const CharacterPortrait = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: ${(props) => (props.create ? '8px' : '')};

  box-shadow: ${(props) =>
    props.create
      ? props.selected
        ? `5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)`
        : '0px 5px 10px 3px rgba(50, 50, 50, 0.15)'
      : 'inset 0px 5px 10px 3px rgba(50, 50, 50, 0.15)'};

  height: 300px;
  width: 150px;

  padding: 8px;

  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: 50% 100%;

  :hover {
    box-shadow: ${(props) => (
      props.create 
      ? props.selected
        ? `5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0)`
        :
      '0px 0px 31px 19px #ffeeba' : '')};
  }

  p {
    display: block;
  }
`;
