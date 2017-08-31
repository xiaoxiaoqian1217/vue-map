// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import removeLoad from './utils/removeLoad'

// import VueAMap from 'vue-amap'


Vue.config.productionTip = false;
require('./assets/js/rem.js');
// 问题1

// let createMap = () => {
//   const promise = new Promise(function (resolve, reject) {
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = 'https://webapi.amap.com/maps?v=1.3&key=b7b1efb6ad8d7da0cac2f184bbbe8959'   // 高德地图
//     document.body.appendChild(script)
//     if (script.nodeName === 'SCRIPT') {
//       resolve()
//     } else {
//       reject(new Error('Could not script image at ' + script.src))
//     }
//   })
//   return promise
// }
// createMap().then(function () {
	
//   console.log('读取地图成功')
// //   console.log(AMap)
// //  var map = new AMap.Map('container',{
// //    zoom: 10,
// //    center: [116.39,39.9]
// // });
//   // 加載當前的ip定位
// }).catch(function (error) {
//   // 处理 getJSON 和 前一个回调函数运行时发生的错误
//   console.log('发生错误！', error)
// })

// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//      key:"b7b1efb6ad8d7da0cac2f184bbbe8959",
//   plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']  
//    });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
