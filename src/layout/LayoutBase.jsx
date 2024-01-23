import React, { useState } from 'react'

import Nav from '#components/Nav'
import NavMobile from '#components/NavMobile'
import Footer from '#components/Footer'

import styles from './LayoutBase.module.scss'

const LayoutBase = ({ isDesktop, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation()
    setIsOpen(true);
  };

  const closeMenu = () => {
    if(!isDesktop) {
      setIsOpen(false);
    }
  }

  return (
    <div className={styles.container} onClick={closeMenu}>
      {
        isDesktop ? (
          <Nav />
        ):(
          <NavMobile openMenu={openMenu} isOpen={isOpen} />
        ) 
      }
      {children}
      <Footer />
    </div>
  )
}

export default LayoutBase