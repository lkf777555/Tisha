<template>
  <div>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside><Aside></Aside></el-aside>
        <el-container>
          <el-main><Main></Main></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Header from './header'
import Aside from './aside'
import Main from './main'
</script>
<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 64px;
  background: #4338ca;
}
.el-aside {
  width: 250px;
}
.el-main {
  height: 92vh;
  overflow-x: hidden;
}
.el-main::-webkit-scrollbar {
  display: none;
}
</style>
