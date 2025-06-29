import StylesAddressData from "./styles";
import { goToPayment, setDelivery, toggleState } from "../../../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddressData = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleContinue = () => {
    if (!formData.name || !formData.address || !formData.city || !formData.zipCode || !formData.number) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.zipCode.length !== 8 || isNaN(Number(formData.zipCode))) {
      alert("CEP inválido. Digite 8 números.");
      return;
    }

    if (isNaN(Number(formData.number))) {
      alert("Número inválido.");
      return;
    }

    dispatch(
      setDelivery({
        receiver: formData.name,
        address: {
          description: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
          number: Number(formData.number),
          complement: formData.complement
        }
      })
    );
    dispatch(goToPayment());
  };

  return (
    <StylesAddressData>
      <h3>Entrega</h3>

      <label htmlFor="name">Quem irá receber</label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        placeholder="Nome completo"
      />

      <label htmlFor="address">Endereço</label>
      <input
        type="text"
        id="address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="city">Cidade</label>
      <input
        type="text"
        id="city"
        value={formData.city}
        onChange={handleInputChange}
        required
      />

      <div className="container">
        <div className="containerChildrem">
          <label htmlFor="zipCode">CEP</label>
          <input
            type="text"
            id="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            maxLength={8}
            inputMode="numeric"
            pattern="\d{8}"
            placeholder="Apenas números"
            required
          />
        </div>

        <div className="containerChildrem">
          <label htmlFor="number">Número</label>
          <input
            type="text"
            id="number"
            value={formData.number}
            onChange={handleInputChange}
            inputMode="numeric"
            pattern="\d+"
            required
          />
        </div>
      </div>

      <label htmlFor="complement">Complemento (opcional)</label>
      <input
        type="text"
        id="complement"
        value={formData.complement}
        onChange={handleInputChange}
      />

      <div className="buttons">
        <button type="button" onClick={handleContinue}>
          Continuar com o pagamento
        </button>
        <button type="button" onClick={() => dispatch(toggleState())}>
          Voltar para o carrinho
        </button>
      </div>
    </StylesAddressData>
  );
};

export default AddressData;
