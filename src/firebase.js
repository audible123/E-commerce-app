import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDV30Ck0nY2mKG1OZqjGXq_yWkL1A7qRU0",
  authDomain: "app-d76c8.firebaseapp.com",
  projectId: "app-d76c8",
  storageBucket: "app-d76c8.appspot.com",
  messagingSenderId: "467439042251",
  appId: "1:467439042251:web:a73484f9508edcb614e54e",
  databaseURL:"https://app-d76c8-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}