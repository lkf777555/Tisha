<template>
  <div class="goods">
    <!-- tag部分 -->
    <div class="tag">
      <tag></tag>
    </div>
    <div class="tabs">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部" name="all"> </el-tab-pane>
        <el-tab-pane label="审核中" name="checking"></el-tab-pane>
        <el-tab-pane label="出售中" name="saling"></el-tab-pane>
        <el-tab-pane label="已下架" name="off"></el-tab-pane>
        <el-tab-pane label="库存预警" name="min_stock"></el-tab-pane>
        <el-tab-pane label="回收站" name="delete"></el-tab-pane>
      </el-tabs>
      <el-card class="box-card" v-loading="goodsloading">
        <!-- 顶部搜索部分 -->
        <div class="cardTopBox"></div>
        <!-- 中间表格部分 -->
        <div class="card-Table">
          <el-table
            ref="multipleTableRef"
            :data="goodList.value"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="title" label="商品" width="320" key="slot">
              <!-- 插槽下的内容 -->
              <template #default="scope">
                <div class="tableIist">
                  <div><img :src="scope.row.cover" alt="" /></div>
                  <div class="tableIistRight">
                    <small>{{ scope.row.desc }}</small>
                    <div>
                      <span style="color: red"
                        >￥{{ scope.row.min_price }}</span
                      >
                      <span>￥{{ scope.row.min_oprice }}</span>
                    </div>
                    <p
                      style="font-size: 12px; color: #9ca3af"
                      v-if="scope.row.category"
                    >
                      分类:{{ scope.row.category.name }}
                    </p>
                    <p
                      style="font-size: 12px; color: #9ca3af"
                      v-if="scope.row.category"
                    >
                      创建时间:{{ scope.row.category.update_time }}
                    </p>
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="discount" label="实际销量" width="120">
            </el-table-column>
            <el-table-column prop="title" label="商品状态" width="120">
            </el-table-column>
            <el-table-column prop="title" label="审核状态" width="120">
            </el-table-column>
            <el-table-column prop="stock" label="总库存" width="120">
            </el-table-column>
            <el-table-column label="操作" width="510" align="center">
              <template #default="scope">
                <div class="tableDle">
                  <el-button link>修改</el-button>
                  <el-button link>商品规格</el-button>
                  <el-button link>设置轮播图</el-button>
                  <el-button link>商品详情</el-button>
                  <el-button link @click="deleteRow(scope.row)">删除</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import tag from '../../components/tag'
import { ref, reactive } from 'vue'
import { tabs } from '../../api/user'
// 定义默认第一个全部
const activeName = ref('all')
// 定义表格数据
const goodList = reactive([])
// loading加载
const goodsloading = ref(true)
// 点击切换
const handleClick = async (tab) => {
  activeName.value = tab.props.name
  await getTasData()
}
// 页面初始调用
const getTasData = async () => {
  const res = await tabs(activeName.value)
  goodsloading.value = false
  goodList.value = res.data.list
}
// 页面初始调用
getTasData()
// 全选
const handleSelectionChange = () => {}
const deleteRow = (row) => {
  console.log(row)
}
</script>
<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.tabs {
  margin-top: 15px;
  text-align: center;
}
.tableIist {
  width: 320px;
  height: 82px;
  display: flex;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  .tableIistRight {
    margin-left: 20px;
  }
}
.tableDle {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
