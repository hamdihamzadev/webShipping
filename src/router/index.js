
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import TrackOrder from '@/views/TrackOrder.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:"HomeView",
    component:HomeView
  },
  {
    path:'/login',
    name:"login",
    component:LoginView
  },
  {
    path:'/signup',
    name:"signup",
    component:SignupView
  },
  {
    path:'/track',
    name:"track",
    component:TrackOrder
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
