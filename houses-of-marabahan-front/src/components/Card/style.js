import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  //border: 2px solid black;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(40, 160, 255, 1) 100%
  );
  

  width: 150px;
  height: 300px;

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
    box-shadow: 0px 0px 31px 19px #ffeeba;
    p {
      opacity: 100;
    }
  }
`;
