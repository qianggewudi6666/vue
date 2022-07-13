<template>
  <div id="app">
    <el-container>
  <el-header>秦皇岛朗科</el-header>
  <el-container>
    <el-aside width="200px">
      <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="aqua"
      active-text-color="#ffd04b"
      :router="true">
      <el-menu-item index="/" style="font-size:24px;margin-top: 80px;"><i class="el-icon-picture-outline"></i>banner
      </el-menu-item>
      <el-menu-item index="about" style="font-size:24px;margin-top: 80px;"><i class="el-icon-s-grid"></i>菜品
      </el-menu-item>
      <el-menu-item index="3" style="font-size:24px;margin-top: 80px;"><i class="el-icon-s-custom"></i>教师
      </el-menu-item>
      <el-menu-item index="4" style="font-size:24px;margin-top: 80px;"><i class="el-icon-s-opportunity"></i>新闻
      </el-menu-item>
    </el-menu>
  </el-col>
    </el-aside>
    <el-main style="height:660px">
      <router-view/>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
.el-header{
    background-color: #B3C0D1;
    color:aqua;
    font-size: 30px;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height:800px;
    position: fixed;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    margin-left: 200px;
  }
  .el-menu-vertical-demo{
    width: 200px;
    height: 700px;
    font-size: 30px;
  }
</style>
