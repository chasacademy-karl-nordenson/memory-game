import './Card.css'
import black from '/public/black.png'



export default function Card({ card, handleChoice, flipped }) {
    const handleClick = () => {
        handleChoice(card)
    }
    return (

        <div className='card' key={card.id}>
          <div className={flipped ? 'flipped' : ""}>
            <img 
            className='front' 
            src={card.src} 
             
                alt='card-front'/>
            <img 
            className='back' 
            src={black} 
            alt="card-back" 
            onClick={handleClick}
            
            />

          </div>
        </div>
    )


}