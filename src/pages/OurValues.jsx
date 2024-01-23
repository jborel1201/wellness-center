import styles from './OurValues.module.scss';
import { valuePath } from '#images';

const OurValues = ({ isDesktop }) => {
  return (
    <div className='container'>
      <header>
        <h2>NOS VALEURS</h2>
      </header>
      {isDesktop ? (
        <section className={styles.banner}>
          <h3>BIENVEILLANCE  |  AMBITION  |  PERSÉVERANCE  |  PROFESSIONNALISME</h3>
        </section>
      ) : (
        <section className={styles.bannerMobile}>
          <h3>BIENVEILLANCE</h3>
          <h3>AMBITION</h3>
          <h3>PERSÉVERANCE  </h3>
          <h3>PROFESSIONNALISME</h3>
        </section>
      )}
      <section className={styles.values}>
        <div className={styles.valueCard}>
          <img src={valuePath} alt="value logo" />
          <p>Wellness Center Academy a été fondé par une équipe dynamique, ambitieuse et professionnelle, déterminée à aider des femmes souhaitant créer leur entreprise dans le secteur du bien-être.</p>
          <p>Wellness Center Academy souhaite former la prochaine génération de professionnels.</p>
          <p>Nos étudiantes décident de s'inscrire à nos formations car celles-ci souhaitent entamer une activité entrepreneuriale. En tant que futures cheffes d'entreprise, elles ont la possibilité d'apprendre auprès de professionnels qualifiés qui s'investissent pleinement dans leur évolution.</p>
        </div>
      </section>
      <section className={styles.banner}>
        <h3>NOS PLUS</h3>
      </section>
      <section className={styles.plus}>
        <ul>
          <li>Excellente formatrice, passionnée par l'entrepreneuriat</li>
          <li>Des professionnels du bien-être et des services de beauté</li>
          <li>Des cursus courts et intensifs</li>
          <li>Formation en petit comité</li>
        </ul>
        <ul>
          <li>Une partie théorique avec support papier</li>
          <li>Des entraînements sur nos modèles</li>
          <li>Un suivi post-formation de nos élèves</li>
          <li>Une aide personnalisée à la prise en charge et au financement de vos formations</li>
        </ul>
      </section>
      <section className={styles.banner}>
        <h3>NOS FORMATRICES</h3>
      </section>
      <section className={styles.trainer}>
        <div className={styles.trainerCard}>
          <div className={styles.trainerCardHeader}>
            <h2>Kheira C.</h2>
            <h3>Dirigeante et formatrice</h3>
          </div>
          <div className={styles.trainerInfo}>
            <p>Infirmière diplômée passionnée par les médecines ancestrales et le bien-être de la femme dans sa globalité, Madame Wellness n’a cessé et ne cesse de se former à travers le monde aux diverses techniques pouvant accompagner la femme des temps modernes.</p>
            <p>Elle a commencé par des études dans le médical, qu’elle a perfectionné avec une formation en naturopathie. Puis est arrivée la passion des soins par ventouses qui l’ont orientée vers la découverte de la psychologie humaine et féminine dans toutes ses variantes.</p>
            <p>Maman de deux garçons, l’éducation bienveillante et la périnatalité sont également des pôles importants qu’elle a voulu intégrer dans son centre. Aujourd’hui elle aide par diverses méthodes des femmes, des mamans, des épouses des jeunes femmes à se sentir bien dans leur corps et dans leur cœur.</p>
            <p>Elle a créé la Wellness Center Academy en 2020 pour transmettre avec générosité et amour son savoir aux femmes qui le désirent. Plus qu’une formation, Madame Wellness emporte ces élèves vers une expérience inoubliable en accordant à chacune une place particulière.</p>
          </div>
        </div>
      </section>
    </div>
  )
};

export default OurValues;