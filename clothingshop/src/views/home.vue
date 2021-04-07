<template>
    <div id="home">
      <nav-bar class="home-nav"/>
      <tab-control  class="tabControl1"   ref="tabControl1" @itemclick="itemClick"  v-show="isControlShow" />
      <scroll class="wrapper"
               ref="scroll"
              :pullUpLoad="true"
              :probeType="3"
              @listenerscroll="ListenerScroll"
              @pullingup="pullingUp"
               >

      <home-swiper :banner="banner" @swiperimgload="swiperImgLoad"  />
      <home-recommend-view :recommend="recommend" />
      <feature-view/>
      <tab-control  ref="tabControl2" @itemclick="itemClick"/>
      <good-list :goods="goodList" />
      </scroll >

      <back-top @click.native="topClick"   v-show="isShow" />

    </div>
</template>

<script>
  import {requestHomeMultiData, getHomeGoodList}  from 'network/home'

  import NavBar from "components/common/navbar/NavBar";
  import TabControl  from 'components/content/TabControl/TabControl'
  import  scroll from 'components/common/Scroll/scroll'
  import  backTop from 'components/content/backTop/backTop'

  import HomeSwiper from "./home/HomeSwiper"
  import HomeRecommendView  from './home/HomeRecommendView'
  import FeatureView from "./home/FeatureView"
  import GoodList from "components/content/goods/GoodList"
  import BackTop from "../components/content/backTop/backTop";

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
        goodItemListType:"pop",
        isShow:false,
        ControlOffsetTop:0,
        isControlShow:false,
        saveY:0 //记录离开的位置
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
      //开启总线事件监听
      this.monitorBus();


    },
    computed:{
      goodList(){
       return  this.goods[this.goodItemListType].list
      },
    },
    activated() {
      //回页面时，跳转路径
      this.$refs.scroll.Bscroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.Bscroll.refresh()

    },
    deactivated() {
    //离开时 记录Scroll的位置
      this.saveY = this.$refs.scroll.Bscroll.y;
    },
    methods:{

      /**
       * BUS总线事件监听
       */
       monitorBus(){
         //重新监听Scroll的高度
        //let refs = this.debounce(this.$refs.scroll.Bscroll.refresh,200);
         this.$bus.$on('itemImgLoad',()=>{
           this.$refs.scroll.Bscroll.refresh()
         })
      },


      /**
      *事件处理
      */
      //防抖函数
      debounce(func, delay) {
        let timer = null

        return function (...args) {

          if (timer) clearTimeout(timer)

          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)

        }
      },
       //分类导航点击事件
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
         this.$refs.tabControl2.ActiveItem=index
         this.$refs.tabControl1.ActiveItem=index
      },
      //Scroll滚动条位置,TOP组件隐藏与显示
      ListenerScroll(position){
        //判断backTop 是否显示
        this.isShow=-(position.y)>1000

        //判断TabControl是否显示
        this.isControlShow=(-position.y)>this.ControlOffsetTop
      },
      //top按钮点击会到顶部
      topClick(){
        this.$refs.scroll.Bscroll.scrollTo(0,0,300)
      },
      //下拉加载更多数据
      pullingUp(){
       this.getHomeGoodList(this.goodItemListType)
        this.$refs.scroll.Bscroll.finishPullUp();
      },
      //轮播图加载完毕
      swiperImgLoad(){
        this.ControlOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
      //公共组件
      BackTop,
      NavBar,
      TabControl,
      scroll,
      backTop,

      //页面组件
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      GoodList
    }

  }
</script>
<style scoped>

  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    overflow: hidden;
  }
  .tabControl1{
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 9;
  }

</style>
