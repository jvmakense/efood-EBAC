import cart from '../../image/shopping-cart-svgrepo-com.svg'
import StyleCart from './StyleCart'

type CartProps = {
    setOpen: (open: boolean) => void;
};

const Cart = ( {setOpen} : CartProps ) => {
    return (
        <StyleCart>
            <div className="cart" onClick={() => setOpen(true)}>
                <img src={cart} alt="icone de um carrinho de compras" />
            </div>
        </StyleCart>
    )
}

export default Cart