<template>
  <div>
    <router-view/>
    <main-tab-bar/>
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
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
