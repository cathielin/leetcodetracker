import React from 'react';

import styles from './Button.module.css'

function Button(props) {



    const { handlerFunction, buttonText } = props
    return (
        
        <div className={styles.button} onClick={handlerFunction}>
            {buttonText}
        </div>
    )
}

export default Button;
