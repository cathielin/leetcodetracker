import React from 'react'
import styles from './StatCard.module.css'

function StatCard(props) {

    const { number, label } = props;
    return (
        <div className={styles.container}>
            
            <div className={styles.number}>
                {number}
            </div>
            <div className={styles.label}>
                {label}
            </div>
        </div>
    )
}

export default StatCard;