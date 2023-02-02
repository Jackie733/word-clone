import React, { useState } from 'react';

function GuessInput() {
  const [input, setInput] = useState('')

  function handleChange(e) {
    const value = e.target.value;
    setInput(value.toUpperCase());
  }

  function handleSubmit(e) {
    console.log(input)
    e.preventDefault();
    if (input.length !== 5) {
      window.alert('guess input must have 5 characters')
      return;
    }
    setInput('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" minLength={5} maxLength={5} value={input} onChange={handleChange} />
    </form>
  ) 
}

export default GuessInput;
