<template>
  <div class="mian">
    <div  class="socll">
      <router-view></router-view>
    </div>


    <div class="navabr">
      <router-link to="zhuye" class="linkitem">
          <div class="linkitem">
              <i  slot="icon" class="iconfont icon-yduizhuyexuanzhong"  style="font-size:0.54rem"></i>
              <span>主页</span>
          </div>
      </router-link>
      <router-link to="localtion"  class="linkitem">
          <div class="linkitem">
            <i  slot="icon" class="iconfont icon-yduidingwei"  style="font-size:0.54rem"></i>
            <span>列表</span>
          </div>
      </router-link>
      <router-link to="me"  class="linkitem">
      <div class="linkitem">

        <i  slot="icon" class="iconfont icon-wode"  style="font-size:0.54rem"></i>
        <span>我</span>
      </div>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  },
  mounted: function(){

  },
  watch:{

  },
  methods:{
    getdots:function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mian{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .socll{
    flex: 1;
    overflow-y: scroll;
  }
  .navabr{
    display: flex;
    border-top: solid 1px #eee;
    padding-bottom: 5px;
    background-color: rgb(255, 255, 255);
  }
  .navabr .linkitem{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(136, 136, 136);

    font-size: 0.24rem;
  }
  .mian .navabr .router-link-active .linkitem{
    color:#0FA0FA;
  }
</style>
