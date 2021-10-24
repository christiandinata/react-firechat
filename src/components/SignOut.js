import React from "react";
import fire from "../fire";
import "../App.css";

function SignOut() {
	const auth = fire.auth();

	return (
		<>
			{auth.currentUser && (
				<button onClick={() => auth.signOut()}>Sign Out</button>
			)}
		</>
	);
}

export default SignOut;
