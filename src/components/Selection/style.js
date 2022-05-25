import styled from 'styled-components';

export const Selection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 8px;
  padding: 16px;

  div {
    display: flex;
  }

  margin-bottom: 64px;
  :last-of-type {
    margin-bottom: 0;
  }
`;
