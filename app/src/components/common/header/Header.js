import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

import styles from './Header.css'

const headerStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

const Header = (props) => {
  const { classes } = props

  return (<div className={styles.header}>
    <AppBar>
      <Toolbar>
        <IconButton className={classes.menuButton} color='contrast' aria-label='Menu'>
          <MenuIcon />
        </IconButton>
        <Typography type='title' color='inherit' className={classes.flex}>
          <Link to={'/'}>React Redux Example</Link>
        </Typography>
        <Button color='contrast'>Edit Profile</Button>
        <Button color='contrast'>Login</Button>
        <Button color='contrast'>
          <Link to={'/sign-up'}>SignUp</Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>)
}

Header.proptypes = {
  classes: PropTypes.object
}

export default withStyles(headerStyles)(Header)
