<template>
  <div id="app">
    <h1>vuex 练习</h1>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数增加" @click="clickOdd">
    <input type="button" value="异步增加" @click="clickAsync">
    <div>
      当前数字：{{count}};它是一个{{getOdd}}。
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',  
  computed:mapGetters([
    'count',
    'getOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'clickOdd',
    'clickAsync'
  ])
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
