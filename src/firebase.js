import firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';

moment.locale('es');

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

const db = firebase.firestore();
const clients = db.collection('clientes');

export { db, clients };

export function fetchAll(collection) {
	return new Promise(function(resolve) {
		db
			.collection(`${collection}`)
			.get()
			.then((snapshot) => {
				let objects = [];
				snapshot.forEach((doc) => {
					objects.push(doc.data());
				});
				resolve(objects);
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	});
}

export function fetchByDateRange(start, end) {
	return new Promise(function(resolve) {
		console.log(start);
		console.log(end);
		clients
			.where('fin_contrato', '>', start)
			.where('fin_contrato', '<', end)
			.get()
			.then((snapshot) => {
				let objects = [];
				snapshot.forEach((doc) => {
					objects.push(doc.data());
				});

				resolve(objects);
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	});
}

export function fetchByMonthBirth(month) {
	return new Promise(function(resolve) {
		clients
			.where('mescumple', '==', month)
			.get()
			.then((snapshot) => {
				let objects = [];
				snapshot.forEach((doc) => {
					objects.push(doc.data());
				});

				resolve(objects);
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	});
}

export function add_from_array(array) {
	for (let i = 0; i < array.length; i++) {
		db.collection('clientes').doc().set(array[i]);
	}
}
