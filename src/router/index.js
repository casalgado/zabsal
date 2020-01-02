import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path      : '/',
		name      : 'home',
		component : Home,
		children  : [
			{
				path      : '/dashboard',
				name      : 'dashboard',
				component : () => import('../views/Dashboard.vue')
			},
			{
				path      : '/vinculados',
				name      : 'vinculados',
				component : () => import('../components/table/Clients.vue')
			},
			{
				path      : '/console',
				name      : 'console',
				component : () => import('../views/Console.vue')
			},
			{
				path      : '/crear',
				name      : 'crear',
				component : () => import('../components/form/Client.vue')
			}
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;
