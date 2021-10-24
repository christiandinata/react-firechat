import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyCX-q6Gd5E-XoGgNtrSjMX7r1CufD5ZYOE",
	authDomain: "react-firechat-bcdde.firebaseapp.com",
	projectId: "react-firechat-bcdde",
	storageBucket: "react-firechat-bcdde.appspot.com",
	messagingSenderId: "812070258602",
	appId: "1:812070258602:web:054c95ec1b89aa43484dd3",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
