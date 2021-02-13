import React from 'react'
import '../Css/Rightbar.css'
import ArtistGrid from './ArtistGrid'
import artists from '../modals/Artists'
import AudioPlayer from 'react-h5-audio-player'

const Rightbar = () => {
  const mystyle = {
    backgroundColor: '#ffba93',
  }
  return (
    <div className='rightbar'>
      <span className='rightbar__artist__title'>Top Artists</span>
      <div className='rightbar__artist'>
        {artists.map((artist) => (
          <ArtistGrid key={artist.name} artist={artist} />
        ))}
      </div>
      <div className='rightbar__musicplayer'>
        <span>Now Playing</span>
        <div className='rightbar__color' style={mystyle}></div>
        <div className='rightbar__songname'>Song name</div>
        <div className='rightbar__singername'>Singer name</div>
        <AudioPlayer
          autoPlay
          style={{
            backgroundColor: 'white',
            margin: '5px',
          }}
          src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
          onPlay={(e) => console.log('onPlay')}
          showJumpControls={false}
        />
      </div>
    </div>
  )
}

export default Rightbar

/*
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'

   <div className='rightbar__notification'>
        <span>Notification</span>
        <div className='rightbar__item'>
          <InsertDriveFileIcon />
          <span>Playlist added </span>
        </div>
        <div className='rightbar__item'>
          <InsertDriveFileIcon />
          <span>Playlist added </span>
        </div>
      </div>

*/
