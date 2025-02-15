import React, {useState, useEffect} from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import VisualKeyboard from '../VisualKeyboard';
import Banner from '../Banner';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS))
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

  function handleRestart() {
    setEndStatus('');
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer)
    setGuessList([])
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput onSubmit={handleSubmit} status={endStatus} />
      <VisualKeyboard guessList={guessList} answer={answer} />
      <Banner status={endStatus} onRestart={handleRestart} />
    </>
  )
}

export default Game;
