import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state     : {
		salary   : 0,
		title    : 'Base de Datos',
		selected : null,
		active   : null
	},
	mutations : {
		setSalary(state, payload) {
			state.salary = payload;
		},
		setTitle(state, payload) {
			state.title = payload;
		},
		setSelectedUserId(state, payload) {
			state.selected = payload;
		},
		setActiveUserId(state, payload) {
			state.active = payload;
		}
	},
	actions   : {},
	modules   : {}
});
