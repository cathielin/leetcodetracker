import { useState, useEffect } from 'react'
import 'firebase/database'
// import { realDB } from '@/lib/firebase'
import { ref, onValue, off, getDatabase, set, runTransaction } from "firebase/database"
import Button from 'react-bootstrap/Button'

const Counter = ({ id }) => {
    const [count, setCount] = useState('')
    useEffect(() => {
        const onCountIncrease = (count) => setCount(count.val())

        const fetchData = () => {
            const db = getDatabase();
            const starCountRef = ref(db, 'users/' + id );
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                console.log("this is the data ", data)
                // updateStarCount(postElement, data);
            });
            // onValue(starCountRef, onCountIncrease)

        }

        fetchData()

        return () => {
            const db = getDatabase();
            const countRef = ref(db, "users/" + id)
            off(countRef, "value", onCountIncrease)
        }
    }, [id])

    const increaseCount = async () => {
        // const registerCount = () => fetch(`/api/incrementCount?id=${encodeURIComponent(id)}`)
        // registerCount()
        
    

    }

    const writeUserData = async() => {
        const db = getDatabase();
        set(ref(db, 'users/' + id +'/username'), {
            username: "huh"
            // problemList: {"problem 11": {
            //     problemName: "problem 11",
            //     difficulty: "hard",
            //     percievedDifficulty: 3,
            //     completed: true,
            //     tags: ["arrays"],
            //     lists: ["grind 75"],
            //     timeToComplete: 27,
            //     dateCompleted: Date.now()

            //    }}
        });
        // problem object
    //    {
    //     problemName: "problem 1",
    //     difficulty: "hard",
    //     completed: true,
    //     tags: ["arrays"],
    //     lists: ["grind 75"]
    //     timeToCompleted: 27,
    //    }
        const res = await fetch(`/api/updateUserList?id=${id}`, { method: 'POST', body: JSON.stringify({
            username: "testing",
            problemList: [{
                problemName: "problem 1",
                difficulty: "hard",
                completed: true,
                tags: ["arrays"],
                lists: ["grind 75"],
                timeToCompleted: 27
               }]
        })})
        const r = await res.json()
        console.log(">>>", r)
        // updateList()
      }

    return (
        <div style={{ margin: '5px 0' }}>
            <Button onClick={writeUserData} style={{ width: '100%' }}>Increase count</Button>
            {/* <h5 style={{ textAlign: 'center', marginTop: '5px' }}>{count ? count : '0'}</h5> */}
        </div>
    )
}

export default Counter