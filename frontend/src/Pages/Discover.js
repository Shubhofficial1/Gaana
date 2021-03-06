import React from 'react'
import DiscoverCard from '../components/DiscoverCard'
import '../Css/Discover.css'
import BrowseAllGenres from '../modals/BrowseAllGenres'
import TopGenres from '../modals/TopGenres'

const Discover = () => {
  return (
    <div className='discover'>
      <div className='discover__title'>Discover</div>
      <div className='discover__container'>
        <div className='discover__genrescontainer'>
          <div className='discover__genrestitle'>Your top genres </div>
          <div className='discover__genresrow'>
            {TopGenres.map((genre) => (
              <DiscoverCard
                key={genre.id}
                id={genre.id}
                name={genre.name}
                color={genre.color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='discover__container'>
        <div className='discover__genrescontainer'>
          <div className='discover__genrestitle'>Browse All </div>
          <div className='discover__genresrow'>
            {BrowseAllGenres.map((genre) => (
              <DiscoverCard
                key={genre.id}
                id={genre.id}
                name={genre.name}
                color={genre.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Discover
