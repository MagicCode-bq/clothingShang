<template>
   <div ref="wrapper">
     <div class="content">
      <slot></slot>
     </div>
   </div>
</template>

<script>
  import Bscroll  from 'better-scroll'

  export default {
    name: "scroll",
    props:{
      pullUpLoad:{
       type:Boolean,
       default:true
       },
      probeType:{
         type:Number,
         default:0
      }

    },
    data(){
       return{
         Bscroll:{}, //better-scroll 对象,
       }
    },
    computed:{

    },
    mounted() {
      //加载Bscroll插件
        this.Bscroll =  new Bscroll(this.$refs.wrapper,{
          //开启DIV组件的点击事件
          click:true,
          //开启触底事件
          pullUpLoad: this.pullUpLoad,
          //是否开启滚动条监听
          probeType:this.probeType
        })
      this.listenerScroll()
      this.openPullingUp()
    },
    methods:{
        //开启滚动条事件的监听
        listenerScroll(){
         this.Bscroll.on('scroll',(position)=>{
             this.$emit("listenerscroll",position)
         })
        },
       //重新刷新Scroll的高度
        refresh(){
          if(this.Bscroll&&this.Bscroll.refresh()){
            this.Bscroll.refresh();
          }
       },
       //打开上拉加载更多函数回调
        openPullingUp(){
          this.Bscroll.on('pullingUp',()=>{
            this.$emit("pullingup")
          })
        }

    }
  }
</script>

<style scoped>

</style>
