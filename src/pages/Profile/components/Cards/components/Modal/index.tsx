import { Produto } from "../../../../../../Types/Produto";
import ModalStyles from "./styles";
import close from "../../../../../../image/close.svg";

import { useDispatch } from "react-redux";
import { addProduct } from "../../../../../../store/cartSlice";

type ModalProps = {
    info: Produto;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export default function Modal({ info, isOpen, setIsOpen }: ModalProps) {
    const { nome, descricao, foto, porcao, preco } = info;

    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addProduct(info));
        setIsOpen(false);
        
    };

    if (isOpen) {
        return (
            <ModalStyles>
                <div className="modal">
                    <div className="div-image">
                        <img src={foto} alt="#" />
                    </div>
                    <div className="div-info">
                        <h3>{nome}</h3>
                        <p>{descricao}</p>
                        <p className="text-botton">{porcao}</p>

                        <button onClick={handleAddProduct}>
                            Adicionar ao carrinho - {preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </button>
                    </div>
                    <div className="div-close">
                        <img src={close} height={16} alt="Botão para fechar" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </ModalStyles>
        );
    }

    return null;
}
