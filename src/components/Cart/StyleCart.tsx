import styled from "styled-components";
import { Cores } from "../../globalStyles";

const StyleCart = styled.div`
    background-color: ${Cores.laranjaEscuro};
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: fixed;
    z-index: 2;

    right: 16px;
    top: 16px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.3s ease-in-out;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .cart {
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8px;

        img {
            background-color: transparent;
            width: 32px;
            height: 32px;
        }
    }
`

export default StyleCart