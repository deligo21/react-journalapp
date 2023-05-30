import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAG7w8Vktvu2GTLZdvBVS5Mm2yjPUBZM8Y",
    authDomain: "udemy-proyectos.firebaseapp.com",
    projectId: "udemy-proyectos",
    storageBucket: "udemy-proyectos.appspot.com",
    messagingSenderId: "266854909247",
    appId: "1:266854909247:web:3787249890fe4b75d63f8a"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);