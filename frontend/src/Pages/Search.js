import React, { useState } from 'react'
import SongTable from '../components/SongTable'
import '../Css/Search.css'
import TrendingSongs from '../modals/TrendingSongs'

const Search = () => {
  const [input, setInput] = useState('')

  return (
    <div className='search'>
      <input
        type='text'
        className='input'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Search Songs ...'
      />
      <div className='home__trending'>
        {TrendingSongs.filter((val) => {
          if (input === '') {
            return val
          } else if (
            val.name.toLowerCase().includes(input.toLowerCase()) ||
            val.singer.toLowerCase().includes(input.toLowerCase())
          ) {
            return val
          }
        }).map((song) => (
          <SongTable
            key={song.id}
            id={''}
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

export default Search
