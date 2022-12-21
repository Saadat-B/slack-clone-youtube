import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLPUa8cn4IENwm6EAcNC5Cg5zNNH1kFrI",
  authDomain: "slack-clone-yt-eb639.firebaseapp.com",
  projectId: "slack-clone-yt-eb639",
  storageBucket: "slack-clone-yt-eb639.appspot.com",
  messagingSenderId: "746617181168",
  appId: "1:746617181168:web:24e8de488208a140650335",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };
