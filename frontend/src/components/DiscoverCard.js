import React from 'react'
import '../Css/DiscoverCard.css'

const DiscoverCard = ({ id, name, color }) => {
  const mystyle = {
    backgroundColor: color,
  }
  return (
    <div className='discovercard' style={mystyle}>
      <div className='discovercard__name'>{name}</div>
    </div>
  )
}

export default DiscoverCard
