import React from 'react';

function GuessResults({guessList}) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p key={crypto.randomUUID()} className="guess">{guess}</p>
      ))}      
    </div>
  )
}

export default GuessResults;
