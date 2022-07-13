<template>
  <div id="app">
    <button @click.ctrl="x">点击</button><br>
    <button @click="sMoney">传值给hw</button>
    <hw/>
    <he/>
    <FY/>
    <!-- <DY/> -->
  </div>
</template>

<script>
import {bus} from "./bus";
import He from './he.vue';
import hw from './hw.vue';
import FY from './fenye.vue';
// import DY from './dy.vue';
import "../../../资料/animation.css"
export default {
  name:"App",
  components: { hw, He ,FY/* ,DY */},
  data:function(){
    return{
      msg:"100万"
    }
  },
  methods:{
    sMoney:function(){
      bus.$emit("money",this.msg)
    },
    x:function(){
      alert(1)
    }
  }
}
</script>

<style>

</style>
