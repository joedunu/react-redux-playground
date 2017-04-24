import React from 'react'
import styles from './Header.css'

const Header = () => (
  <div className={styles.header}>
    <nav className='navbar navbar-light bg-faded'>
      <a className='navbar-brand' href='#'>React Redux Example</a>
    </nav>
  </div>
)

export default Header
