import styled from "styled-components";
import { Cores } from "../../../../globalStyles";

const CardsStyles = styled.div`
    width: 320px;
    background-color: ${Cores.laranjaEscuro};
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-top {
        background-color: ${Cores.laranjaEscuro};
    }
    .div-image {
        width: 304px;
        margin: 8px auto;
        background-color: transparent;
        img {
            width: 304px;
            height: 167px;
            object-fit: cover;
        }
    }

    h3 {
    background-color: transparent;
    color: #FFEBD9;
    margin-left: 8px;
    }

    .description {
        background-color: transparent;
        p {
            color: #FFEBD9;
            background-color: transparent;
            margin: 8px;
        }
    }

    button {
        width: 304px;
        height: 24px;
        margin: 0 8px;
        font-size: 14px;
        font-weight: 700;
        border: none;
        margin-bottom: 8px;
        cursor: pointer;

        &:hover {
            background-color: #fae2cd;
            box-shadow: 0 0 5px rgba(0,0,0, 0.2);
        }
    }

`

export default CardsStyles