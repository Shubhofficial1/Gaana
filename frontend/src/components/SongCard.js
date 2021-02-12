import React from 'react'

const SongCard = ({ song }) => {
  const mystyle = {
    backgroundColor: song.color,
  }

  return (
    <div className='card'>
      <div className='card__image' style={mystyle}></div>
      <h1 className='card__name'>{song.name}</h1>
      <h1 className='card__singer'>{song.singer}</h1>
    </div>
  )
}

export default SongCard
