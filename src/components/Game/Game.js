import React, {useState} from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([])

  function handleSubmit(guess) {
    console.log('submit guess', guess);
    const newList = [...guessList]
    newList.push(guess)
    setGuessList(newList)
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput onSubmit={handleSubmit} />
    </>
  )
}

export default Game;
