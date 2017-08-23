<template>
<div class="map">
    <div class="amap-wrapper">
      <el-amap vid="amap" :plugin="plugins"></el-amap>
    </div>
    <div class="search wrapper">
      <input type="text" placeholder="搜索位置..">
    </div>
    <div class="aqi">
    <div>AQI</div>
    </div>
</div>
	
</template>
<script>
	
import Axios from 'axios'
    export default{
        data(){
     
          return{
            plugins: []
          }
        } ,
        mounted(){
       
         }
}
</script>
<style>
.map{
	width: 100%;
	height: 100%;
}
.amap-wrapper {
  width: 100%;
  height: 100%;
}	
.wrapper{
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.search{
  position: fixed;
  top:20px;

}
.search input{
  width: 100%;
  height: 50px;
}
</style>

 <!-- <template>
  <div id="app">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'vue-amap向你问好！'
    }
  }
}
</script>

<style>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style> -->