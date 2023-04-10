import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
// import firebaseapp from "./fireAuth";
import { auth } from "./fireAuth";

export const Authcontext = React.createContext();
export function useAuth() {
	return useContext(Authcontext);
}

export default function AuthProvider(props) {
	const [currentUser, setCurrentUser] = useState("");

	async function signup(email, password) {
		if (auth === null) {
			console.log("null auth!");
		}
		console.log(`received mail->${email} and received pass is ->${password}! `);
		await createUserWithEmailAndPassword(auth, email, password);
	}
	async function signIn(email, password) {
		await signInWithEmailAndPassword(auth, email, password);
		window.alert("successfull sign in");
	}
	useEffect(() => {
		const unsubsrcibe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
			} else {
				setCurrentUser(null);
			}
		});
		return unsubsrcibe;
	}, [currentUser]);

	const value = {
		currentUser,
		signup,
		signIn,
	};
	return (
		<Authcontext.Provider value={value}>{props.children}</Authcontext.Provider>
	);
}
