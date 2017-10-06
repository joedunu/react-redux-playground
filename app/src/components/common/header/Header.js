import React from 'react'
import styles from './Header.css'
import { Link } from 'react-router-dom'

const Header = () => (
  <div className={styles.header}>
    <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
      <a className='navbar-brand' href='#'>React Redux Example</a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-item nav-link' to={'/'}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={'/add-user'}>Add User</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-item nav-link' to={'/edit-user/1'}>Edit User</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
