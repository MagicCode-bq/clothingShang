<template>
  <Swiper>
    <swiper-item v-for=" item in banner">
      <a :href="item.link">
        <img :src="item.image"  @load="swiperImageLoad">
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    props:{
     banner:Array
    },
    data(){
       return{
      isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperImageLoad(){
        if(!this.isLoad){
         this.$emit('swiperimgload');
         this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>

</style>
