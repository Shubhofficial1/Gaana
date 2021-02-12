import React from 'react'
import '../Css/Home.css'
import globalSongs from '../Song'
import SongCard from './SongCard'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Music</h1>
      <div className='one'>
        <div className='home__global'>
          <h1 className='home__global__title'>Global Top 50</h1>
          <h1 className='home__global__seeall'>See all</h1>
        </div>
        <div className='song__row'>
          {globalSongs.map((song) => (
            <SongCard key={song._id} song={song} color={song.color} />
          ))}
        </div>
      </div>

      {/*new section */}
      <div className='one'>
        <div className='home__global '>
          <h1 className='home__global__title'>Songs You Might Like</h1>
          <h1 className='home__global__seeall'>See all</h1>
        </div>
        <div className='song__row'>
          {globalSongs.map((song) => (
            <SongCard key={song._id} song={song} color={song.color} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
