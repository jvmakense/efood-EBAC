import Styles from "./Styles";
import { useDispatch } from "react-redux";
import { toggleState, goToAddress } from "../../../../store/cartSlice";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

const Conclusion = () => {
    const dispatch = useDispatch();
    const orderId = useSelector((state: RootState) => state.cart.orderId);

    const handleFinish = () => {
        dispatch(goToAddress());
        dispatch(toggleState());
    };

    return (
        <Styles>
            <h3>Pedido realizado - {orderId}</h3>
            <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
            </p>
            <p>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </p>
            <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </p>
            <button onClick={handleFinish}>Concluir</button>
        </Styles>
    );
};

export default Conclusion;
