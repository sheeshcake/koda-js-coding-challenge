import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="page page-home">
      <div className="page-title">
        <h1>Welcome to  the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you sore 100%?</p>
      </div>
      <div className="page-control">
        <button>
          <Link to="quiz">BEGIN</Link>
        </button>
      </div>
    </div>
  )
}
