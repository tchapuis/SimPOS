import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAKuWwG8KerbmE6I2yYafOAahSO6LHTIcM',
  authDomain: 'simpos-70a11.firebaseapp.com',
  databaseURL: 'https://simpos-70a11.firebaseio.com',
  projectId: 'simpos-70a11',
  storageBucket: 'simpos-70a11.appspot.com',
  messagingSenderId: '912934111118',
  appId: '1:912934111118:web:3c11a82c9ff314cea8c6df',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {
  firebase,
  db,
  auth,
};
