import React from 'react'
import '../Css/SongTable.css'
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite'
import { IconButton } from '@material-ui/core'
import { useStateValue } from '../StateProvider'

const SongTable = ({ id, name, singer, color, songUrl }) => {
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
    <div className='table'>
      <div className='table__tile'>
        <div className='table__info'>
          <div className='table__id'>{id}</div>
          <div className='table__image' style={mystyle}></div>
          <div className='table__data'>
            <div className='table__name'>{name}</div>
            <div className='table__singer'>{singer}</div>
          </div>
        </div>
        <IconButton onClick={addtobasket}>
          <PlayCircleFilledWhiteIcon fontSize='large' className='table__icon' />
        </IconButton>
      </div>
    </div>
  )
}

export default SongTable
