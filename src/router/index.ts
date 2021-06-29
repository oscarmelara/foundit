import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Layout/Main.vue'

Vue.use(VueRouter)

const name = 'Foundit'
const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: name },
      },
      {
        path: '/contacto',
        name: 'contacto',
        component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue'),
      },
      {
        path: '/comercios',
        name: 'comercios',
        component: () => import(/* webpackChunkName: "Business" */ '../views/Business.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  routes,
})

export default router
