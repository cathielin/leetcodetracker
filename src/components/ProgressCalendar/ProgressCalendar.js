import React, { useState, useEffect } from 'react'
import styles from './ProgressCalendar.module.css'

function ProgressCalendar() {

    const days = [1, 2, 3, 4, 5, 6, 7];
    const week = [1, 2, 3, 4];
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const [currentDate, setCurrentDate] = useState(undefined);
    // const [extraDays, setExtraDays] = useState(undefined);

    useEffect(()=> {
        getDate();
    }, []);


    const getDate = () => {
        const dateNow = Date.now();
        const newDate = new Date(dateNow);
        
        setCurrentDate(newDate);
        
        
    }

    const squaresForMonth = (month) => {
        let extraDays = new Date(currentDate.getFullYear(), month+1, 0).getDate() - 28
        return (
            <div className={styles.gridContainer}>
                <div className={styles.title}>{months[month]}</div>
                <div className={styles.grid}>
                    
                    {week.map((j) => {
                        return (
                            <div className={styles.row}>
                            {days.map((i) => {
                                
                                return ( <div className={styles.square}></div> )
                            })}
                        </div>
                        )
                    })}
                    <div className={styles.row}>
                        {days.slice(0, extraDays).map((i) => {
                            if(i+28 == currentDate.getDate() && month == currentDate.getMonth()) {
                                return ( <div className={styles.coloredSquare}></div> )
                            }
                            else {
                                return ( <div className={styles.square}></div> )
                            }
                            
                        })} 
                    </div>
                </div>

            
            </div>
        )
    }


    return (
        currentDate != undefined && 
        <div className={styles.container}>
            <div className={styles.calendar}>
                {squaresForMonth(currentDate.getMonth())}
                {squaresForMonth(currentDate.getMonth() + 1)}
                {squaresForMonth(currentDate.getMonth() + 2)}
            </div> 
        </div>
    )
}

export default ProgressCalendar;