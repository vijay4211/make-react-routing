import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h3>Home Page</h3>
      <div className="flex justify-center items-center h-24">
        <Link to="/about" className="bg-red-200 p-1 rounded">
          back to about
        </Link>
      </div>
    </>
  )
}

export default Home
