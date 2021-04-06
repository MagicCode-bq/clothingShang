<template>
   <div ref="wrapper">
     <div class="content">
      <slot></slot>
     </div>
   </div>
</template>

<script>
  import Bscroll  from 'better-scroll'

  export default {
    name: "scroll",
    mounted() {
     this.loadScroll()
    },
    methods:{
      //加载Bscroll插件
      loadScroll(){
        const scroll =  new Bscroll(this.$refs.wrapper,{
          //开启触底事件
          pullUpLoad:true
        })
      }
    }
  }
</script>

<style scoped>

</style>
