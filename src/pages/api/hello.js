// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD8MNGlDsrHh_azfdlbk8YpHuunnltshQU",
//   authDomain: "personal-leetcode-tracker.firebaseapp.com",
//   projectId: "personal-leetcode-tracker",
//   storageBucket: "personal-leetcode-tracker.appspot.com",
//   messagingSenderId: "190768616416",
//   appId: "1:190768616416:web:ee46c3b689d13f4b629185",
//   measurementId: "G-VFGN7M1VFL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
