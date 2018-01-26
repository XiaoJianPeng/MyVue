import Vue from 'vue'
import App from './App.vue'
import Store from './store.js'
new Vue({
  Store,
  el: '#app',
  render: h => h(App)
})
