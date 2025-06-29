import StylesSidebar from "./Styles";
import close from "../../image/close.svg";
import Card from "./components/Card";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import AddressData from "./components/AddressData";
import Payment from "./components/Payment";
import { toggleState } from "../../store/cartSlice";
import Conclusion from "./components/Conclusion";

type SidebarProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
    const produtos = useSelector((state: RootState) => state.cart.produtos);
    const formStep = useSelector((state: RootState) => state.cart.formStep);
    const toggle = useSelector((state: RootState) => state.cart.toggleState);
    const dispatch = useDispatch();

    const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);

    return (
    <StylesSidebar className={open ? "open" : ""}>
    <div className="offcanvas">
        {!toggle && (
            <div className="cart">
                <div className="div-button" onClick={() => setOpen(!open)}>
                    <img src={close} alt="Carrinho" />
                </div>

                <div className="cards-product">
                    {produtos.map((produto, key) => (
                        <Card key={key} produto={produto} />
                    ))}
                </div>

                <div className="total">
                    <div className="total-info">
                        <h4>Valor Total</h4>
                        <p>
                            {total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            })}
                        </p>
                    </div>
                    <button
                    onClick={() => {
                        if (produtos.length === 0) {
                            alert('Seu carrinho está vazio. Adicione um produto antes de continuar.');
                        } else {
                            dispatch(toggleState());
                        }
                    }}
                    className="btn btn-primary"
                    >
                        Continuar com a entrega
                    </button>

                </div>
            </div>
        )}
        {toggle && (
            <div>
                {formStep === "endereco" && <AddressData />}
                {formStep === "pagamento" && <Payment />}
                {formStep === "conclusao" && <Conclusion />}
            </div>
        )}
    </div>
    </StylesSidebar>
    );
};

export default Sidebar;
