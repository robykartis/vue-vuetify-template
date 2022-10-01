import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
// Dashboard
import DashboardLayouts from '@/components/layouts/dashboardLayouts.vue'
import Dashboard from '../views/admin/Dashboard.vue'
// Project
import ProjectIndex from '../views/admin/project/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    component: DashboardLayouts,
    children:[
      {
        path:'/dashboard',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/',
    component: DashboardLayouts,
    children:[
      {
        path:'/project',
        name: 'projectIndex',
        component: ProjectIndex
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
