import React from "react";
import firebase from "firebase";
import fire from "../fire";
import "../App.css";

function SignIn() {
	const auth = fire.auth();

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<>
			<button className={"sign-in"} onClick={signInWithGoogle}>
				Sign in with Google
			</button>
		</>
	);
}

export default SignIn;
