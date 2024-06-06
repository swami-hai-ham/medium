import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcoDV1ytPa4jlDo7YpGFnPN7At_bjxikc",
  authDomain: "lexical-bbe51.firebaseapp.com",
  projectId: "lexical-bbe51",
  storageBucket: "lexical-bbe51.appspot.com",
  messagingSenderId: "276964160906",
  appId: "1:276964160906:web:c0827de190deb53c1e8473"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};

export { auth, signInWithGoogle };