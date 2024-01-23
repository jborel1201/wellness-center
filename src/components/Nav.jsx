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
          <Link to='/formations'>Nos formations</Link>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdown}>
              <Link to='/formations/bloc_1'>Bloc 1 du CAP esthétique</Link>
              <Link to='/formations/bloc_2'>Bloc 2 du CAP esthétique</Link>
              <Link to='/formations/bloc_3'>Bloc 3 du CAP esthétique</Link>
              <Link to='/formations/bloc_1'>Synthèse</Link>
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