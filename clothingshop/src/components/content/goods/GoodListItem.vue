<template>
   <div class="goods-list-item">
     <img :src="good.show.img">
     <div class="goods-info">
       <p>{{good.title}}</p>
       <span class="price">￥{{good.price}}</span>
       <span class="collect">{{good.cfav}}</span>
     </div>
   </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props:{
      good:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    font-size: 14px;
    position: relative;
    width: 170px;
    padding-bottom: 4px;
  }

  .goods-list-item img {
    display: block;
    width: 170px;
    height: 256px;
    border-radius: 5px;
    object-fit: cover;
  }

  .goods-info {
    font-size: 14px;
    overflow: hidden;
    margin-top: 4px;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    margin-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .goods-info .price {
    margin-right: 30px;
    color: #ff5777;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    position: absolute;
    top: 2px;
    left: -16px;
    width: 14px;
    height: 14px;
    content: "";
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }

</style>
