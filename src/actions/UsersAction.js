import firebase from '../config/firebase';

export const login  = (data) => {
  firebase.db.collection('users').onSnapshot(snapshot => {
    snapshot.docs.map(doc=>doc.data())
  })
};

export const signup = (data) => {
    //email existed
    firebase.db.collection('users').onSnapshot(snapshot => {
      snapshot.docs.map(doc=>doc.data())
    })
    // firebase.db.collection('users').add({
    //   email: data.email,
    //   username: data.username,
    //   password : data.password,
    //   photoURL: null
    // })
    // return '🦄 Register Success';

}