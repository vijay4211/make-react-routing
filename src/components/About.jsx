import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <h3>About Page</h3>
      <div className="flex justify-center items-center h-24">
        <Link to="/" className="bg-red-200 rounded p-1">
          Go To Home
        </Link>
      </div>
    </>
  )
}

export default About
