import Rebase from "re-base";
import firebase from "firebase"

const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyBPSwiCjZw6rrc7D0aRL6mBD_Pk5Z2AoL4",
      authDomain: "breakfast-order-service.firebaseapp.com",
      databaseURL: "https://breakfast-order-service.firebaseio.com",
      projectId: "breakfast-order-service",
      storageBucket: "breakfast-order-service.appspot.com",
      messagingSenderId: "497088908469",
      appId: "1:497088908469:web:7570d122abd979ab8902fc",
      measurementId: "G-EBTT6TM1J5"
  
      }
);
// const db = firebaseApp;
const base = Rebase.createClass(firebaseApp.database());
// const db = firebaseApp.firestore();
// console.log(db)
export { firebaseApp };
export default base;