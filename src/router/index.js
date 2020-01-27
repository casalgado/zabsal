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
				path      : '/amigos',
				name      : 'vinculados',
				component : () => import('../components/table/Friends.vue')
			},
			{
				path      : '/sociales/:id',
				name      : 'sociales',
				component : () => import('../components/table/Socials.vue')
			},
			{
				path      : '/sociales/:id/crear',
				name      : 'crear_social',
				component : () => import('../components/form/Social.vue')
			},
			{
				path      : '/familiares/:id',
				name      : 'familiares',
				component : () => import('../components/table/Family.vue')
			},
			{
				path      : '/familiares/:id/crear',
				name      : 'crear_familiar',
				component : () => import('../components/form/Family.vue')
			},
			{
				path      : '/console',
				name      : 'console',
				component : () => import('../views/Console.vue')
			},
			{
				path      : '/crear/vinculado',
				name      : 'crear_vinculado',
				component : () => import('../components/form/Client.vue')
			},
			{
				path      : '/crear/amigo',
				name      : 'crear_amigo',
				component : () => import('../components/form/Friend.vue')
			},
			{
				path      : '/editar',
				name      : 'editar',
				component : () => import('../components/form/Edit.vue')
			}
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;
