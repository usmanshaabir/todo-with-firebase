import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFP1EVViP47Bs1RlqiubKy7LM0X8XZXdg",
    authDomain: "react-crud-1234.firebaseapp.com",
    projectId: "react-crud-1234",
    storageBucket: "react-crud-1234.appspot.com",
    messagingSenderId: "717082735670",
    appId: "1:717082735670:web:a7f7af684a480b60921497",
    measurementId: "G-EWVMTSKRR3"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;
// tesst