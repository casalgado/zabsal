import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state     : {
		salary : 0
	},
	mutations : {
		setSalary(state, payload) {
			state.salary = payload;
		}
	},
	actions   : {},
	modules   : {}
});
