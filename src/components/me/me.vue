<template>
  <div class="me">
      <div class="photo">
         <img src="../../assets/head_man.png" >
         <div class="name">无疑</div>
      </div>
      <div>
        <div class="listItem">
          <span>个人资料</span>
          <span></span>
        </div>
        <div class="listItem">
          <span>我的收藏</span>
          <span></span>
        </div>
        <div class="listItem" @click="relogin">
          <span>退出</span>
          <span></span>
        </div>

      </div>
  </div>
</template>

<script>

export default {
  name: 'me',
  data () {
    return {

    }
  },
  computed: {

  },
  mounted: function(){


  },
  methods:{
    relogin:function () {
      this.$router.push({path:'login'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .me{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .photo{
    height: 3.4rem;
    border-bottom: solid 8px #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .photo img{
    width: 1.2rem;
    height: 1.2rem;
    background-color: #eee;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .name{
    color: rgba(16, 16, 16, 1);
    font-size: 0.28rem;
    font-family: Arial;
  }
  .listItem{
    border-bottom: solid 1px #eee;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.32rem;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
  }
  .listItem span:last-child{
    display: inline-block;
    padding: 3px;
    border-right: 2px solid #555;
    border-bottom: 2px solid #555;
    transform: rotate(-45deg);
  }
</style>
