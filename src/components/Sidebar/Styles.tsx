import styled from "styled-components";
import { Cores } from "../../globalStyles";

const StylesSidebar = styled.div`
    position: fixed;
    left: 0;
    width: 0;
    height: 100vh;
    background-color: #00000060;
    z-index: 1000;
    overflow-y: scroll;
    
    &.open {
        width: 100vw;
    }

    .cards-product {
        display: flex;
        flex-direction: column;
        gap: 16px;
        background-color: transparent;
        width: 100%;
        padding: 0 32px 0 16px;
    }

    .offcanvas {
        position: absolute;
        right: 0;
        width: 25%;
        height: 100%;
        background-color: ${Cores.laranjaEscuro};
    }

    img {
        height: 24px;
        background-color: transparent;
        margin: auto;
    }

    .div-button {
        background-color: transparent;
        display: flex;
        align-items: end;
        padding: 8px 0px;

        img {
            margin-right: 24px;
            cursor: pointer;

            &:hover {
                background-color: #ffffff20;
                box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
                border-radius: 3px;
            }
        }
    }

    .total {
        display: flex;
        flex-direction: column;
        gap: 16px;
        background-color: transparent;
        margin-top: 32px;
        margin-left: 16px;
        margin-right: 32px;

        .total-info {
            display: flex;
            justify-content: space-between;
            background-color: transparent;

            h4,
            p {
                background-color: transparent;
                color: ${Cores.laranjaClaro};
                font-weight: bold;
            }
        }

        button {
            height: 24px;
            font-size: 14px;
            font-weight: 700;
            border: none;
            margin-bottom: 8px;
            cursor: pointer;

            &:hover {
                background-color: #fae2cd;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
        }
    }
`;

export default StylesSidebar;