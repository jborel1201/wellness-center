import React, { useEffect } from 'react';
import RegulatoryTitle from '#components/RegulatoryTitle';

import styles from './Regulatory.module.scss';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <RegulatoryTitle title="Nous Contacter" />
      <div className={styles.info}>
        <h5>WELLNESS CENTER ACADEMY</h5>
        <p>43 Rue Pierre Valette<br />
          92 240 Malakoff</p>
        <p>Vous pouvez nous contacter par télephone au 06 73 33 42 93:</p>
        <p className={styles.marginLeft}>- Du lundi au vendredi, de 9h à 18h<br />
          - Samedi, de 9h à 12h</p>
        <p>Ou par mail à l'addresse: secretariat.wellnessformation@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact;