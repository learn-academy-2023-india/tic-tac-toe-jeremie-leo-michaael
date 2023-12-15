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
      return squares[a] // return the winner's symbol
    }
  }

  // check for a draw: no winner yet
  if (squares.every((square) => square)) {
    return 'Cat\'s game'
  }

  return null
}

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isPlayerOneTurn, setPlayerOneTurn] = useState(true)

  const handleClick = (id) => {
    // do nothing if the square has already been clicked or the game is won/drawn
    if (squares[id] !== null || calculateWinner(squares)) {
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

  const restartGame = () => {
    // reset the game state
    setSquares(Array(9).fill(null))
    setPlayerOneTurn(true)
  }

  const winner = calculateWinner(squares)
  let playerTurnText

  if (winner) {
    playerTurnText = <p className="result winner">Winner: {winner}!</p>
  } else if (winner === 'Cat\'s game') {
    playerTurnText = <p className="result">Cat's game!</p>
  } else {
    if (isPlayerOneTurn) {
      playerTurnText = <p className="result">Player 1's Turn (X)</p>
    } else {
      playerTurnText = <p className="result">Player 2's Turn (O)</p>
    }
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="squares">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="result-container">
        {playerTurnText}
      </div>
      {/* reset button */}
      <div className="restart-button-container">
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </>
  )
}

export default App