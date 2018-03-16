// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase'

Vue.config.productionTip = false


// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyB3qkkF7Nqt6HqypX_YEzk4SUnLv6Lp3fw",
  authDomain: "login-elvan.firebaseapp.com",
  databaseURL: "https://login-elvan.firebaseio.com",
  projectId: "login-elvan",
  storageBucket: "",
  messagingSenderId: "850811658813"
};

Firebase.initializeApp(config);
Firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

/* eslint-disable no-new */



