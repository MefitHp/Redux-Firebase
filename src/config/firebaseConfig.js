import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyB2qNrQ6CDI6oqMAvvKSUbGgRI_d_Sjt4A",
    authDomain: "react-redux-firebase-app-27b68.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-app-27b68.firebaseio.com",
    projectId: "react-redux-firebase-app-27b68",
    storageBucket: "react-redux-firebase-app-27b68.appspot.com",
    messagingSenderId: "437805721628"
}

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase