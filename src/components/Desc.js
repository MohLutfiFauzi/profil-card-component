import React from 'react'

const Desc = ({ text, much }) => {
  return (
    <div className='container'>
      <h3 className='description__much'>{much}</h3>
      <p className='description__text'>{text}</p>
    </div>
  )
}

export default Desc