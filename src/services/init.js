import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../config/config.js";
import "firebase/firestore";

const firebase_app = initializeApp(firebaseConfig);
const db = firebase_app.firestore();
const analytics = getAnalytics(app);

export { firebase_app, db, analytics };
