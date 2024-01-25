import React, { useEffect } from 'react';
import RegulatoryTitle from '#components/RegulatoryTitle';

import {
  certPath
} from '#images'

import styles from './Regulatory.module.scss';

const Plus = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <RegulatoryTitle title="CERTIFICATION QUALIOPI" />
      <div className={styles.certificationContainer}>
        <img src={certPath} alt="certification" />
      </div>
    </div>
  )
}

export default Plus;