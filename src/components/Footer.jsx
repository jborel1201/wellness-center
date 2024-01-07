import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'



const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLinks}>
        <Link to='/mentions-legales'>Mentions légales</Link>
        <Link to='/formations'>Politique en matière de cookies</Link>
        <Link to='/financements'>Politique de confidentialité</Link>
        <Link to='/contact'>Conditions d'utilisation</Link>
      </div>
      <p className={styles.footerCopyright}>© 2022 Wellness Center Academy</p>
    </div>
  )

}

export default Footer
