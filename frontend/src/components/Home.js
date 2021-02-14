import React from 'react'
import '../Css/Home.css'
import globalSongs from '../modals/Song'
import TrendingSongs from '../modals/TrendingSongs'
import SongCard from './SongCard'
import SongTable from './SongTable'

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
    new section
      // <div className='one'>
      //   <div className='home__global '>
      //     <h1 className='home__global__title'>Songs You Might Like</h1>
      //     <h1 className='home__global__seeall'>See all</h1>
      //   </div>
      //   <div className='song__row'>
      //     {globalSongs.map((song, index) => (
      //       <SongCard
      //         key={index}
      //         id={song.id}
      //         name={song.name}
      //         singer={song.singer}
      //         color={song.color}
      //         songUrl={song.songUrl}
      //       />
      //     ))}
      //   </div>
      // </div>

*/
