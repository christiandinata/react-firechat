import "./App.css";
import fire from "./fire";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn";
import Chatroom from "./components/Chatroom";
import SignOut from "./components/SignOut";

const auth = fire.auth();

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App">
			<header>
				<h1>⚛Chattie</h1>
				<SignOut />
			</header>
			<section>{user ? <Chatroom /> : <SignIn />}</section>
		</div>
	);
}

export default App;
