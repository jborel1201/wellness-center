import React from 'react'
import { Link } from 'react-router-dom'
//Styles
import styles from './NavMobile.module.scss'
//Images
import { wellnessCenterPath, barsSolidPath } from '#images'

const NavMobile = ({openMenu, isOpen}) => {

  return (
    <div className={styles.appBar}>
      <div className={styles.leftContainer}>
        <Link to='/home'>
          <div className={styles.brandLogoContainer}>
            <img src={wellnessCenterPath} className={styles.logo} alt="Brand Logo Horizontal" />
          </div>
        </Link>
      </div>
      <div className={styles.menuLogoContainer} onClick={openMenu}>
        <img src={barsSolidPath} className={styles.logo} alt="Brand Logo Horizontal" />
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <Link to='/formations'>Nos formations</Link>
          <div className={styles.spacing}>
            <Link to='/formation/bloc_1'>Bloc 1 du CAP esthétique</Link>
            <Link to='/formation/bloc_2'>Bloc 2 du CAP esthétique</Link>
            <Link to='/formation/bloc_3'>Bloc 3 du CAP esthétique</Link>
          </div>
          <Link to='/financements'>Financements</Link>
          <Link to='/nos-valeurs'>Nos valeurs</Link>
          <Link to='/contact'>Nous contacter</Link>
          <Link to='/plus'>Plus</Link>
        </div>
      )}
    </div>
  )
}

export default NavMobile