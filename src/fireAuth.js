import { initializeApp } from "firebase/app";
//firebase storage service
import { getStorage } from "firebase/storage";

import "firebase/auth";
import { getAuth } from "firebase/auth";

// import { auth } from "firebase-auth";
const firebaseappconfig = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const firebaseapp = initializeApp(firebaseappconfig);

export const auth = getAuth(firebaseapp);
// export const ;
// export default firebaseapp;

//export storage
export const storage = getStorage(firebaseapp);

//////////////   below should be replaced to proper place
