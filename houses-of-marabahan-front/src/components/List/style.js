import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;

    > div {
        display: flex;
        gap: 8px;
        :hover {
            box-shadow: 0px 0px 31px 19px #ffeeba;
            background: white;
        }

        div {
            display: flex;
            flex-direction: column;
        }
    }
`