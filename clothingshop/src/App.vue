<template>
  <div>
    <router-view/>
    <main-tab-bar class="mainTabBar"/>
  </div>
</template>

<script>
 import mainTabBar  from 'components/content/mainTabBar'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
    mainTabBar
  }
}
</script>

<style>
 @import "assets/css/base.css";
  .mainTabBar{
    background-color: #ffff;
  }
</style>
