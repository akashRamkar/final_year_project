// import "firebase/auth";
// // import firebase from "firebase/app";
// import firebase from "firebase/compat/app";

// const firebaseConfig = {
// 	// Your project's configuration object
// };

// firebase.initializeApp(firebaseConfig);
// // Sign up a new user
// export function signUpUser(email, password) {
// 	firebase
// 		.auth()
// 		.createUserWithEmailAndPassword(email, password)
// 		.then((userCredential) => {
// 			// User created successfully
// 			const user = userCredential.user;
// 		})
// 		.catch((error) => {
// 			// Handle errors
// 		});
// }

// // Sign in an existing user

// export function signInUser(email, password) {
// 	firebase
// 		.auth()
// 		.signInWithEmailAndPassword(email, password)
// 		.then((userCredential) => {
// 			// User signed in successfully
// 			const user = userCredential.user;
// 		})
// 		.catch((error) => {
// 			// Handle errors
// 		});
// }

// // Sign out the current user
// export function signOutUser() {
// 	firebase
// 		.auth()
// 		.signOut()
// 		.then(() => {
// 			// User signed out successfully
// 		})
// 		.catch((error) => {
// 			// Handle errors
// 		});
// }
