import React, { useState, useEffect } from 'react'

import { checkGuess } from '../../game-helpers';

const firstLine = ['Q','W','E','R','T','Y','U','I','O','P'];
const secondLine = ['A','S','D','F','G','H','J','K','L'];
const thirdLine = ['Z','X','C','V','B','N','M'];

function VisualKeyboard({ guessList, answer }) {
  const initialMap = new Map();
  const [letterInfo, setLetterInfo] = useState(initialMap);

  useEffect(() => {
    if (guessList?.length) {
      const result = new Map(letterInfo);
      guessList.forEach((guess) => {
        const res = checkGuess(guess, answer);
        res.forEach((item) => {
          if (result.has(item.letter) && result.get(item.letter) === 'correct') {
            return;
          } else {
            result.set(item.letter, item.status);
          }
        })
      })
      setLetterInfo(result);
    }
  }, [guessList, answer])

  return (
    <div className='visual-keyboard'>
      <div className='keyboard-row'>
        {firstLine.map((letter) => (
          <span
            key={crypto.randomUUID()}
            className={`keyboard-letter ${letterInfo.get(letter)}`}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className='keyboard-row'>
        {secondLine.map((letter) => (
          <span
            key={crypto.randomUUID()}
            className={`keyboard-letter ${letterInfo.get(letter)}`}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className='keyboard-row'>
        {thirdLine.map((letter) => (
          <span
            key={crypto.randomUUID()}
            className={`keyboard-letter ${letterInfo.get(letter)}`}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}

export default VisualKeyboard;