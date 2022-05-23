import { StyledDiv } from "./style";

export default function InformationBox({ children }) {
    return(
        <StyledDiv>
            <div>
                {children}
            </div>
        </StyledDiv>
    )
}