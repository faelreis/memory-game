import { Card } from "./components/Card";
import './board.css';
import { paresDeCartas } from "../../contants/cards";

export function Board(){
    return(
        <div className='board'>
            {paresDeCartas.map((carta) => (
                <Card key={carta.id} {...carta} />
            ))}
        </div>
    )
}