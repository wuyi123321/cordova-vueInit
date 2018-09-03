<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        statusBarcolorPath:{
          black:['/login','/me']//设置黑色背景的路由
      }
      }
    },
    computed: {
      ...mapGetters({
        user:"getuserMessage"
      })
    },
    mounted: function(){

    },
  watch:{
//      $route:function (val) {
//         if(this.statusBarcolorPath.black.indexOf(val.path)!=-1){
//            StatusBar.backgroundColorByHexString("#333");
//         }else {
//           StatusBar.backgroundColorByHexString("#0FA0FA");
//         }
//      },
      user:function (val,old) {
        console.log(val);
        if(!val.userName){
          this.$router.replace('login');
        }
      }
  }
}
</script>

<style>
  body{
    overflow: hidden;
  }
#app{
  width: 100%;
  height: 100%;
}
  #app .yd-scrollview:after {
    content: "";
    display: block;
    width: 100%;
    height: 0rem;
  }
  #addcom .yd-popup-show{
    max-height: 60%;
  }
  #app .bottbut .yd-tabbar:after{
    border-top: none;
  }
</style>
