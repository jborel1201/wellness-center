import React from 'react'

import { wellnessCenterPath } from '#images'
import styles from './Nav.module.scss'

const Nav = () => {   
  return (
    <nav className={styles.nav}>
      <div className={styles.socialIcons}>
      </div>
      <div className={styles.logo}>
        <img src={wellnessCenterPath} alt="logo" /> 
      </div>
      <div className={styles.links}>
        <a href="#">Nos formations</a>
        <a href="#">Financements</a>
        <a href="#">Nos valeurs</a>
        <a href="#">Tarifs</a>
        <a href="#">Plus</a>
      </div>
    </nav>
  )
}

export default Nav