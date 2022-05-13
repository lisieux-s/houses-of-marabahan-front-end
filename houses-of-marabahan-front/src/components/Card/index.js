import { StyledArticle } from "./style";

export default function Card({title, image, text, show}) {
    return(
        <StyledArticle show={show}>
            <p>{title}</p>
            <img src={image} alt=''/>
            <p>{text}</p>
        </StyledArticle>
    )
}