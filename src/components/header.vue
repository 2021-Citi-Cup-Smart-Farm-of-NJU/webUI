<template>
  <div class="header">
    <div class="el-menu-demo">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">任务</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">个人中心</el-menu-item>
        <el-menu-item index="4" disabled=""><a href="http://localhost:8080/#/login" target="_blank">xxx</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
      name: "header",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
  }
</script>

<style>
  .el-menu-item{
    font-size: 20px;
  }
  .el-submenu{
    font-size: 20px;
  }

</style>
