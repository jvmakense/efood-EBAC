import { useDispatch, useSelector } from "react-redux"
import { goToAddress, goToConclusion, clearCart, setPayment,setOrderId } from "../../../../store/cartSlice";
import { RootState } from "../../../../store/store";
import { useState } from "react";
import StylesAddressData from "../AddressData/styles";
import StylePayment from "./style";

const Payment = () => {
    const dispatch = useDispatch();
    const { produtos, delivery } = useSelector((state: RootState) => state.cart);

    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        cvv: '',
        month: '',
        year: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = () => {
        const paymentData = {
        card: {
            name: formData.cardName,
            number: formData.cardNumber,
            code: Number(formData.cvv),
            expires: {
            month: Number(formData.month),
            year: Number(formData.year)
            }
        }
        };

        dispatch(setPayment(paymentData));

        const body = {
        products: produtos.map(p => ({ id: p.id, price: p.preco })),
        delivery,
        payment: paymentData
        };
        console.log('Dados enviados para a API:', body);

        fetch("https://fake-api-tau.vercel.app/api/efood/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
        })
        .then(res => {
            if (!res.ok) {
            throw new Error("Erro ao finalizar compra");
            }
            return res.json();
        })
        .then(data => {
            if (data?.orderId) {
                dispatch(clearCart());
                dispatch(setOrderId(data.orderId));
                dispatch(goToConclusion());
            } else {
                console.error("orderId não encontrado na resposta:", data);
                alert("Erro ao processar pedido. Tente novamente.");
            }
        })
        .catch(err => {
            console.error("Erro:", err);
            alert("Erro ao finalizar compra. Tente novamente.");
        });
    };

    return (
        <StylesAddressData>
        <h3>Pagamento - Valor a pagar</h3>
        <label htmlFor="cardName">Nome do cartão</label>
        <input type="text" id="cardName" value={formData.cardName} onChange={handleInputChange} />

        <StylePayment className="container">
            <div className="containerChildrem">
            <label htmlFor="cardNumber">Número do cartão</label>
            <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                maxLength={16}
                pattern="\d{16}"
                inputMode="numeric"
                placeholder="Número do cartão (16 dígitos)"
                required
                />
            </div>

            <div className="containerChildrem">
            <label htmlFor="cvv">CVV</label>
            <input
                type="text"
                id="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                maxLength={3}
                pattern="\d{3}"
                inputMode="numeric"
                placeholder="CVV (3 dígitos)"
                required
                />
            </div>
        </StylePayment>

        <div className="container">
            <div className="containerChildrem">
            <label htmlFor="month">Mês</label>
            <input
                type="text"
                id="month"
                value={formData.month}
                onChange={handleInputChange}
                maxLength={2}
                inputMode="numeric"
                placeholder="Mês (01–12)"
                required
                />
            </div>
            <div className="containerChildrem">
            <label htmlFor="year">Ano</label>
            <input
                type="text"
                id="year"
                value={formData.year}
                onChange={handleInputChange}
                maxLength={4}
                inputMode="numeric"
                placeholder="Ano (ex: 2025)"
                required
                />
            </div>
        </div>

        <div className="buttons">
            <button type="button" onClick={handleSubmit}>Finalizar o pagamento</button>
            <button type="button" onClick={() => dispatch(goToAddress())}>Voltar</button>
        </div>
        </StylesAddressData>
    );
};

export default Payment;
