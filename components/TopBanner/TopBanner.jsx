import React, { useState } from 'react';
import styles from './topbanner.module.css';
import { data } from '../../data.js';

const TopBanner = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    // const handleBannerClose = () => {
    //     setIsBannerVisible(false);
    // };

    return (
        <>
            {isBannerVisible && (
                <div className={styles.banner}>
                    <p className="text-note">{data.topBanner}</p>
                    {/* <span className={`${styles.closeIcon} text-note`} onClick={handleBannerClose}>
                        close    &#x2715;
                    </span> */}
                </div>

            )}
        </>
    );
};

export default TopBanner;
