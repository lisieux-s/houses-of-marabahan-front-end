import styled from 'styled-components';

export const CharacterPortrait = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: inset 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

  height: 300px;
  width: 150px;

  padding: 8px;

  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: 50% 100%;

  p {
    display: block;
  }
`;
