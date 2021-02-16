import React from 'react'
import '../Css/ArtistGrid.css'

const ArtistGrid = ({ artist }) => {
  const mystyle = {
    backgroundColor: artist.color,
  }
  return (
    <div className='list__container'>
      <div className='list' style={mystyle}></div>
      <h1 className='list__name'>{artist.name}</h1>
    </div>
  )
}

export default ArtistGrid
