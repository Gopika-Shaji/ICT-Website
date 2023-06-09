import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Homestyle.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Build your Career with ICT</h1>
      <div className='para'>
      <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June,
        2014. The organization had a humble beginning providing skill training programs to selected
        academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT
        and innovation-related training and capacity-building programs in the state.</p>
      </div>
      <div>
        <Link to="/"><button>Know More</button></Link>
      </div>
    </div>
  )
}

export default Home
