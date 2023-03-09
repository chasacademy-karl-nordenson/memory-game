import { useState, useEffect } from 'react'
import './App.css'
import black from '/public/black.png'
import Card from './Card.jsx'

const cardImages = 

[
  {  src:  '/public/redcard.png',  matched: false},
  {  src:  '/public/greencard.png', matched: false  },
  {  src:  '/public/bluecard.png', matched: false  },
  {  src:  '/public/yellowcard.png', matched: false}
]


function App() {


  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(null)


 
  function renderCards () {

    const doubled = [...cardImages, ...cardImages] 
    const shuffled = doubled.sort(() => Math.random() - 0.5)
    const memoryCards = shuffled.map((card) => {return {...card, id: Math.random()}}); 
    setCards(memoryCards)

 
        }

        // handle a choice

    const handleChoice = (card) => {
      console.log(card)
      card1 ? setCard2(card) : setCard1(card) 
    }
    
    // compare two selected cards

    useEffect(() => {
      if (card1 && card2) {
        
        if (card1.src === card2.src) {
          setCards(prevCards => {
            return prevCards.map((card => {
              if (card.src === card1.src) {
                return {...card, matched: true}
              } else {
                return card
              }
            }))
          })
        resetTurn()
      } else {
        resetTurn()
      }
    }
    }, [card1, card2])

      console.log(cards)
    // reset choices and increase turn

    const resetTurn = () => {
      setCard1(null)
      setCard2(null)
      setTurns(prevTurns => prevTurns + 1)
    }

  return (
    <div className='App'>
    
    <button onClick={renderCards} className="newGame">New Game</button>

  <div className='card-grid'>
       {cards.map(card => (
        <Card 
        key={card.id}
        card={card}
        handleChoice={handleChoice}
        flipped={card === card1 || card === card2 || card.matched}
        />
      ))}
          
    </div> 
  </div>


);
}

export default App
