import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { LinkContainer } from 'react-router-bootstrap'

const ListTile = ({ title, src, Icon }) => {
  return (
    <div>
      <List disablePadding dense>
        <LinkContainer to={src} exact>
          <ListItem button>
            <ListItemText>
              <div className='listtile'>
                <div className='listtile__logo'>
                  {Icon && <Icon fontSize='small' />}
                </div>
                <div className='listtile__title'> {title}</div>
              </div>
            </ListItemText>
          </ListItem>
        </LinkContainer>
      </List>
    </div>
  )
}

export default ListTile
