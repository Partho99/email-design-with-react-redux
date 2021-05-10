import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBoak8N_fRywcNbsZeSZSrEJCE6PTjJv8Y",
    authDomain: "email-design-with-react-redux.firebaseapp.com",
    projectId: "email-design-with-react-redux",
    storageBucket: "email-design-with-react-redux.appspot.com",
    messagingSenderId: "210991130885",
    appId: "1:210991130885:web:4ccd3f3824652ae094ef6c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider};