import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9rCF3g7QWSNCuCpLiKngS9rTJcuNeu4Q",
  authDomain: "rawgfake.firebaseapp.com",
  projectId: "rawgfake",
  storageBucket: "rawgfake.appspot.com",
  messagingSenderId: "213127883279",
  appId: "1:213127883279:web:0e361a175afa8c7c55517a",
  measurementId: "G-S74608PGV9"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.EmailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

export default new Firebase();
