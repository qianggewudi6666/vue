<template>
  <div>{{hh}}手机号：<input type="text" v-focus="con" v-model="con"><span></span></div>
</template>

<script>
import {bus} from "./bus";
export default {
name:"HE1",
data:function(){
  return{
    con:"",
    hh:""
  }
},
directives:{
  focus:{
    inserted(el){
      el.focus()
      el.nextElementSibling.innerHTML="请输入手机号"
    },
    update(el,binding){
      let reg=/^(13|15|16|17|18|19)\d{9}$/
      if(reg.test(binding.value)){
        el.nextElementSibling.innerHTML="正确"
      }
      else{
        el.nextElementSibling.innerHTML="格式不正确"
      }
    }
    }
  },
  mounted(){
        bus.$on("hh",(m)=>{
            this.hh=m
        })
  }
}
</script>

<style scoped>
div{
  background: pink;
}
</style>