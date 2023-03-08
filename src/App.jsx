import { useState, useEffect } from 'react'
import './App.css'
import black from '/public/black.png'

const cardImages = 

[
  {  src:  '/public/redcard.png'  },
  {  src:  '/public/greencard.png'  },
  {  src:  '/public/bluecard.png'  },
]


function App() {


  const [cards, setCards] = useState([])
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(null)


 
  function renderCards () {

    const doubled = [...cardImages, ...cardImages] 
    const shuffled = doubled.sort(() => Math.random() - 0.5)
    const memoryCards = shuffled.map((card) => {return {...card, id: Math.random()}}); 
    setCards(memoryCards)

 
        }

        const handleCardClick = (index) => {

        };

  return (
  
  <div className='imageContainer'>
       {cards.map(item => {
        return (
                   <img key={item.id} 
                   src={black} 
                   alt="memory card" 
                   className='memoryImage'
                   onClick={handleCardClick}
                   />

              )
          })}
    <div>      
           <button onClick={renderCards} className="newGame">New Game</button>
    </div> 
  </div>


)
}

export default App
