import styles from './OurValues.module.scss';
import { valuePath } from '#images';

const OurValues = () => {
  return (
    <div className='container'>
      <header>
        <h2>NOS VALEURS</h2>
      </header>
      <section className={styles.banner}>
        <h3>BIENVEILLANCE  |  AMBITION  |  PERSÉVERANCE  |  PROFESSIONNALISME</h3>
      </section>
      <section className={styles.values}>
        <div className={styles.valueCard}>
          <img src={valuePath} alt="value logo"/>
          <p>Wellness Center Academy a été fondé par une équipe dynamique, ambitieuse et professionnelle, déterminée à aider des femmes souhaitant créer leur entreprise dans le secteur du bien-être.</p>
          <p>Wellness Center Academy souhaite former la prochaine génération de professionnels.</p>
          <p>Nos étudiantes décident de s'inscrire à nos formations car celles-ci souhaitent entamer une activité entrepreneuriale. En tant que futures cheffes d'entreprise, elles ont la possibilité d'apprendre auprès de professionnels qualifiés qui s'investissent pleinement dans leur évolution.</p>
        </div>
      </section>
      <section className={styles.banner}>
        <h3>NOS PLUS</h3>
      </section>
      <section classname={styles.plus}>

      </section>
      <section className={styles.banner}>
        <h3>NOS FORMATRICES</h3>
      </section>
      <section classname={styles.trainer}>

      </section>
    </div>
  )
};

export default OurValues;