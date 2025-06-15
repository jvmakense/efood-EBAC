import { formatPrice } from '../../../../utils';
import trash from './assests/lixeira-de-reciclagem.svg'
import StyleCard from './StyleCard';
import { Produto } from '../../../../Types/Produto';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../store/cartSlice';

type CardProps = {
    produto: Produto;
}
function Card( {produto} : CardProps) {
    const {nome, foto, preco, id} = produto;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeProduct(id))
    }
    return (
        <StyleCard>
            <div className="card">
                <div className="card-header">
                    <img src={foto} alt="imagem do produto" />
                </div>
                <div className="card-body">
                    <div className="card-info">
                        <h4>{nome}</h4>
                        <p>{formatPrice(preco)}</p>
                    </div>
                    <button className="btn btn-primary" onClick={() => handleClick()}>
                        <img src={trash} alt="botão apagar" />
                    </button>
                </div>
            </div>
        </StyleCard>
    )
}

export default Card