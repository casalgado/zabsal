import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

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

db.collection('documentPath').add({
	property_key : 'property_value'
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render  : (h) => h(App)
}).$mount('#app');
