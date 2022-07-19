<template>
  <div class="aside" :style="{ width: info ? '50px' : '200px' }">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      unique-opened
      :collapse="info"
      collapse-transition
      router
    >
      <MenuTree
        v-for="(item, index) in menus.value"
        :key="index"
        :item="item"
      ></MenuTree>
    </el-menu>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
import { meun } from '../../api/user'
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const menus = reactive([])

const info = computed(() => {
  return store.getters.isCollData
})

meun().then((res) => {
  menus.value = res.data.menus
})
</script>
<style lang="scss" scoped>
.aside {
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
/*加快侧边栏文字消失的速度*/
.el-menu {
  transition: all 10ms;
}
</style>
