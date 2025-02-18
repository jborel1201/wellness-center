import styles from './BlocHead.module.scss';

const BlocHead = () => {
  return (
    <div className={styles.legals}>
      <p>Titre RNCP 39030 – CAP Esthétique, Cosmétique, Parfumerie</p>
      <p>Date échéance de l’enregistrement 31/12/2028</p>
      <p>Date d'enregistrement : 31/05/2024</p>
      <p>Certificateur : Ministère de l’éducation nationale et de la jeunesse</p>
      <p className={styles.italic}>Le CAP Esthétique n'est pas accessible en validation partielle par bloc de compétences</p>
      <br />
      <br />
      <p>Date de dernière mise à jour: <span className={styles.bold}>03/06/2024</span></p>
      <p>Version: <span className={styles.bold}>2</span></p>
    </div>
  );
}

export default BlocHead;