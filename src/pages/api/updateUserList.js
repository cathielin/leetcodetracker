import firebase from 'firebase/app'
import { getDatabase, ref, runTransaction, set } from 'firebase/database'
// import { realDB } from 'firebase'

const updateUserList = (req, res) => {
    console.log("huhhh")
    console.log("this is req.body", req.body, req.query.id)
    const db = getDatabase();
    // const dbRef = ref(db, "users/" + req.query.id)

    // const { snapshot } = await runTransaction(dbRef, (count) => {
    //     return req.body;
    //     // if (count === null) {
    //     //     return 1
    //     // }

    //     // return count + 1
    // })

    set(ref(db, 'users/' + req.query.id), req.body);
    return res.status(200).json({
        total: 1
    })
}

export default updateUserList