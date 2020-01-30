import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDikg3lUEpZuQOGxiduXEYD8gmEtoh3e4g',
  authDomain: 'revents-archives.firebaseapp.com',
  databaseURL: 'https://revents-archives.firebaseio.com',
  projectId: 'revents-archives',
  storageBucket: 'revents-archives.appspot.com',
  messagingSenderId: '1034116152639',
  appId: '1:1034116152639:web:42a3f17644d32e7fa1e78a'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
