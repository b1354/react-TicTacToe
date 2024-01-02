import Kotak from './components/Kotak.jsx'
import BasicButton from './components/BasicButton.jsx'
import { useState } from 'react'
import calculateWinner from './lib/calculateWinner.js'

export default function Board({squares, xIsNext, onPlay}) {
  const winner = calculateWinner(squares)
  let status = winner ? `Winner: ${winner}` : `Current turn: ${xIsNext? 'X':'O'}`

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return

    const nextSquares = squares.slice()
    
    nextSquares[index] = xIsNext ? 'X' : 'O'

    onPlay(nextSquares)
  }

  return (
    <>
      <p>{status}</p>
      <div className="board">
        {/* fungsi di masukan ke dalam arrow fucntion karena jika tidak,
            fungsi akan langsung di eksekusi */}
        {squares.map((object, index) => (
          <Kotak 
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
            key={index}
          />))
        }
      </div>
    </>
  )
}
