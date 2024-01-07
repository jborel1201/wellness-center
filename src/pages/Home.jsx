import styles from './Home.module.scss'
import { massagePath } from '#images'

const Home = () => {
  return(
    <div className={styles.container}>
      <div className={styles.bannerContainer} style={{ backgroundImage: `url(${massagePath})` }}></div>
    </div>
  )
}

export default Home
