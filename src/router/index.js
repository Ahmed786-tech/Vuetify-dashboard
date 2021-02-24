import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import register from '../components/register.vue'
import Login from '../components/Login.vue'
import Table1 from '../components/Table1.vue'
import signUp from '../components/signUp.vue'
import Team from '../views/Team.vue'
import Table from '../views/Table.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Table',
    name: 'Table',
    component: Table
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
    path: '/chart',
    name: 'chart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/chart.vue')
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
    path: '/Table1',
    name: 'Table1',
    component: Table1
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
