<template>
  <div id="zhuye" >
      <div class="tabbar">主页</div>
      <div class="content">
        <li v-for="i in 50">我是一个很长的列表....</li>


      </div>
  </div>

</template>

<script>

export default {

  data () {
    return {


    }
  },
  computed:{

  },
  watch:{

  },
  mounted: function(){



  },

  methods:{



  }
}
</script>

<style scoped>
 #zhuye{
   display: flex;
  flex-direction: column;
   height: 100%;
   box-sizing: border-box;
 }
  .tabbar{
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    background-color: #0FA0FA;
    color: #fff;
    overflow: auto;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)
  }
  #zhuye .content{
    flex: 1;
    overflow-y: scroll;
  }
</style>
