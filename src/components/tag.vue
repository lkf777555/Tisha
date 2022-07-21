<template>
  <div class="tag">
    <div class="tabBox">
      <el-tabs
        v-model="$route.path"
        type="card"
        @tab-click="activeTabs"
        @tab-remove="removeTab"
      >
        <el-tab-pane
          :closable="item.path === '/' ? false : true"
          v-for="item in info"
          :key="item"
          :label="item.name"
          :name="item.path"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="tabMenu">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon class="down">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
const route = useRoute()
const router = useRouter()
const store = useStore()
store.dispatch('tag/views', { name: route.meta.title, path: route.path })
// 获取到vuex的tag
const info = computed(() => {
  return store.state.tag.tagList
})
// 点击跳转
const activeTabs = (val) => {
  router.push(val.props.name)
}
// 点击删除
const removeTab = (path) => {
  store.dispatch('tag/remote', path)
}
const handleCommand = (val) => {
  if (val === 'other') handleCloseOther()
  if (val === 'all') handleCloseAll()
}
// 关闭其他
const handleCloseOther = () => {
  store.dispatch('tag/handleCloseOther', route.path)
}
// 关闭所有
const handleCloseAll = () => {
  store.dispatch('tag/handleCloseAll')
}
</script>
<style lang="scss" scoped>
.tag {
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffff;
  .tabBox {
    width: 98%;
    height: 41px;
  }
}
</style>
