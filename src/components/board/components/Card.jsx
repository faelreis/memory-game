import { useState } from 'react'
import './card.css'


export function Card() {
    const [statusCard, setStatusCard] = useState('card back');
  
    const handleClickFlipCard = () => {
      setStatusCard((currentStatus) => (currentStatus == 'card back' ? 'card front' : 'card back'));
    };
  
    return (
      <div className={statusCard} onClick={handleClickFlipCard}></div>
    );
  }