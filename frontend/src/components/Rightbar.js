import React from 'react'
import '../Css/Rightbar.css'
import ArtistGrid from './ArtistGrid'
import artists from '../modals/Artists'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { useStateValue } from '../StateProvider'

const Rightbar = () => {
  const [{ basket, dispatch }] = useStateValue()

  return (
    <div className='rightbar'>
      <span className='rightbar__artist__title'>Top Artists</span>
      <div className='rightbar__artist'>
        {artists.map((artist) => (
          <ArtistGrid key={artist.name} artist={artist} />
        ))}
      </div>

      {basket?.map((item) => (
        <div key={item.id} className='rightbar__musicplayer'>
          <span>Now Playing</span>
          <div
            className='rightbar__color'
            style={{
              backgroundColor: item.color,
            }}
          ></div>
          <div className='rightbar__songname'>{item.name}</div>
          <div className='rightbar__singername'>{item.singer}</div>
          <AudioPlayer
            autoPlay
            style={{
              backgroundColor: 'white',
              margin: '5px',
            }}
            src={item.songUrl}
            onPlay={(e) => console.log('onPlay')}
            showJumpControls={false}
            volume={0.4}
          />
        </div>
      ))}
    </div>
  )
}

export default Rightbar
