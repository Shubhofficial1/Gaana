import React, { useState } from 'react'
import '../Css/Home.css'
import globalSongs from '../modals/Song'
import TrendingSongs from '../modals/TrendingSongs'
import SongCard from './SongCard'
import SongTable from './SongTable'
import DehazeIcon from '@material-ui/icons/Dehaze'
import ListTile from './ListTile'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'
import AlbumIcon from '@material-ui/icons/Album'
import StarsIcon from '@material-ui/icons/Stars'
import CloseIcon from '@material-ui/icons/Close'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import { IconButton } from '@material-ui/core'

const Home = () => {
  const [opened, setOpened] = useState(true)

  const baropened = () => {
    setOpened(true)
  }

  const barclosed = () => {
    setOpened(false)
  }

  return (
    <div className='home'>
      <div className='header'>
        <IconButton onClick={baropened}>
          <DehazeIcon />
        </IconButton>

        <div className='sidepanel' style={{ left: opened ? '0px' : '-300px' }}>
          <div className='sidepanel__logo'>
            <div className='sidepanel__logo__data'>
              <PlayCircleFilledIcon />
              <h1>Gaana</h1>
            </div>
            <IconButton onClick={barclosed}>
              <CloseIcon />
            </IconButton>
          </div>
          <ListTile title='Home' src='/' Icon={HomeIcon} />
          <ListTile title='Search' src='/search' Icon={SearchIcon} />
          <ListTile title='Discover' src='/discover' Icon={OfflineBoltIcon} />
          <ListTile title='Album' src='/album' Icon={AlbumIcon} />
          <ListTile title='Artists' src='/artists' Icon={StarsIcon} />
        </div>
      </div>

      {/*previous code starts here */}
      <h1 className='home__title'>Music</h1>
      <div className='one'>
        <div className='home__global'>
          <h1 className='home__global__title'>Global Top 50</h1>
          <h1 className='home__global__seeall'>See all</h1>
        </div>
        <div className='song__row'>
          {globalSongs.map((song) => (
            <SongCard
              key={song.id}
              id={song.id}
              name={song.name}
              singer={song.singer}
              color={song.color}
              songUrl={song.songUrl}
            />
          ))}
        </div>
      </div>
      <div className='home__trending'>
        <div className='table__title'>Songs you Might Like</div>

        {TrendingSongs.map((song) => (
          <SongTable
            key={song.id}
            id={song.id}
            name={song.name}
            singer={song.singer}
            color={song.color}
            songUrl={song.songUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

/*

 style={{ display: opened ? 'block' : 'none' }}
*/
