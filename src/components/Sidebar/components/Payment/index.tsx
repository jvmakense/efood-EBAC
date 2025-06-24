import StylesAddressData from "../AddressData/styles";
import { useDispatch } from "react-redux"
import { goToAddress } from "../../../../store/cartSlice";
import StylePayment from "./style";
const Payment = () => {
    const dispatch = useDispatch();
    return (
        <StylesAddressData>
            <h3>Pagamento - Valor a pagar</h3>
            <label htmlFor="cardName">Nome do cartão</label>
            <input type="text" id="cardName" />
            <StylePayment className="container">
                <div id="firstContainer" className="containerChildrem">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="number" id="cardNumber" />
                </div>

                <div id="lastContainer" className="containerChildrem">
                    <label htmlFor="cvv">CVV</label>
                    <input type="number" id="cvv" />
                </div>
            </StylePayment>
            <div className="container">
                <div className="containerChildrem">
                    <label htmlFor="month">Mês se vencimento</label>
                    <input type="number" id="month" />
                </div>

                <div className="containerChildrem">
                    <label htmlFor="year">Ano de vencimento</label>
                    <input type="number" id="year" />
                </div>
            </div>
            <div className="buttons">
                <button type="button">Finalizar o pagamento</button>
                <button onClick={() => dispatch(goToAddress())} type="button">Voltar para a edição de endereço</button>
            </div>
        </StylesAddressData>
    )
}

export default Payment