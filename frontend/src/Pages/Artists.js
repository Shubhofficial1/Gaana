import React from 'react'
import ArtistCard from '../components/ArtistCard'
import '../Css/Artists.css'
import IndianArtists from '../modals/IndianArtists'
import InternationalArtists from '../modals/InternationalArtists'

const Artists = () => {
  return (
    <div className='artists'>
      <div className='artists__title'>Artists</div>

      <div className='artists__container'>
        <div className='artists__indians'>
          <div className='indians__title'>Indian Artists</div>
          <div className='indians__row'>
            {IndianArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                color={artist.color}
              ></ArtistCard>
            ))}
          </div>
        </div>
      </div>

      <div className='artists__container'>
        <div className='artists__international'>
          <div className='international__title'>International Artists</div>
          <div className='international__row'>
            {InternationalArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                color={artist.color}
              ></ArtistCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artists
