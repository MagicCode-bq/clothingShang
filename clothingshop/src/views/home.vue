<template>
    <div>
      <nav-bar class="home-nav"/>
      <home-swiper :banner="banner" />
      <home-recommend-view :recommend="recommend" />
    </div>
</template>

<script>
  import {requestHomeMultiData}  from 'network/home'

  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./home/HomeSwiper";
  import HomeRecommendView  from './home/HomeRecommendView'

  export default {
    name: "home",
    data(){
      return{
        banner:[],
        recommend:[]
      }
    },
    mounted() {
      //请求轮播图数据
      this.getHomeDataSwiper()
    },
    methods:{
      //请求首页轮播图
      getHomeDataSwiper(){
        requestHomeMultiData().then(res=>{
          this.banner=res.data.banner.list;
          this.recommend=res.data.recommend.list;
        })
      }
    },
    components:{
      HomeRecommendView,
      HomeSwiper,
      NavBar
    }

  }
</script>
<style scoped>

</style>
