import Vue from 'vue'
import App from './App.vue'

import './element-ui.js'

//Vue.component(Button.name, Button)或

new Vue({
  el: '#app',
  render: h => h(App)
})
