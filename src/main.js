// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AMap from 'vue-amap'
import router from './router'

Vue.config.productionTip = false;
require('./assets/js/rem.js')

Vue.use(AMap)
AMap.initAMapApiLoader({
     key:"Key",
  plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'CircleEditor']
   });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
