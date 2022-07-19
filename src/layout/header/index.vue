<template>
  <div class="header">
    <!-- 顶部左边部分 -->
    <div class="left">
      <div class="logo">
        <img class="iconimg" src="../../assets/ele.png" alt="" /> 积云编程
      </div>
      <div class="menubox">
        <div class="hoveicon" @click="isDel">
          <el-icon size="28px"><Fold /></el-icon>
        </div>
        <div class="hoveicon" @click="go">
          <img class="iconimgbox" src="../../assets/sh.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 顶部右边部分 -->
    <div class="right">
      <div class="hoveicon" @click="onToggle" v-if="!isFullscreen">
        <el-icon size="28px"><FullScreen /></el-icon>
      </div>
      <div v-else class="hoveicon" @click="onToggle">
        <el-icon size="28px"><Aim /></el-icon>
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link" style="color: white">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click="back">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ArrowDown, Fold, FullScreen, Aim } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const store = useStore()

// 是否全屏
const isFullscreen = ref(false)

// 刷新页面
const go = () => {
  router.go(0)
}

// 退出登录
const back = () => {
  localStorage.removeItem('token')
  router.push('/login')
  ElMessage({
    message: '退出登录',
    type: 'success'
  })
}

// 折叠烂
const isDel = () => {
  store.dispatch('login/isColl')
}

// 监听变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

// 切换事件
const onToggle = () => {
  screenfull.toggle()
}

// 设置侦听器
onMounted(() => {
  screenfull.on('change', change)
})

// 删除侦听器
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
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
  }
}
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
.right {
  color: white;
  width: 140px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
