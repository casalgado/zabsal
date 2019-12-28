import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme : {
		themes : {
			light : {
				primary   : '#1976D2',
				secondary : '#424242',
				accent    : '#19d2d2',
				error     : '#de2839',
				info      : '#E0E0E0',
				success   : '#4CAF50',
				warning   : '#FFC107'
			}
		}
	}
});
