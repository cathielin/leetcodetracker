import React from 'react';
import styles from './Header.module.css';

function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.first}>
                it's time to 

            </div>
            <div className={styles.second}>
                leetcode
            </div>
            <div className={styles.bar}>
            </div>
        </div>
    )
    
}

export default Header;