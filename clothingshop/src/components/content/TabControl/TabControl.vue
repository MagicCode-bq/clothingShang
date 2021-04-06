<template>
  <div class="tab-control">
     <div v-for="(item,index) in Titles"
          @click="clickItem(index)"
          :key="item"
          class="tab-control-item"
          :class="{isActive:index==ActiveItem}">
       <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      Titles:{
        type:Array,
        default(){
          return ["流行","新款","精选"]
        }
      }
    },
    data(){
      return{
         ActiveItem:0
      }
    },
    methods:{
      clickItem(index){
        this.ActiveItem=index
        this.$emit("itemclick",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    position: sticky;
    top: 44px;
    background-color: #ffffff;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .isActive{
    color:var(--color-tint);
  }
  .isActive span{
    padding: 3px  8px;
    border-bottom: 3px solid var(--color-tint);
  }

</style>
