<template>
  <div id="app">
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info" icon="el-icon-search">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div>
      <upload></upload>
    </div>
    <div>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main  
          <date></date>
        </el-main>
      </el-container>
      <hr>
    </div>
    
  </div>
</template>

<script>
import Date from "./components/Date.vue"
import Upload from "./components/Upload.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }  
  }
  ,
  components:{
    Date,
    Upload
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    width: 500px;
    height: 400px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>