<template>
   <div  class="back-top">
     <img src="~assets/image/common/top.png">
   </div>
</template>

<script>
  export default {
    name: "backTop"
  }
</script>

<style scoped>

  .back-top {
    position: fixed;
    z-index: 10;
    right: 10px;
    bottom: 60px;
  }

  .back-top img {
    width: 40px;
    height: 40px;
  }

</style>
