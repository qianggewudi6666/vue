<template>
  <div id="app">
    <input type="text" v-model="c"><button @click="add">添加</button>
    <ul>
      <li v-for="(value,index) in sn" :key="index">{{value}}</li>
    </ul>
    <button @click="addnews">新闻</button>
    <ul>
      <li v-for="(value,index) in neww" :key="index">{{value}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      arr:[],
      c:"",
      news:""
    }
  },
  created(){
    this.arr=this.$store.getters.px
    this.news=this.$store.getters.xw
    console.log(this.news);
  },
  methods:{
    add(){
      this.$store.commit("add",this.c)
    },
    addnews(){
      this.$store.dispatch("getnews")
    }
  },
  computed:{
    sn:function(){
      return this.$store.state.arr
    },
    neww:function(){
      return this.$store.state.news
    }
  }
}
</script>

<style>

</style>
