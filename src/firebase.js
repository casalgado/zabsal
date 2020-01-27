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
const clients = db.collection('clients');
const socials = db.collection('socials');
const family = db.collection('family');
const friends = db.collection('friends');

export { db, clients, socials, family, friends };

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

export function fetchByClientId(collection, id) {
	return new Promise(function(resolve) {
		db
			.collection(`${collection}`)
			.where('client_id', '==', parseInt(id))
			.get()
			.then((snapshot) => {
				let objects = [];
				snapshot.forEach((doc) => {
					objects.push(doc.data());
				});
				console.log(id);
				resolve(objects);
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	});
}

export function fetchById(collection, id) {
	return new Promise(function(resolve) {
		db
			.collection(`${collection}`)
			.where('id', '==', parseInt(id))
			.get()
			.then((snapshot) => {
				let objects = [];
				snapshot.forEach((doc) => {
					objects.push(doc.data());
				});
				console.log(id);
				resolve(objects);
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	});
}

export function getClient(id) {
	return new Promise(function(resolve) {
		db
			.collection(`clients`)
			.where('id', '==', parseInt(id))
			.get()
			.then((snapshot) => {
				let objects = [];
				snapshot.forEach((doc) => {
					objects.push(doc.data());
				});
				resolve(objects[0]);
			})
			.catch((err) => {
				console.log('Error getting documents', err);
			});
	});
}

export function fetchByDateRange(start, end) {
	return new Promise(function(resolve) {
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
