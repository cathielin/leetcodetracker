import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "@firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
console.log(process.env.FIREBASE_API_KEY);
console.log('projectid', firebaseConfig, firebaseConfig.projectId)

// function initFirebase() {
//     if (typeof window !== undefined) {
//         initializeApp(clientCredentials);
//         console.log("Firebase has been init successfully");
//     }
// }

// let app;
// let analytics; 
// let firestore;
// let db;
// let realDB;
// let temp;

// if (firebaseConfig?.projectId) {
//   // Initialize Firebase
//   app = initializeApp(firebaseConfig);

//   if (app.name && typeof window !== 'undefined') {
//     analytics = getAnalytics(app);
//     db = getFirestore(app);
//     realDB = getDatabase(app);
//     coauth = getAuth(app);
//   }

//   // Access Firebase services using shorthand notation
//   firestore = getFirestore();
// }

// // // const app = initializeApp(clientCredentials);

// // // const db = getFirestore(app);

// // // const realDB = getDatabase(app);



// // // const analytics = getAnalytics(app)


// export { db, realDB, analytics };

let analytics;
let firestore;
let auth;
let database;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    firestore = getFirestore();
    auth = getAuth();
    database = getDatabase(app);
  }

  
  
  console.log('auth initialized', auth)
}

export {analytics, auth, database};