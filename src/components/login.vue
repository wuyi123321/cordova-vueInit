<template>
  <div class="login">
    <div class="content">
      <div class="contitle">
        <div class="titleContent">AIOCOINOF</div>
        <div class="titleSub">我国地方政府国民经济体系产业链上下道工艺顺序两两整合环节企业集聚频谱分析工具
        </div>
      </div>
      <div class="loginform">
        <div class="linecell">
          <div class="cellLeft">
            <i  class="iconfont icon-wode"  style="font-size:0.54rem;color: #0FA0FA"></i>
          </div>
          <div class="cellright">
            <input slot="right"  v-model="form.phone" max="20" placeholder="用户名"></input>
          </div>
        </div>
        <div class="linecell">
          <div class="cellLeft">
            <!--<yd-icon name="setting" color="#888"></yd-icon>-->
            <i  class="iconfont icon-mima"  style="font-size:0.54rem;color: #0FA0FA"></i>
          </div>
          <div class="cellright">
            <input slot="right" type="password" v-model="form.password" placeholder="密码"></input>
          </div>
        </div>
        <div class="rempwd" >忘记密码？</div>
        <button size="large" class="loginbut"  @click="sublogin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'HelloWorld',
    data () {
      return {
        form:{
          phone:"wuyi",
          password:"123456"
        }
      }
    },
    created:function () {

    },
    methods:{
      sublogin:function () {
            this.$router.push({path:"main"})

      },




    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
  .content{
    flex: 1;
    background-color: #fff;
  }
  .titleContent{
    margin-top: 1.34rem;
    height: 0.82rem;
    line-height:  0.82rem;
    color: rgba(15, 160, 250, 1);
    font-size: 0.56rem;
    text-align: center;
    font-family: Arial;
  }
  .titleSub{
    margin-top: 0.45rem;
    color: rgba(179, 179, 179, 1);
    font-size: 0.32rem;
    padding-left: 0.42rem;
    padding-right: 0.42rem;
    text-align: center;
    font-family: Arial;

  }
  .loginform{
    margin-top: 1.2rem;
    padding-left: 0.24rem;
    padding-right: 0.24rem;
  }
  .linecell{
    border-bottom: solid 1px #eee;
    display: flex;
    height: 1.2rem;
    font-size: 0.3rem;
    justify-content: center;
    align-items: center;
  }
  .linecell .cellLeft{
    width: 1rem;
  }
  .linecell .cellright{
    flex:1;
  }
  .linecell .cellright input{
    width: 100%;
    height: 100%;

  }

  .linecell .cellright input:focus{
    border: none;
    outline:none;
    /*border: 1px solid red;*/
  }
  .loginbut{
    width: 100%;
    height: 45px;
    background-color:#0FA0FA ;
    font-size: 0.33rem;
    border: none;
    color: #ffffff;
    box-shadow: 1px 1px 2px #aaa;
    /*outline:none;*/
  }
  .loginbut:focus{
    outline: none;
    background-color: #0f90Ff;
  }
  .rempwd{
    margin-top: 0.5rem;
    text-align: right;
    height: 23px;
    line-height: 19px;
    color: rgba(0, 154, 250, 1);
    font-size: 13px;
    font-family: Arial;

  }

</style>
