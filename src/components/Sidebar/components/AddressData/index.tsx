import StylesAddressData from "./styles";
import { goToPayment, toggleState } from "../../../../store/cartSlice";
import { useDispatch } from "react-redux";

const AddressData = () => {
    const dispatch = useDispatch();
    return (
        <StylesAddressData>
            <h3>Entrega</h3>
            <label htmlFor="name">Quem irá receber</label>
            <input type="text" id="name" />
            <label htmlFor="address">Endereço</label>
            <input type="text" id="address" />
            <label htmlFor="city">Cidade</label>
            <input type="text" id="city" />
            <div className="container">
                <div className="containerChildrem">
                    <label htmlFor="CEP">CEP</label>
                    <input type="number" id="CEP" />
                </div>

                <div className="containerChildrem">
                    <label htmlFor="number">Número</label>
                    <input type="number" id="number" />
                </div>
            </div>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" />
            <div className="buttons">
                <button onClick={() => dispatch(goToPayment())} type="button">Continuar com o pagamento</button>
                <button onClick={() => dispatch(toggleState())} type="button">Voltar para o carrinho</button>
            </div>
        </StylesAddressData>
    );
}

export default AddressData;
