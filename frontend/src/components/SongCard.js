import React from 'react'
import { useStateValue } from '../StateProvider'
import { IconButton } from '@material-ui/core'
import '../Css/Card.css'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
const SongCard = ({ id, name, singer, color, songUrl }) => {
  const [{ basket }, dispatch] = useStateValue()

  const addtobasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        name: name,
        singer: singer,
        color: color,
        songUrl: songUrl,
      },
    })
  }
  const mystyle = {
    backgroundColor: color,
  }

  return (
    <div className='card'>
      <div className='card__image' style={mystyle}>
        <IconButton onClick={addtobasket}>
          <PlayCircleFilledWhiteIcon className='playIcon' fontSize='large' />
        </IconButton>
      </div>
      <h1 className='card__name'>{name}</h1>
      <h1 className='card__singer'>{singer}</h1>
    </div>
  )
}

export default SongCard
