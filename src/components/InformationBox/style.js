import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 75%;
  border: 5px solid ${(props) => (props.type === 'alert' ? 'crimson' : 'pink')};
  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

  color: #888;
  div {
    padding: 8px;
    border-radius: 0;
    box-shadow: inset 0px 1px 10px 1px
      ${(props) =>
        props.type === 'alert'
          ? 'rgba(255, 0, 0, 0.5)'
          : 'rgba(255, 50, 100, 0.4)'};

    h2 {
      color: pink;
    }

    button {
      margin: 0;
      width: 100%;
      color: white;
      background: pink;
    }
  }
`;
