var firebase = require("firebase/app");
require('firebase/database');

var firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   projectId: process.env.REACT_APP_PROJECTID,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
   appId: process.env.REACT_APP_APPID
 };

 const fb = firebase.default.initializeApp(firebaseConfig);

 export default fb;
