import React from 'react'

import { Link } from 'react-router-dom';

import { wellnessCenterPath } from '#images'
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.socialIcons}>
      </div>
      <div className={styles.logo}>
        <Link to='/home'>
          <img src={wellnessCenterPath} alt="logo" />
        </Link>
      </div>
      <div className={styles.links}>
        <div className={styles.dropdownContainer}>
          <a href="#">Nos formations</a>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdown}>
              <a href="#">Bloc 1 du CAP esthétique</a>
              <a href="#">Bloc 2 du CAP esthétique</a>
              <a href="#">Bloc 3 du CAP esthétique</a>
              <a href="#">Synthèse</a>
            </div>
          </div>
        </div>
        <div className={styles.dropdownContainer}>
          <Link to='/financements'>Financements</Link>
        </div>
        <div className={styles.dropdownContainer}>
          <Link to='/nos-valeurs'>Nos valeurs</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav