import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const StylesAddressData = styled.form`
width: 95%;
margin: auto;
background-color: ${Cores.laranjaEscuro};
*{ background-color: transparent}
h3 {
    color: #FFEBD9;
    margin: 32px 0 16px;
    font-size: 19px;
}
label {
    color: #FFEBD9;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 0px;
    display: block;

}
input {
    display: block;
    width: 100%;
    background-color: #FFEBD9;
    border: none;
    height: 32px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    color: black;
    padding-left: 8px;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.container {
    display: flex;
    justify-content: space-between;

    .containerChildrem {
        width: 45%;

        input {
            width: 100%;
        }
    }
}
.buttons {
    margin-top: 32px;
}
button {
    display: block;
    width: 100%;
    height: 24px;
    border: none;
    margin-bottom: 8px;
    background-color: #FFEBD9;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: #FFEBDF;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
}
`

export default StylesAddressData