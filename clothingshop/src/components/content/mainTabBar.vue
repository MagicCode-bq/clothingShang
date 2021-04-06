<template>
   <div>
     <tab-bar>
       <tab-bar-item path="/home"  >
         <img  slot="item-image" src="~assets/image/tabbar/home.svg">
         <img  slot="item-image-active" src="~assets/image/tabbar/home_active.svg">
         <div slot="item-text">首页</div>
       </tab-bar-item>
       <tab-bar-item path="/category"  >
         <img slot="item-image" src="~assets/image/tabbar/category.svg">
         <img slot="item-image-active" src="~assets/image/tabbar/category_active.svg">
         <div slot="item-text">分类</div>
       </tab-bar-item>
       <tab-bar-item path="/shopcart" >
         <img slot="item-image" src="~assets/image/tabbar/shopcart.svg">
         <img slot="item-image-active" src="~assets/image/tabbar/shopcart_active.svg">
         <div slot="item-text">购物车</div>
       </tab-bar-item>
       <tab-bar-item path="/profile" >
         <img slot="item-image" src="~assets/image/tabbar/profile.svg">
         <img slot="item-image-active" src="~assets/image/tabbar/profile_active.svg">
         <div slot="item-text">我的</div>
       </tab-bar-item>
     </tab-bar>
   </div>
</template>

<script>
  import  tabBar  from 'components/common/tabBar/tabBar'
  import  tabBarItem from 'components/common/tabBar/tabBarItem'
  export default {
    name: "mainTabBar",
    components: {
      tabBar,tabBarItem
    }
  }
</script>

<style scoped>

</style>
