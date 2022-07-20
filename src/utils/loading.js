// 引入loading
import { ElLoading } from 'element-plus'

// loading加载处理
const loading = {
  loadingInstance: null,
  // 开启loading加载
  open() {
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: '.app-main',
        fullscreen: false,
        background: 'rgba(0,0,0,0.6)',
        text: '正在加载中,慌尼玛啊',
        color: '#ffffff'
      })
    }
  },
  // 关闭loading加载
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

export default loading
