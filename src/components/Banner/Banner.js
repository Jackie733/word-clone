import React from 'react'

function Banner({ status, onRestart }) {

  return (
    <>
      {status === 'win' && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>3 guesses</strong>.
            </p>
            <button className='restart-btn' onClick={onRestart}>Restart</button>
          </div>
        )
      }
      {
        status === 'lose' && (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
            <button className='restart-btn' onClick={onRestart}>Restart</button>
          </div>
        )
      }
    </>
  )
}

export default Banner;