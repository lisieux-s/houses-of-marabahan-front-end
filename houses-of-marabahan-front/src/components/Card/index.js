import { useState } from "react";

import { StyledLabel } from "./style";

export default function Card({title, image, text, show}) {
    const [selected, setSelected] = useState(false);
    return(
        <StyledLabel show={show} selected={false} onClick={() => setSelected(!selected)}>
            <p>{title}</p>
            <img src={image} alt=''/>
            <p>{text}</p>
        </StyledLabel>
    )
}