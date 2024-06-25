import { createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged   } from "firebase/auth";
import app from "./firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const auth = getAuth(app);

const signUpWithEmailPass = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const logIngWithEmailPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const authenticateWithGoogle = ()=>{
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    return true
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw new Error(error.message)
  });
}

const resetPassword = (email)=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    return true
  })
  .catch((error) => { 
    throw new Error(error)
  });
}

const authStateSignedIn = ()=>{
  return new Promise((resolve)=>{
    onAuthStateChanged(auth, (user) => {
    if(user){
      resolve(true)
    }
    resolve(false)
    });
  })
}

const userCredentials = ()=>{
  return auth.currentUser;
}

export { signUpWithEmailPass, logIngWithEmailPass, authStateSignedIn, userCredentials, resetPassword };
