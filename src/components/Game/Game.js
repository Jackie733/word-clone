import React, {useState} from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([])
  const [endStatus, setEndStatus] = useState('');

  function handleSubmit(guess) {
    console.log('submit guess', guess);
    const newList = [...guessList]
    newList.push(guess)
    setGuessList(newList)
    if (newList.length >= NUM_OF_GUESSES_ALLOWED) {
      setEndStatus('lose');
      return;
    }
    if (guess === answer) {
      setEndStatus('win')
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput onSubmit={handleSubmit} status={endStatus} />
      <Banner status={endStatus} />
    </>
  )
}

export default Game;
