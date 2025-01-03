import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Product',
    name: 'Product',

    component: () => import('../views/Product.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',

    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Register',
    name: 'Register',

    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/login.vue')
  },
  {
    path: '/AddProduct',
    name: 'Addproduct',

    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/Gradecal',
    name: 'Gradecal',

    component: () => import('../views/Gradecal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
