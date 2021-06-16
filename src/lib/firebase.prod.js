import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";
//we need to somehow seed the database

//we need a config here
const config = {
  apiKey: "AIzaSyBdNfp8-r0P-3TNa2ZNjdZomNWFar5Syh8",
  authDomain: "netflix-clone-c44c8.firebaseapp.com",
  projectId: "netflix-clone-c44c8",
  storageBucket: "netflix-clone-c44c8.appspot.com",
  messagingSenderId: "488327121847",
  appId: "1:488327121847:web:92a9717acb65723d4a7632",
};

const firebase = Firebase.initializeApp(config);

//this is used for seeding the database
//seedDatabase(firebase);

export { firebase };
