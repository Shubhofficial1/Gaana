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

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'44
import { useStateValue } from '../StateProvider'

  const [{ basket, dispatch }] = useStateValue()

 <div className='music__player__bottom'>
        {basket.length &&
          basket?.map((item) => (
            <div key={item.id} className='music__player__body'>
              <div className='music__player__image'></div>
              <div className='music__player__info'>
                <div className='music__player__name'>{item.name}</div>
                <div className='music__player__singer'>{item.singer}</div>
              </div>
              <AudioPlayer
                style={{
                  backgroundColor: 'white',
                  margin: '5px',
                }}
                autoPlay
                src={item.songUrl}
                onPlay={(e) => console.log('onPlay')}
                showJumpControls={false}
                volume={0.4}
              />
            </div>
          ))}
      </div>


 .music__player__bottom {
  background-color: tomato;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.music__player__body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.music__player__image {
  height: 70px;
  min-width: 70px;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 10px;
  background-color: thistle;
}

.music__player__info {
  display: flex;
  flex-direction: column;
} 


*/
