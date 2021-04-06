<template>
    <div id="home">
      <nav-bar class="home-nav"/>

      <scroll class="wrapper">
      <home-swiper :banner="banner" />
      <home-recommend-view :recommend="recommend" />
      <feature-view/>
      <tab-control @itemclick="itemClick"/>
      <good-list :goods="goodList" />
      </scroll>

    </div>
</template>

<script>
  import {requestHomeMultiData, getHomeGoodList}  from 'network/home'

  import NavBar from "components/common/navbar/NavBar";
  import TabControl  from 'components/content/TabControl/TabControl'
  import  scroll from 'components/common/Scroll/scroll'

  import HomeSwiper from "./home/HomeSwiper"
  import HomeRecommendView  from './home/HomeRecommendView'
  import FeatureView from "./home/FeatureView"
  import GoodList from "components/content/goods/GoodList"

  export default {
    name: "home",
    data(){
      return{
        banner:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodItemListType:"pop"
      }
    },
    created() {
      //请求轮播图数据
      this.getHomeDataSwiper()

      //请求商品数据
      this.getHomeGoodList("pop");
      this.getHomeGoodList("new");
      this.getHomeGoodList("sell");
      },
    mounted() {

    },
    computed:{
      goodList(){
       return  this.goods[this.goodItemListType].list
      }
    }
    ,
    methods:{

      /**
      *事件处理
      */
      itemClick(index){
         switch (index) {
         case 0:
            this.goodItemListType='pop'
             break;
         case 1:
             this.goodItemListType='new'
             break;
         case 2:
             this.goodItemListType='sell'
         }
      },

      /**
      *网络请求
      */
      //请求首页轮播图
      getHomeDataSwiper(){
        requestHomeMultiData().then(res=>{
          this.banner=res.data.banner.list;
          this.recommend=res.data.recommend.list;
        })
      },
      //加载商品数据
      getHomeGoodList(type){
        const page = this.goods[type].page+1
        const list  =this.goods[type].list
         getHomeGoodList(type,page).then(res=>{
              list.push(...res.data.list)
               this.goods[type].page+=1
         })
      }
    },
    components:{
      NavBar,
      TabControl,
      scroll,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      GoodList
    }

  }
</script>
<style scoped>

  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }

</style>
