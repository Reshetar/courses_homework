import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE1yjtz9XtGnKErLWYJA-LxlK5EV0JkAE",
  authDomain: "pickem-452f5.firebaseapp.com",
  projectId: "pickem-452f5",
  storageBucket: "pickem-452f5.appspot.com",
  messagingSenderId: "966839400295",
  appId: "1:966839400295:web:a87694a6266c7255c221c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addToDB = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "bets"), data);
    console.log("Bet written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding to DB: ", e);
  }
}

export const getTeams = async (array) => {
  try {
    const querySnapshot = await getDocs(collection(db, "teams"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
  } catch (error) {
    console.error("Error reading DB: ", error);
  }
}



