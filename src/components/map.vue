<template>
  <div id="map"  @click="clickMap">

  </div>

</template>
<script>
import removeLoad from '../utils/removeLoad'

  export default{
    data(){

      return{
        geolocation:"",
        target:''

      }
    } ,
    methods:{
      initAMap(){
        var that=this;
        let mapObj=new AMap.Map('map');
        window.mapObj=mapObj
        mapObj.plugin('AMap.Geolocation', function () {
          let geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
         buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
         showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
         howCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
         panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
          mapObj.addControl(geolocation);
          geolocation.getCurrentPosition();

          AMap.event.addListener(geolocation,"complete" ,function(GeolocationResult){
            console.log(GeolocationResult)
            that.geolocation={
              lat:GeolocationResult.lat,
              lng:GeolocationResult.lng
            }
     });//返回定位信息
     AMap.event.addListener(geolocation, "err", onError);      //返回定位出错信息
     
   })
      },
      clickMap(){
        console.log('click');
        console.log(mapObj)
       AMap.event.addListener(mapObj,'clickMap',function(){
            console.log(MapsEvent);
            var target={

            }

       })
      }
    },
    created(){
      if(window.AMap){
 console.log('地图对象再次读取')
       this.initAMap();
     }else{
      removeLoad("https://webapi.amap.com/maps?v=1.3&key=b7b1efb6ad8d7da0cac2f184bbbe8959").then((e)=>{
        this.initAMap();
        console.log(e)
        console.log(AMap);
        console.log('地图对象读取成功')

      })

    }
        // this.initPsearch();//初始化搜索组件



      }
    }
  </script>
  <style>
    #map{
     width: 100%;
     height: 100%;
   }

 </style>

 