import './firebase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render  : (h) => h(App)
}).$mount('#app');
