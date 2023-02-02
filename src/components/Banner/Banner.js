import React from 'react'

function Banner({ status }) {
  return (
    <>
      {status === 'win' && (
          <div className="happy banner">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>3 guesses</strong>.
            </p>
          </div>
        )
      }
      {
        status === 'lose' && (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
          </div>
        )
      }
    </>
  )
}

export default Banner;