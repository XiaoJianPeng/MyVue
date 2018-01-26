<template>
  <div id="app">
    {{str}}
    <br>
    {{msg}}<br><hr>
    <el-button >普通按钮</el-button>
    <el-button type="success" @click="get('https://api.github.com/users/itstrive')">获取数据</el-button>
    <el-input v-model="input" prefix-icon="el-icon-search" placeholder="请输入内容"></el-input>
    <el-input v-model="input" prefix-icon="el-icon-date" placeholder="请选择日期"></el-input>
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </div>
    <div class="block1">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input:'',
      num1:16,
      str:''
    }
  },
  methods: {
      handleChange(value) {
       console.log(value);
      },
      get(value){
        axios.get(value)
        .then(function(res){
          this.msg=res.data;
        }.bind(this)).catch(function(err){
          console.log(err);
        })
      }
    }
}
</script>

<style lang="scss">

</style>
