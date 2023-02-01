import React from 'react';
import styles from './PageTitle.module.css'

function PageTitle(props) {
    const { title } = props;

    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default PageTitle