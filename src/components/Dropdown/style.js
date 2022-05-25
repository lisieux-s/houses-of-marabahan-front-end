import styled from "styled-components";

export const Dropdown = styled.ul`
    display: ${props => props.isOpen? 'block' : 'none'};

    list-style-type: none;
    margin: 0;
    padding: 0;

    position: absolute;
    
    left: 0;
    top: 64px;

    background: rgba(255,255,255,0.75);

    width: 100%;

    li {
        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: 0px 5px 10px 3px rgba(50, 50, 50, 0.15);

        height: 64px;
    }
`