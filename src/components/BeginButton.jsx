// Module CSS is how you have module-specific CSS. CSS is either global, or module-wide. No in-between.
import React from 'react';
import styles from './modules/BeginButton.module.css'; 

const BeginButton = ({ setBegin }) => {
  // Tried tailwindCSS, failed, gave up. Sorry!
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => setBegin(true)} className={styles.beginButton}>Begin</button>
    </div>
  );
};

export default BeginButton;