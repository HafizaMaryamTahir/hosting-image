import Vue from 'vue'
import VueRouter from 'vue-router'
import signin from '../views/signin.vue'
import forgot from '../views/forgot'
import navbar from '../components/navbar'
import updateprofile from '../views/updateprofile'
import uploadimage from '../components/uploadimage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: signin
  },
  {
    path: '/forgot',
    name: 'forgot',
    component:forgot
    
  },{
    path: '/navbar',
    name: 'navbar',
    component:navbar
    
  },
  {
    path: '/updateprofile',
    name: 'updateprofile',
    component:updateprofile
    
  }, {
    path: '/uploadimage',
    name: 'uploadimage',
    component:uploadimage
    
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
