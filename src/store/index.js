import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state     : {
		salary : 0,
		title  : 'Base de Datos',
		userID : 0
	},
	mutations : {
		setSalary(state, payload) {
			state.salary = payload;
		},
		setTitle(state, payload) {
			state.title = payload;
		},
		setUserID(state, payload) {
			state.userID = payload;
		}
	},
	actions   : {},
	modules   : {}
});
