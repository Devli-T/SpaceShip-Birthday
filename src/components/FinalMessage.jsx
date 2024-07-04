import React, { useEffect, useState } from 'react';
import styles from './modules/FinalMessage.module.css';

const FinalMessage = () => {
  const message = "Happy Birthday!";
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    const letters = message.split('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < letters.length) {
        setDisplayedMessage((prev) => prev + letters[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust time for faster or slower letter flipping

    return () => clearInterval(interval);
  }, [message]);

  return (
    <div className={styles.messageContainer}>
      {displayedMessage.split('').map((letter, index) => (
        <span key={index} className={styles.letter}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default FinalMessage;