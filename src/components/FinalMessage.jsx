import React, { useEffect, useState } from 'react';
import styles from './modules/FinalMessage.module.css';

const FinalMessage = () => {
  const message = "Haappy  Birthday,  *NAME*!";
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    const letters = message.split('');
    let index = 0;
    const startTyping = () => {
      const interval = setInterval(() => {
        if (index < letters.length - 1) {
          setDisplayedMessage((prev) => prev + letters[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200); 
    };

    const timeout = setTimeout(startTyping, 2000); 
    
    return () => {
      clearInterval(timeout);
    };
  }, [message]);

  return (
    <div className={styles.messageContainer}>
      {displayedMessage && displayedMessage.split('').map((letter, index) => (
        <span key={index} className={styles.letter}>{letter}</span>
      ))}
    </div>
  );
};

export default FinalMessage;
