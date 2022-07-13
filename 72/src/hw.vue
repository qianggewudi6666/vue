<template>
  <div>
      hw
      {{gMoney}}
        <button @click="x">hhh</button>
  </div>

</template>

<script>
import {bus} from "./bus";
export default {
    name:"HW",
    data:function(){
        return{
            gMoney:0
        }
    },
    methods:{
        x(){
            bus.$emit("hh",this.gMoney)
        }
    },
    mounted:function(){
        bus.$on("money",(m)=>{
            this.gMoney=m
        })
    }
}
</script>

<style>

</style>