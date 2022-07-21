<template>
  <div class="table">
    <el-table :data="props.data" border>
      <el-table-column
        v-for="(item, index) in cols"
        :key="index"
        :label="item.label"
        :type="item.type"
        :align="item.align"
        :prop="item.name"
        :width="item.width + 'px'"
      >
        <template v-slot="{ row, $index, column }">
          <slot
            :column="column"
            :index="$index"
            :row="row"
            :name="item.slot"
          ></slot></template
      ></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  cols: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>
