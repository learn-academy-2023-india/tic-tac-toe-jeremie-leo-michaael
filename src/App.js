import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isPlayerOneTurn, setPlayerOneTurn] = useState(true)
  
  const handleClick = (id) => {
    // do nothing if the square has already been clicked
    if (squares[id] !== null) {
      return
    }
  
    const newSquares = [...squares]
  
    if (isPlayerOneTurn) {
      newSquares[id] = 'X'
    } else {
      newSquares[id] = 'O'
    }
  
    setSquares(newSquares)
    setPlayerOneTurn(!isPlayerOneTurn)
  }
  
  let playerTurnText
  if (isPlayerOneTurn) {
    playerTurnText = "Player 1's Turn (X)"
  } else {
    playerTurnText = "Player 2's Turn (O)"
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="squares">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <p>{playerTurnText}</p>
    </>
  )
}

export default App
