import React from 'react'

import Nav from '#components/Nav'
import Footer from '#components/Footer'

import styles from './LayoutBase.module.scss'

const LayoutBase = ({ isDesktop, children }) => {
  return (
    <div className={styles.container}>
      {
        isDesktop ? (
          <Nav />
        ):(
          <Nav/>
        ) 
      }
      <div className={styles.contentContainer}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default LayoutBase