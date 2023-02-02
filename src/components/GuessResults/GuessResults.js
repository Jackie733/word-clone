import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={crypto.randomUUID()} answer={answer} guess={guessList[i]} />
      ))}      
    </div>
  )
}

export default GuessResults;
