import React from 'react'
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((i) => <span className="cell">{guess ? guess[i] : undefined}</span>)}
    </p>
  )
}

export default Guess;