// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import EditIcon from 'material-ui-icons/Edit'

import './UsersList.css'

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

type Props = {
  users: [
    {
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      mobile: number
    }
  ],
  onUserClick: PropTypes.func.isRequired,
  fetchAllUsers: PropTypes.func.isRequired,
  fetchAccounts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  classes: {
    table: string,
    button: string
  }
}

class UsersList extends Component<Props> {
  componentDidMount () {
    this.props.fetchAllUsers()
    this.props.fetchAccounts()
  }

  render () {
    let { users, onUserClick, classes, onDelete } = this.props
    return (
      <div className='users-list'>
        <Paper elevation={4} className='users-list page'>
          <Typography type='display1' gutterBottom>
            Users list
          </Typography>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell numeric>User Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell numeric>Mobile number</TableCell>
                <TableCell numeric>&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => {
                return (
                  <TableRow key={user.id}>
                    <TableCell numeric>{user.id}</TableCell>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell numeric>{user.mobile}</TableCell>
                    <TableCell numeric>
                      <IconButton
                        className={classes.button}
                        aria-label='Edit'
                        onClick={() => onUserClick(user.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        className={classes.button}
                        aria-label='Delete'
                        onClick={() => onDelete(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
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

export default withStyles(tableStyles)(UsersList)
