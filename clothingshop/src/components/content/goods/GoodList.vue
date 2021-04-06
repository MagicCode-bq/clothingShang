<template>
   <div class="goods-list">
     <good-list-item v-for="item in goods"  :good="item"/>
   </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";

  export default {
    name: "GoodList",
    components: {GoodListItem},
    props:{
      goods:{
        type:Array,
        default(){
           return[]
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
  }

</style>
