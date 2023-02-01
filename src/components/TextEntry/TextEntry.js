import React from 'react'
import styles from './TextEntry.module.css'

function TextEntry() {

    return (
        <div className={styles.container}>
            {/* <div className={styles.label}>
                i'm a label!
            </div> */}
            <div className={styles.textarea}>
                <input className={styles.input} type="text" placeholder="Question Name"></input>
            </div>
        </div>
        
    )
}

export default TextEntry