<template>
  <div>
    <!-- 顶部tag -->
    <div class="tag">
      <tag></tag>
    </div>
    <!-- 支付订单 -->
    <div class="orderList">
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
        <div class="info">
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
  </div>
</template>

<script setup>
import tag from '../../components/tag.vue'
import { order } from '../../api/user'
import { reactive } from 'vue'
const orderListBox = reactive([])
const userList = reactive([
  {
    title: '用户',
    icon: 'user'
  },
  {
    title: '商品',
    icon: 'shopping-cart'
  },
  {
    title: '订单',
    icon: 'Tickets'
  },
  {
    title: '评价',
    icon: 'comment'
  },
  {
    title: '图库',
    icon: 'picture-filled'
  },
  {
    title: '公告',
    icon: 'Bell'
  },
  {
    title: '配置',
    icon: 'set-up'
  },
  {
    title: '优惠券',
    icon: 'Files'
  }
])

// 接口调用
order().then((res) => {
  orderListBox.value = res.data.panels
  console.log(res.data.panels)
})
</script>
<style lang="scss" scoped>
.tag {
  width: 100%;
  height: 40px;
  background: white;
}
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
}
</style>
