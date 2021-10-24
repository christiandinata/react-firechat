import React from "react";
import fire from "../fire";
import "../App.css";

function ChatMessage(props) {
	const auth = fire.auth();
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

	return (
		<>
			<div className={`message ${messageClass}`}>
				<img src={photoURL} />
				<p>{text}</p>
			</div>
		</>
	);
}
export default ChatMessage;
