import { StyledDiv } from "./style";

export default function InformationBox({ children , type}) {
    return(
        <StyledDiv type={type}>
            <div>
                {children}
            </div>
        </StyledDiv>
    )
}