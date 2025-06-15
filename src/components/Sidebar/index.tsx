import StylesSidebar from "./Styles";
import close from "../../image/close.svg";
import Card from "./components/Card";
import type { RootState } from "../../store/store"
import { useSelector } from "react-redux";

type SidebarProps = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Sidebar = ({open, setOpen} : SidebarProps) => {
const produtos = useSelector((state: RootState) => state.cart.produtos);

const total = produtos.reduce((acc, produto) => acc + produto.preco, 0);

    return (
        <StylesSidebar className={open ? "open" : ""}>
            <div className="offcanvas">
                <div className="div-button" onClick={() => setOpen(!open)}>
                    <img src={close} alt="Carrinho" />
                </div>

                <div className="cards-product">
                    {
                        produtos.map((produto, key) =>(
                            <Card key={key} produto={produto} />
                        ))
                    }
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
                    <button className="btn btn-primary">Continuar com a entrega</button>
                </div>
            </div>
        </StylesSidebar>
    );
};

export default Sidebar;