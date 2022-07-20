<template>
  <div>
    <!-- 顶部tag -->
    <div class="tag">
      <tag></tag>
    </div>
    <!-- 支付订单 -->
    <div class="orderList" v-loading="orderloading">
      <div
        class="order"
        v-for="(item, index) in orderListBox.value"
        :key="index"
      >
        <div class="orderBox">
          <div class="ordertop">
            <div class="unit">{{ item.title }}</div>
            <div class="unit">
              <el-tag :type="item.unitColor">{{ item.unit }}</el-tag>
            </div>
          </div>
          <div>
            <div class="orderCenter">
              <div class="ordernum">
                {{ item.value }}
              </div>
              <div class="padd"></div>
            </div>
          </div>
          <div class="footer">
            <div class="sub">{{ item.subTitle }}</div>
            <div class="sub">{{ item.subValue }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 用户模块 -->
    <div class="userbox">
      <div class="userinfo" v-for="item in userList" :key="item">
        <div class="info" @click="$router.push(`${item.path}`)">
          <div class="inicon">
            <el-button
              style="
                border: none;
                background: none;
                padding: 0;
                color: black;
                font-size: 18px;
              "
              :icon="item.icon"
              size="small"
            ></el-button>
          </div>
          <div class="inicon">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- 图表部分 -->
    <div class="chart" v-loading="orderloading">
      <!-- 左边图表部分 -->
      <div class="left">
        <div class="lefTop">
          <div>订单统计</div>
          <span>
            <el-check-tag
              :checked="chartType === 'month'"
              @click="changeChartType('month')"
              style="margin-right: 8px"
              >近一个月</el-check-tag
            >
            <el-check-tag
              :checked="chartType === 'week'"
              @click="changeChartType('week')"
              style="margin-right: 8px"
              >近一周</el-check-tag
            >
            <el-check-tag
              :checked="chartType === 'hour'"
              @click="changeChartType('hour')"
              style="margin-right: 8px"
              >近24小时</el-check-tag
            >
          </span>
        </div>
        <div class="leftBottmo">
          <div id="Main" style="width: 644px; height: 300px"></div>
        </div>
      </div>
      <!-- 右边店铺信息展示 -->
      <div class="right">
        <div class="contentChart">
          <div class="top">
            <div class="topsub">店铺及商品提示</div>
            <div class="topsub">
              <el-tag class="ml-2" type="danger">店铺及商品提示</el-tag>
            </div>
          </div>
          <div class="bottomDer">
            <div class="bottomList" v-for="item in goodsList.value" :key="item">
              <div class="bottomValue">{{ item.value }}</div>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </div>
        <div class="contentChart">
          <div class="top">
            <div class="topsub">交易提示</div>
            <div class="topsub">
              <el-tag class="ml-2" type="danger">需要立即处理的交易订单</el-tag>
            </div>
          </div>
          <div class="bottomDer">
            <div class="bottomList" v-for="item in orderList.value" :key="item">
              <div class="bottomValue">{{ item.value }}</div>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import tag from '../../components/tag.vue'
import { order, shop, getChart } from '../../api/user'
import { reactive, ref } from 'vue'
import * as echarts from 'echarts'
const orderListBox = reactive([])
const orderloading = ref(true)
const chartType = ref('week')
// 中间部分icon
const userList = reactive([
  {
    title: '用户',
    icon: 'user',
    path: '/user/list'
  },
  {
    title: '商品',
    icon: 'shopping-cart',
    path: '/goods/list'
  },
  {
    title: '订单',
    icon: 'Tickets',
    path: '/order/list'
  },
  {
    title: '评价',
    icon: 'comment',
    path: '/comment/list'
  },
  {
    title: '图库',
    icon: 'picture-filled',
    path: '/image/list'
  },
  {
    title: '公告',
    icon: 'Bell',
    path: '/notice/list'
  },
  {
    title: '配置',
    icon: 'set-up',
    path: '/setting/base'
  },
  {
    title: '优惠券',
    icon: 'Files',
    path: '/coupon/list'
  }
])
const goodsList = reactive([])
const orderList = reactive([])
// 支付订单接口调用
order().then((res) => {
  orderListBox.value = res.data.panels
  orderloading.value = false
})
// 店铺信息展示
shop().then((res) => {
  goodsList.value = res.data.goods
  orderList.value = res.data.order
  orderloading.value = false
})
// 图表
const getChartData = () => {
  getChart(chartType.value).then((res) => {
    const myChart = echarts.init(document.getElementById('Main'))
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: res.data.x
      },
      yAxis: {
        type: 'value',
        data: res.data.y
      },
      series: [
        {
          name: '销量',
          type: 'bar',
          data: res.data.y,
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    })
  })
}
getChartData()
const changeChartType = (type) => {
  chartType.value = type
  getChartData()
}
</script>
<style lang="scss" scoped>
.order {
  width: 332px;
  height: 190px;
  margin: 20px 10px;
  background: #ffffff;
}
.order:hover {
  box-shadow: 1px 1px 1px 1px grey;
}
.orderList {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ordertop {
  width: 100%;
  height: 28px;
  font-size: 12px;
  border-bottom: 1px solid #e4e7ed;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .unit {
    padding: 0px 10px;
  }
}
.orderCenter {
  width: 100%;
  height: 114px;
  .ordernum {
    padding: 15px 0px 0px 15px;
    height: 70px;
    font-size: 32px;
    color: rgba(107, 114, 128);
    font-weight: 700;
  }
  .padd {
    margin-left: 16px;
    width: 90%;
    border-bottom: 1px solid #dcdfe6;
  }
}
.footer {
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sub {
    padding: 0px 20px;
  }
}
.userbox {
  margin-top: 5px;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-around;
  .userinfo {
    width: 154px;
    height: 82px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    .info {
      width: 70px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .inicon {
        font-size: 18px;
        padding: 5px 0px;
      }
    }
  }
  .userinfo:hover {
    box-shadow: 1px 1px 1px 1px grey;
  }
}
.chart {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    width: 686px;
    height: 387px;
    .lefTop {
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f9fafb;
      border-bottom: 1px solid #e4e7ed;
    }
  }
  .right {
    width: 685px;
    height: 387px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .contentChart {
      width: 685px;
      height: 174px;
      background: #f9fafb;
      .top {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e4e7ed;
        .topsub {
          padding: 0px 10px;
        }
      }
      .bottomDer {
        width: 100%;
        height: 134px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #ffffff;
        .bottomList {
          width: 146px;
          height: 90px;
          color: #817280;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: #f6f6f6;
          .bottomValue {
            height: 30px;
          }
        }
      }
    }
  }
}
</style>
