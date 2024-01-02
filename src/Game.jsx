import {useState} from 'react'
import Board from './Board.jsx'
import BasicButton from './components/BasicButton.jsx'
import './assets/css/Game.css'

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const currentBoard = history[currentMove]

  function resetGames() {
    status = false
    setHistory([Array(9).fill(null)])
    setXIsNext(true)
    setCurrentMove(0)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
    setXIsNext(nextMove % 2 === 0)
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0,currentMove+1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
    setXIsNext(!xIsNext)
  }

  const moves = history.map((square,index) => {
    let description = ''
    
    if (index > 0) {
      description = "Go to move #" + index
    } else {
      description = "Go to game start"
    }

    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)} className="btn">{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentBoard} onPlay={handlePlay}/>
        <BasicButton buttonTitle="Reset" buttonOnClick={resetGames} />
      </div>
      <div className="history">
        <p>History</p>
        <div className="game-info">
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    </div>
  )
}