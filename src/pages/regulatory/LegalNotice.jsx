import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const LegalNotice = () => {
  return (
    <div className={styles.container}>
      <RegulatoryTitle title="MENTION LEGALES" />
      <div className={styles.info}>
        <h5>WELLNESS CENTER ACADEMY</h5>
        <p>43 Rue Pierre Valette<br />
          92 240 Malakoff</p>

        <p>Téléphone : 07 88 19 90 82<br />
          Email: secretariat.wellnessformation@gmail.com</p>

        <p>SIRET : 88470281200022<br />
          Numéro TVA : FR4884702812<br />
          Numéro RCS : B 884 702 812<br />
          Code NAF : 8559B</p>

        <p>Directeur de publication :<br />
          KHEIRA CHOUACHI</p>
      </div>
    </div>
  )
}

export default LegalNotice;