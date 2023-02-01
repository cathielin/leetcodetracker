import React from 'react'
import styles from './CardTitle.module.css'

function CardTitle(props) {

    const { title } = props;

    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default CardTitle