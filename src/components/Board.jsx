import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const status = 'Next player: ' + (xIsNext ? 'X' : 'O');

  const handleClick = (i) => {
    const v = xIsNext ? 'X' : 'O';

    setSquares(current => {
      const newSquares = current.slice()
      newSquares[i] = v
      return newSquares
    })

    setXIsNext(current => !current)
  }

  const renderSquere = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i) }/>
  }

  return (
    <div>
      <div className="status">{ status }</div>
      <div className="board-row">
        {renderSquere(0)}
        {renderSquere(1)}
        {renderSquere(2)}
      </div>
      <div className="board-row">
        {renderSquere(3)}
        {renderSquere(4)}
        {renderSquere(5)}
      </div>
      <div className="board-row">
        {renderSquere(6)}
        {renderSquere(7)}
        {renderSquere(8)}
      </div>
    </div>
  )
}

export default Board
