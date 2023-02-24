import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.config.productionTip = false
Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'
App.mpType = 'app'
// 通过`console.log`打印的形式
console.log(uni.$u.config.v);
function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

const app = new Vue({
  ...App
})
app.$mount()
