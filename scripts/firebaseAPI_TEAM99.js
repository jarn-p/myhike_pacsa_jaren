//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyA_qt-aDDSTGitBy-Vk20kfwgYK4-F5_gk",
    authDomain: "comp1800-202410-demo07.firebaseapp.com",
    projectId: "comp1800-202410-demo07",
    storageBucket: "comp1800-202410-demo07.appspot.com",
    messagingSenderId: "554903954400",
    appId: "1:554903954400:web:f5d2a0106812a61fd30185"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
