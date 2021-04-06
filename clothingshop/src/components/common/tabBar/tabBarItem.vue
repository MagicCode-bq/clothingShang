<template>
  <div class="NavBarItem" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-image"></slot>
    </div>
    <div v-else>
      <slot name="item-image-active"></slot>
    </div>
    <div  :style="showColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props:{
      path:String,
      activeStyle:{
          type:String,
          default:'red'
      }
    },
    data(){
      return{

      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    },
    computed:{
       isActive(){
          return this.$route.path.indexOf(this.path)==-1
       },
      showColor(){
         return !this.isActive?{color:this.activeStyle}:{}
      }

    }
  }
</script>

<style scoped>
  .NavBarItem{
    flex: 1;
    height: 49px;
    width: 49px;
    text-align: center;
  }
  .NavBarItem img{
    width: 22px;
    height: 22px;
    vertical-align: middle;
    padding-bottom: 2px;
  }
</style>
