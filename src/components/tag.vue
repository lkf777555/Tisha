<template>
  <div>
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
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
const route = useRoute()
const router = useRouter()
const store = useStore()
store.dispatch('tag/views', { name: route.meta.title, path: route.path })

const info = computed(() => {
  return store.state.tag.tagList
})

const activeTabs = (val) => {
  router.push(val.props.name)
}

const removeTab = (path) => {
  store.dispatch('tag/remote', path)
}
</script>
<style lang="scss" scoped></style>
