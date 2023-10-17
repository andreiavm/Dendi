import React from 'react';
import styles from './styles.module.css'
import { data } from '../../data.js';


const TopBanner = () => {
    return (
        <div className={styles.banner}>
            <p className="text-note">{data.topBanner}</p>
        </div >
    );
};

export default TopBanner;
