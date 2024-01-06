import firebase from 'firebase'

const config ={
    apiKey: "AIzaSyCmHa0ehM1l7RJ-v8DFkEt7CeDSwZqUvEY",
  authDomain: "fir-cloud-messaging-fb0be.firebaseapp.com",
  projectId: "fir-cloud-messaging-fb0be",
  storageBucket: "fir-cloud-messaging-fb0be.appspot.com",
  messagingSenderId: "370442036690",
  appId: "1:370442036690:web:04e3151874ae6841cf940b"
};
firebase.initializeApp(config);
export default firebase;