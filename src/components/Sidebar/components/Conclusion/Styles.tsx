import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const Styles = styled.div`
margin: 32px 8px;
* {
    background-color: ${Cores.laranjaEscuro};
    color: ${Cores.laranjaClaro};
}
p {
    margin: 24px 0;
    font-weight: 500;
}
button {
    background-color: ${Cores.laranjaClaro};
    color: ${Cores.laranjaEscuro};
    border: none;
    height: 24px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: 1s ease;
    &:hover {
        background-color: #FFEBDF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transition: 1s ease;
    }
}
`

export default Styles