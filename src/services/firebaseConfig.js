import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdCIyUyzGbi8v80fUahTcq9cCcGKFjE78",
  authDomain: "scribi-notes.firebaseapp.com",
  projectId: "scribi-notes",
  storageBucket: "scribi-notes.appspot.com",
  messagingSenderId: "68908196736",
  appId: "1:68908196736:web:e66580d6b1322981021765",
  measurementId: "G-9Y4VK7HXGV",
};

const app = initializeApp(firebaseConfig)

export default app