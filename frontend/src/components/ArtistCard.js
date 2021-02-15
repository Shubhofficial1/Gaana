import React from 'react'
import '../Css/ArtistCard.css'

const ArtistCard = ({ id, name, color }) => {
  const mystyle = {
    backgroundColor: color,
  }
  return (
    <div className='artistcard'>
      <div className='artistcard__image' style={mystyle}></div>
      <div className='artistcard__name'>{name}</div>
    </div>
  )
}

export default ArtistCard
