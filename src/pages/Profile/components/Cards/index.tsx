import { Produto } from "../../../../Types/Produto";
import CardsStyles from "./styles";
import Modal from "./components/Modal"
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../../../../store/cartSlice";

type CardsProps = {
    info: Produto;
};

const Cards = ({ info }: CardsProps) => {
    const { nome, descricao, foto } = info
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addProduct(info));
        setOpenModal(false);
    }
    return (
        <CardsStyles>
            <Modal info={info} isOpen={openModal} setIsOpen={setOpenModal} />
            <div className="card-top">
                <div className="div-image">
                    <img onClick={() => setOpenModal(true)} src={foto} alt="imagem do produto" />
                </div>
                <h3>{nome}</h3>
                <div className="description">
                    <p>{descricao}</p>
                </div>
            </div>

            <button onClick={() => handleAddProduct()} >Adicionar ao carrinho</button>
        </CardsStyles>
    )
}

export default Cards