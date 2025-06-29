import styled from "styled-components";
import { Cores } from "../../../../../../globalStyles";

const ModalStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    .modal {
        position: fixed;
        width: 80vw;
        max-width: 1024px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${Cores.laranjaEscuro};
        color: black;
        display: flex;
        * {
            background-color: transparent;
            color: white;
        }
        .div-image img {
            height: 280px;
            width: 280px;
            padding: 16px 24px;
            flex: 1;
            display: flex;
            justify-content: center;
        }
        .div-info {
            flex: 2;
            h3 {
                margin: 32px 0 16px;
            }
            .text-botton {
                margin: 16px 0;
            }
            button {
                cursor: pointer;
                background-color: white;
                color: ${Cores.laranjaEscuro};
                width: 218px;
                height: 28px;
                font-weight: 700;
                font-size: 14px;
                border: none;

                &:hover {
                    background-color: #fae2cd;
                    box-shadow: 0 0 5px rgba(0,0,0, 0.2);
                }
            }
        }
        .div-close {
            padding-right: 8px;
            padding-top: 8px;

            img:hover {
                cursor: pointer;
                background-color: #ffffff30;
                transition: 0.3s;
            }
        }
    }
`

export default ModalStyles;