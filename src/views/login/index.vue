<template>
  <div class="login">
    <div class="left">
      <h2>欢迎光临</h2>
    </div>
    <div class="right">
      <div class="fromBox">
        <div><h1>欢迎回来</h1></div>
        <div><small>-----账号密码登录-----</small></div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="ruleForm.username"
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Unlock"
              v-model="ruleForm.password"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Unlock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { login } from '../../api/user'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'

const ruleFormRef = ref()
const store = useStore()

const rules = reactive({
  username: [
    {
      required: true,
      message: '请 输 入 用 户 名',
      trigger: 'blur'
    },
    { min: 3, max: 5, message: '字 符 在 3 ~ 5', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请 输 入 密 码',
      trigger: 'blur'
    },
    { min: 3, max: 5, message: '字 符 在 3 ~ 5', trigger: 'blur' }
  ]
})

const ruleForm = reactive({
  username: 'admin',
  password: 'admin'
})

const submitForm = async (ruleFormRef) => {
  const data = await login(ruleForm)
  const token = data.data.data.token
  if (!ruleFormRef) return
  await ruleFormRef.validate((valid, fields) => {
    if (data.status === 200) {
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
      store.dispatch('login/token', token)
    }
  })
}
// const submitForm = () => {
//   login(ruleForm)
// }
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
}

.left {
  width: 1124px;
  height: 100vh;
  font-size: 48px;
  background: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.right {
  width: 562px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fromBox {
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  h1 {
    font-size: 38px;
  }
  small {
    color: #d1d5db;
  }
}
.el-button {
  width: 100%;
  border-radius: 25px;
  background: #626aef;
}
</style>
