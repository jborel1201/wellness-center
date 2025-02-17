import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'



const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLinks}>
        <Link to='/mentions-legales'>Mentions légales</Link>
        <Link to='/politique-en-matiere-de-cookies'>Politique en matière de cookies</Link>
        <Link to='/politique-de-confidentialite'>Politique de confidentialité</Link>
        <Link to='/conditions-d-utilisation'>Conditions d'utilisation</Link>
        <Link to='/reglement-interieur'>Règlement intérieur</Link>
        <Link to='/cgv'>CGV</Link>
      </div>
      <p className={styles.footerCopyright}>© 2022 Wellness Center Academy</p>
    </div>
  )

}

export default Footer
