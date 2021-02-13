import React from 'react'
import '../Css/Rightbar.css'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import ArtistGrid from './ArtistGrid'

const Rightbar = () => {
  const artists = [
    {
      name: 'arijit Singh',
      color: '#e36bae',
    },
    {
      name: 'Shaan',
      color: '#845ec2',
    },
    {
      name: 'Sonu Nigam',
      color: '#ffdf91',
    },
    {
      name: 'Jasleen Royale',
      color: '#7579e7',
    },
    {
      name: 'Maithali',
      color: '#28df99',
    },
    {
      name: 'Sunidhi Chauhan',
      color: '#34626c',
    },
  ]

  return (
    <div className='rightbar'>
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

      <span className='rightbar__artist__title'>Top Artists</span>

      <div className='rightbar__artist'>
        {artists.map((artist) => (
          <ArtistGrid artist={artist} />
        ))}
      </div>
    </div>
  )
}

export default Rightbar
