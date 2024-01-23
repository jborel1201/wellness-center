import { Link } from 'react-router-dom'

import {
  massagePath,
  visagePath,
  nailsPath,
  managePath
} from '#images'

import styles from './Home.module.scss'

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles.bannerContainer} style={{ backgroundImage: `url(${massagePath})` }}></div>
      <div className={styles.formationContainer}>
        <h3>Nos Formations</h3>
        <div className={styles.formationInnerContainer}>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src={visagePath} alt="formation B1" />
              <h4>Bloc 1 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 1 vous permettra d'apprendre les différentes techniques esthétique du visage, des mains et des pieds ainsi que la biologie du corps humain.</p>
            </div>
            <Link to='/formation/bloc_1'>Voir plus →</Link>
          </div>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src={nailsPath} alt="formation B2" />
              <h4>Bloc 2 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 2 vous permettra d'assimiler les soins des ongles, leur biologie ainsi que l'épilation.</p>
            </div>
            <Link to='/formation/bloc_2'>Voir plus →</Link>
          </div>
          <div className={styles.formationCard}>
            <div className={styles.formationCardHeader}>
              <img src={managePath} alt="formation B3" />
              <h4>Bloc 3 du CAP Esthétique</h4>
            </div>
            <div className={styles.formationCardContent}>
              <p>Le bloc 3 permet d'apprendre la gestion d'un institut de beauté, son coté administratif. Vous assimilerez également  le parfum, son histoire et sa composition</p>
            </div>
            <Link to='/formation/bloc_3'>Voir plus →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
