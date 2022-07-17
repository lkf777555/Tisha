<template>
  <div class="header">
    <div class="left">
      <div class="logo">
        <img class="iconimg" src="../../assets/ele.png" alt="" /> 积云编程
      </div>
      <div class="menubox">
        <div class="hoveicon">
          <el-icon size="28px"><Fold /></el-icon>
        </div>
        <div class="hoveicon">
          <img class="iconimgbox" src="../../assets/sh.png" alt="" />
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { Fold } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.left {
  width: 340px;
  height: 64px;
  display: flex;
  align-items: center;
  color: white;
  .logo {
    width: 229px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 28px;
  }
  .iconimg {
    width: 32px;
    height: 32px;
  }
  .iconimgbox {
    width: 26px;
    height: 26px;
  }
  .menubox {
    width: 100px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .hoveicon {
      width: 50px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .hoveicon:hover {
      background: #4f46e5;
    }
  }
}
</style>
