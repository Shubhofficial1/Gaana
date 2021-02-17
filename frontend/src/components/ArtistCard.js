import React from 'react'
import '../Css/ArtistCard.css'

const ArtistCard = ({ id, name, color, imageUrl }) => {
  return (
    <div className='artistcard'>
      <img className='artistcard__image' src={imageUrl} alt=''></img>
      <div className='artistcard__name'>{name}</div>
    </div>
  )
}

export default ArtistCard

/*

  const mystyle = {
    backgroundColor: color,
  }
      <div className='artistcard__image' style={mystyle}></div>

*/
