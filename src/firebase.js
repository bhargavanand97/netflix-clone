import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAeLNOxUadC6GNkV4tNRc4j44-qWOqV-Z8",
    authDomain: "netflix-clone-bhargav.firebaseapp.com",
    projectId: "netflix-clone-bhargav",
    storageBucket: "netflix-clone-bhargav.appspot.com",
    messagingSenderId: "394928350133",
    appId: "1:394928350133:web:797cc27ef22c5cc574effc"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;