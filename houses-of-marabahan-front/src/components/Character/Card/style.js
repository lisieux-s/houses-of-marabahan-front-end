import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

  width: 150px;
  height: 300px;

  padding: 16px;
  margin: 16px;
  d img {
    object-fit: none;
  }

  p:last-of-type {
    display: ${(props) => (props.show ? 'block' : 'none')};
  }

  :hover {
    box-shadow: 0px 0px 31px 19px #ffeeba;
  }
`;
