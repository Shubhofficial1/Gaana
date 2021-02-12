import React from 'react'
import '../Css/Sidebar.css'
import ListTile from './ListTile'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt'
import AlbumIcon from '@material-ui/icons/Album'
import StarsIcon from '@material-ui/icons/Stars'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import FavoriteIcon from '@material-ui/icons/Favorite'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import AddBoxIcon from '@material-ui/icons/AddBox'
import PollIcon from '@material-ui/icons/Poll'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <PlayCircleFilledIcon />
        <h1>Gaana</h1>
      </div>

      <div className='sidebar__menu'>
        <div className='sidebar__top'>
          <h4>Menu</h4>
          <ListTile title='Home' src='/' Icon={HomeIcon} />
          <ListTile title='Search' src='/search' Icon={SearchIcon} />
          <ListTile
            title='Discover'
            src='/discover'
            Icon={OfflineBoltIcon}
          />{' '}
          <ListTile title='Album' src='/album' Icon={AlbumIcon} />{' '}
          <ListTile title='Artists' src='/artists' Icon={StarsIcon} />
        </div>

        <div className='sidebar__top'>
          <h4>Library</h4>
          <ListTile title='Recent' src='/recent' Icon={WatchLaterIcon} />
          <ListTile title='Favorites' src='/favorites' Icon={FavoriteIcon} />
          <ListTile title='Local' src='/local' Icon={InsertDriveFileIcon} />
        </div>

        <div className='sidebar__top'>
          <h4>Playlist</h4>
          <ListTile title='Create New' src='/create-new' Icon={AddBoxIcon} />
          <ListTile title='Pop Punk' src='/pop-punk' Icon={PollIcon} />
          <ListTile title='Rocks' src='/rocks' Icon={FeaturedPlayListIcon} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
