import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDKC90csBrrT-PXJF7jvLRm-oeApojkZLM',
  authDomain: 'gaana-82316.firebaseapp.com',
  projectId: 'gaana-82316',
  storageBucket: 'gaana-82316.appspot.com',
  messagingSenderId: '1012689986136',
  appId: '1:1012689986136:web:f45ddf9c4e528c0aa4a02d',
  measurementId: 'G-XVMJ3W1DJE',
})

const db = firebaseApp.firestore()

export { db }
