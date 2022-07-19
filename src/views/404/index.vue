<template>
  <div class="tow">
    <div class="towbox">
      <div>404提示</div>
      <div>你找的页面走丢了~</div>
      <div><el-button type="primary" @click="goHome">回到首页</el-button></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
<style lang="scss" scoped>
.tow {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .towbox {
    width: 250px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
