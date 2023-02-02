import React from 'react'
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const results = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={crypto.randomUUID()} className={`cell ${results ? results[i].status : undefined}`}>
          {results ? results[i].letter : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess;