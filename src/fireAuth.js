import { initializeApp } from "firebase/app";

import "firebase/auth";
import { getAuth } from "firebase/auth";
// import { auth } from "firebase-auth";
const firebaseappconfig = {
	apiKey: "AIzaSyAWS7aXLg7qMgvfoV5ENmc2GS9KJe1rz3U",
	authDomain: "text-summarizer-25f57.firebaseapp.com",
	databaseURL: "https://text-summarizer-25f57-default-rtdb.firebaseio.com",
	projectId: "text-summarizer-25f57",
	storageBucket: "text-summarizer-25f57.appspot.com",
	messagingSenderId: "23044101950",
	appId: "1:23044101950:web:7457ed92b80855840a3e6f",
	measurementId: "G-00X2JGS0N6",
};
const firebaseapp = initializeApp(firebaseappconfig);

export const auth = getAuth(firebaseapp);
// export const ;
// export default firebaseapp;
