import CardsStyles from "./styles";
import star from "../../../../image/estrela.svg";
import { Link } from "react-router-dom";

interface CardInfo {
  titulo: string;
  descricao: string;
  avaliacao: number;
  destacado: boolean;
  tipo: string;
  capa: string;
  id: number;
}

interface CardsProps {
  info: CardInfo;
}

const Cards = ({ info }: CardsProps) => {
  const { titulo, descricao, avaliacao, destacado, tipo, capa, id } = info;

  return (
    <CardsStyles>
      <div className="card">
        <div className="card-categories">
          {destacado && <h4 className="categories">Destaque da semana</h4>}
          <h4 className="categories">{tipo}</h4>
        </div>
        <img className="card-img" src={capa} alt="" />
        <div className="subtitle">
          <h3>{titulo}</h3>
          <div>
            <div id="nota">{avaliacao}</div>
            <div>
              <img src={star} alt="estrela" />
            </div>
          </div>
        </div>
        <div className="description">
          <p>{descricao}</p>
          <Link to={`/perfil/${id}`}>Saiba mais</Link>
        </div>
      </div>
    </CardsStyles>
  );
};

export default Cards;
