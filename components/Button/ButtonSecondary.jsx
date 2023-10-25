import React from 'react';
import styles from './button.module.css';

const ButtonSecondary = ({ label, onClick }) => {
    return <button className={styles.button_secondary} onClick={onClick}>{label}</button>;
};

export default ButtonSecondary;