<template>
  <div>
    <el-sub-menu :index="item.id + ''">
      <template #title>
        <el-button
          style="border: none; background: none; padding: 0; color: black"
          :icon="item.icon"
          size="small"
        ></el-button>
        <span>{{ props.item.name }}</span>
      </template>
      <el-menu-item-group v-for="(etem, index) in item.child" :key="index">
        <el-menu-item :index="etem.frontpath">
          <el-button
            style="border: none; background: none; padding: 0; color: black"
            :icon="etem.icon"
            size="small"
          ></el-button
          >{{ etem.name }}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
