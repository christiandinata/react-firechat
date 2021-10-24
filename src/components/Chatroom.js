import React, { useState, useRef } from "react";
import firebase from "firebase";
import fire from "../fire";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import "../App.css";

function Chatroom() {
	const dummy = useRef();
	const auth = fire.auth();
	const firestore = fire.firestore();
	// reference a firestore collection
	const messagesRef = firestore.collection("messages");

	// query documents in a collection
	const query = messagesRef.orderBy("createdAt").limit(25);

	// listen to data with hook
	// returns an object which as a child messages in database
	const [messages] = useCollectionData(query, { idField: "id" });
	const [formValue, setFormValue] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = auth.currentUser;

		// crate new document in firestore
		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});

		setFormValue("");

		dummy.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<main>
				{messages &&
					messages.map((msg) => (
						<ChatMessage key={msg.id} message={msg} />
					))}
				<div ref={dummy}></div>
			</main>
			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
				/>
				<button type="submit">Send</button>
			</form>
		</>
	);
}

export default Chatroom;
