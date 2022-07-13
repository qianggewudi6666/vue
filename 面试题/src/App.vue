<template>
  <div id="app">
    <input type="text" v-model="pname" /><button @click="add">添加</button>
    <ul>
      <li v-for="(item,index) in list" :key="item.id" :class="item.show==false?'hide':''">
        <input key="index" v-if="item.isok==false" :name="index" @change="change" type="checkbox">
        <input key="index++" v-else :name="index" checked @change="change" type="checkbox">
        <span :class="item.isok==false?'':'over'">{{item.name}}</span>
        <button @click="del" :name="index">删除</button></li>
    </ul>
    <button @click="showthing">隐藏已完成</button><button @click="dell">删除已完成</button>
  </div>
</template>

<script>
export default {
  data:()=>{
    return {
      list:[{"id":0,"name":"香蕉","isok":false,"show":true},{"id":1,"name":"苹果","isok":false,"show":true}],
      pname:"",
      pid:1,
      showw:"show"
    }
  },
  methods:{
    add:function(){
      this.list.push({"id":++this.pid,"name":this.pname,"isok":false,"show":true})
    },
    del:function(e){
      this.list.splice(e.target.name,1)
    },
    change:function(e){
      if(this.list[e.target.name].isok===false){
        this.list[e.target.name].show=false
        this.list[e.target.name].isok=true
      }else{
        this.list[e.target.name].isok=false
      }
    },
    showthing:function(){
      if(this.showw=="show"){
        for(let i of this.list){
          if(i.isok==true){
            i.show=false
          }
        }
        this.showw="hide"
      }else{
        for(let i of this.list){
          i.show=true
        }
        this.showw="show"
      }
    },
    dell:function(){
      let arr=[]
      for(let i of this.list){
        if(i.isok==false){
          arr.push(i)
        }
      }
      this.list=arr
    }
  }
}
</script>

<style>
.over{
  text-decoration: line-through;
}
.hide{
  display: none;
}
</style>
