import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const LegalNotice = () => {
  return (
    <div className={styles.container}>
      <RegulatoryTitle title="Mentions légales" />
      <div className={styles.info}>
        <h5>WELLNESS CENTER ACADEMY</h5>
        <p>26 RUE ARISTIDE BRIAND<br />
          37300 JOUE-LES-TOURS</p>

        <p>Téléphone : 07 88 19 90 82<br />
          Email: contact@wellness-tours.fr</p>

        <p>SIRET : 88470281200014<br />
          Numéro TVA : FR4884702812<br />
          Numéro RCS : TOURS B 884 702 812<br />
          Code NAF : 8559B</p>

        <p>Directeur de publication :<br />
          KHEIRA CHOUACHI</p>

        <p>Hébergeur : Wix<br />
          Wix Online Platform Limited<br />
          Adresse : 1 Grant’s Row, Dublin 2 D02HX96, Ireland.</p>
      </div>
    </div>
  )
}

export default LegalNotice;