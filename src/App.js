import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'



const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner's symbol
    }
  }

  // Check for a draw (if all squares are filled)
  if (squares.every((square) => square)) {
    return 'Draw';
  }

  return null; // No winner yet
};

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
  const winner = calculateWinner(squares)
  if (winner) {
    playerTurnText = `Winner: ${winner}`
  } else if (winner === 'Draw') {
    playerTurnText = 'It\'s a draw!'
  } else {
    playerTurnText = isPlayerOneTurn ? "Player 1's Turn (X)" : "Player 2's Turn (O)"
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