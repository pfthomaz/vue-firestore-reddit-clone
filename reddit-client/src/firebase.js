import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBQdNGbIAgn9SGVfZO5DIcKqdiEEEsUW7c',
  authDomain: 'reddit-clone-d.firebaseapp.com',
  databaseURL: 'https://reddit-clone-d.firebaseio.com',
  projectId: 'reddit-clone-d',
  storageBucket: 'reddit-clone-d.appspot.com',
  messagingSenderId: '488098252699'
};

firebase.initializeApp(config);

export default firebase;
