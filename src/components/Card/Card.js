import React from 'react'
import CardTitle from '../CardTitle/CardTitle';
import styles from './Card.module.css'

function Card(props) {
    const { title } = props;

    return (
        <div className={styles.cardContainer}>
            <CardTitle title={title} />
            <div className={styles.cardBody}>
                {props.children}
            </div>
        </div>
    )

}

export default Card;