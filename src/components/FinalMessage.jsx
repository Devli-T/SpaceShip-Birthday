import React, { useEffect, useState } from 'react';
import styles from './modules/FinalMessage.module.css';

const FinalMessage = () => {
  const message = "  Happy Birthday Gabreila!  ";
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    const letters = message.split('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < letters.length - 1) {
        setDisplayedMessage((prev) => prev + letters[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); 

    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className={styles.messageContainer}>
      {displayedMessage ? displayedMessage.split('').map((letter, index) => (
        <span key={index} className={styles.letter}>
          {letter}
        </span>
      )) : <span className={styles.placeholder}>Loading message...</span>}
    </div>
  );
};

export default FinalMessage;