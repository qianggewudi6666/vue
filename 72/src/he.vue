<template>
  <div>
      <button @click="()=>{change('he1')}">hello</button>
      <button @click="()=>{change('he2')}">hi</button>
      <transition enter-active-class="animated tada" leave-active-class="animated bounceQutRight" >
      <component :is="msg"></component>
      </transition>
    </div>
</template>

<script>
import he1 from "./he1.vue"
import he2 from "./he2.vue"
export default {
    name:"HE",
    components:{
        he1,
        he2
    },
    data:()=>{
        return {
            msg:"he1"
        }
    },
    methods:{
        change:function(cname){
            this.msg=cname
        }
    }
}
</script>

<style>

</style>