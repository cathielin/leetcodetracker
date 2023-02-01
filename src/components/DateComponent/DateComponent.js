import React, {useState, useEffect} from 'react'
import styles from './DateComponent.module.css'

function DateComponent() {

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const [currentDate, setCurrentDate] = useState(undefined);

    useEffect(()=> {
        getDate();
    }, []);


    const getDate = () => {
        const dateNow = Date.now();
        const newDate = new Date(dateNow);
        setCurrentDate(newDate);
        console.log(newDate.getMonth(), newDate.getFullYear(), newDate.getDate(), newDate.getDay());
        console.log(months[newDate.getMonth()], newDate.getDate(), newDate.getFullYear())
        console.log(days[newDate.getDay()])
        
    }
    return (
        <>
            { currentDate != undefined && 
            <div className={styles.dateBox}>
                <div className={styles.day}>
                    {days[currentDate.getDay()]}
                </div>
                <div className={styles.fullDate}>
                    {months[currentDate.getMonth()] + " " + currentDate.getDate() + " " + currentDate.getFullYear()}
                </div>
            </div> }
        </>
    )

}

export default DateComponent;