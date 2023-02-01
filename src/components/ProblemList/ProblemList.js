import React from 'react'
import Card from '../Card/Card.js'
import Button from '../Button/Button.js'
import styles from './ProblemList.module.css'

function ProblemList() {
    const handlerFunction = () => {
        console.log("i make sure the button works");
    }
    const arr = () => {
        let test = []
        for(let i = 0; i < 10; i++) {
            test.push(i);
        }
        return test
    }

    return (
        <div>
            <Card title="Completed Problems">
                {arr().map((i) => {
                    return ( <div className={styles.item}>★ problem {i}</div> )
                })}
                {/* <div className={styles.item}>problem 1</div> 
                <div className={styles.item}>problem 2</div> */}
                <div className={styles.item}>
                    <Button handlerFunction={handlerFunction} buttonText={"Add New Problem"}/>
                </div>
            </Card>
        </div>
    )

}

export default ProblemList