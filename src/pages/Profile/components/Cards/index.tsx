import { Produto } from "../../../../Types/Produto";
import CardsStyles from "./styles";
import Modal from "./components/Modal"
import { useState } from "react";

type CardsProps = {
    info: Produto;
};

const Cards = ({ info }: CardsProps) => {
    const { nome, descricao, foto } = info
    const [openModal, setOpenModal] = useState(false);


    return (
        <CardsStyles>
            <Modal info={info} isOpen={openModal} setIsOpen={setOpenModal} />
            <div className="card-top">
                <div className="div-image">
                    <img src={foto} alt="imagem do produto" />
                </div>
                <h3>{nome}</h3>
                <div className="description">
                    <p>{descricao}</p>
                </div>
            </div>

            <button onClick={() => setOpenModal(true)} >Adicionar ao carrinho</button>
        </CardsStyles>
    )
}

export default Cards