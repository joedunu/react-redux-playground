import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import styles from './UsersList.css'

const tableStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

class UsersList extends Component {
  componentDidMount () {
    this.props.fetchAllUsers()
    this.props.fetchAccounts()
  }

  render () {
    let {users, onUserClick, classes} = this.props
    return (
      <div className={styles['users-list']}>
        <Paper elevation={4} className={styles['users-list', 'page']}>
          <Typography type='display1' gutterBottom>
            Users list
          </Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell numeric>User Id</TableCell>
                <TableCell >First Name</TableCell>
                <TableCell >Last Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell numeric>Mobile number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => {
                return (
                  <TableRow key={user.id} onClick={() => onUserClick(user.id)}>
                    <TableCell numeric>{user.id}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell numeric>{user.mobile}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserClick: PropTypes.func.isRequired,
  fetchAllUsers: PropTypes.func.isRequired,
  fetchAccounts: PropTypes.func.isRequired
}

export default withStyles(tableStyles)(UsersList)
