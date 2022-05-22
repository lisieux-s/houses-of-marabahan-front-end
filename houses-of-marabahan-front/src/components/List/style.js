import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;

    div {
        display: flex;
        gap: 8px;

        div {
            display: flex;
            flex-direction: column;
        }
    }
`