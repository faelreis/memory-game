import { CounterCard } from "./components/CounterCard";
import { Score } from "./components/score";
import './info.css'

export function Info(){
    return(
        <div className='info'>
            <Score/>
            <CounterCard/>
        </div>
    )
}