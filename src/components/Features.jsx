import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Sponsors</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>Unsere Partner in den Bergen</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="Gasteiner Bergbahn AG" />
          <FeatureCard iconUrl={assets.javascript} iconText="Ski Shule Gastein" />
        </div>
      </div>
    </div>
  )
}

export default Features