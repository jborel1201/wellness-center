import React from 'react'

import Nav from '#components/Nav'

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
        <div className="content-column">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutBase