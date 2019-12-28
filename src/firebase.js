import firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';

moment.locale('es');

console.log(process.env.VUE_APP_FIREBASE_API_KEY);

firebase.initializeApp({
	apiKey            : process.env.VUE_APP_FIREBASE_API_KEY,
	authDomain        : 'zabsal.firebaseapp.com',
	databaseURL       : 'https://zabsal.firebaseio.com',
	projectId         : 'zabsal',
	storageBucket     : 'zabsal.appspot.com',
	messagingSenderId : '377146100047',
	appId             : process.env.VUE_APP_FIREBASE_APP_ID,
	measurementId     : process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
});

export const db = firebase.firestore();
