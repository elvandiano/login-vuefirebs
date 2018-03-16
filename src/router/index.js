import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import firebase from 'firebase'

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path : '*',
      redirect : '/login'
    },{
      path : '/',
      redirect: '/login'
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },{
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta : {
        requiresAuth : true
      }
    }
  ]
});

router.beforeEach(function (to, from, next )  {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
});

export default router
