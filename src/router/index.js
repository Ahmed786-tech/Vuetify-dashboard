import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard1 from '../views/Dashboard1.vue'
import register from '../components/register.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'
import Drawer from '../components/Drawer.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard1',
    component: Dashboard1
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Project',
    name: 'Project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue')
  },
  {
    path: '/Team',
    name: 'Team',
    component: Team
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Drawer',
    name: 'Drawer',
    component: Drawer
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
