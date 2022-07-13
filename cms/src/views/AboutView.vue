<template>
<div>
  <button class="e1" @click="add">添加</button>
  <div class="e2"><input type="text" @change="search"/><button @click="searchh">搜索</button></div>
  <table>
    <tr><td>菜品编号</td><td>菜品名称</td><td>生产时间</td><td>失效时间</td><td>折扣</td><td>价格</td><td>评价</td><td>菜品照片</td><td>操作</td>
    <tr v-for="(item,index) in msg" :key="index">
        <td v-for="(i,Iindex) in item" :key="Iindex">
          <img v-if="Iindex=='path_coach'" :src="'http://www.qhdlink-student.top/'+i"/>
          <span v-else>{{i}}</span>
        </td>
        <td>
          <button @click="change(index)">修改</button>
          <button @click="del" :name="index">删除</button>
        </td>
    </tr>
  </table>
            <div class="aa" v-show="hh">
                <ul>
                    <li>菜品编号：<input type="text" v-model="ad.a1"/></li>
                    <li>菜品名称：<input type="text" v-model="ad.a2"/></li>
                    <li>生产时间：<input type="text" v-model="ad.a3"/></li>
                    <li>失效时间：<input type="text" v-model="ad.a4"/></li>
                    <li>折扣：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="ad.a5"/></li>
                    <li>价钱：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="ad.a6"/></li>
                    <li>评价：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="ad.a7"/></li>
                    <li>菜品照片：<input type="text" v-model="ad.a8"/></li>
                </ul>
                <button @click="addd">添加</button><button @click="cancel">取消</button>
            </div>
            <div class="aa" v-show="hhh">
                <ul>
                    <li>菜品编号：<input type="text" v-model="ischangecon.id_coach"/></li>
                    <li>菜品名称：<input type="text" v-model="ischangecon.name_coach"/></li>
                    <li>生产时间：<input type="text" v-model="ischangecon.dage_coach"/></li>
                    <li>失效时间：<input type="text" v-model="ischangecon.tage_coach"/></li>
                    <li>折扣：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="ischangecon.type_coach"/></li>
                    <li>价钱：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="ischangecon.honor_coach"/></li>
                    <li>评价：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" v-model="ischangecon.evaluate_coach"/></li>
                    <li>菜品照片：<input type="text" v-model="ischangecon.path_coach"/></li>
                </ul>
                <button @click="sure">确定</button><button @click="cancell">取消</button>
            </div>
</div>
</template>

<script>
export default {
  name: 'HomeView',
  data:()=>{
    return{
      msg:"",
      ss:"",
      hh:false,
      hhh:false,
      ischangecon:"",     //修改框内容
      ischangeindex:"", 
      ad:{
        a1:"",
        a2:"",
        a3:"",
        a4:"",
        a5:"",
        a6:"",
        a7:"",
        a8:"",
      }
    }
  },
  methods:{
    del:function(e){
      console.log(e.target.name);
      this.msg.splice(e.target.name,1)
    },
    search:function(e){
      this.ss=e.target.value
    },
    searchh:function(){
      let arr=this.msg.filter((item)=>{
        console.log(item.name_coach);
          return item.name_coach.indexOf(this.ss)==-1?false:true
        })
        this.msg=arr
    },
    add:function(){
      this.hh=true
    },
    addd:function(){
      this.msg.push(this.ad)
      this.ad={a1:"",
              a2:"",
              a3:"",
              a4:"",
              a5:"",
              a6:"",
              a7:"",
              a8:"",}
      this.hh=false
    },
    cancel:function(){
      this.hh=false
    },
    change:function(i){
      this.ischangecon=this.msg[i]
      console.log(this.ischangecon);
      this.ischangeindex=i
      this.hhh=true
    },
    sure:function(){
      let i=this.ischangeindex
      this.msg[i]=this.ischangecon
      this.hhh=false
    },
    cancell:function(){
      this.hhh=false
    },
  },
  beforeMount:function(){
    fetch(
        "http://www.qhdlink-student.top/student/coacha.php",
            {
              "method":"post",
              "headers":{"content-type":"application/x-www-form-urlencoded"},
              "body":"username=zyp&userpwd=123456&userclass=70&type=4"
            }    
        ).then(function(res){
            return res.json()
        }).then((data)=>{
          console.log(data);
          let arr=[]
          for(let i in data){
            arr.push(data[i])
          }
          this.msg=arr
          console.log(this.msg);
        })
  }
}
</script>
<style scoped>
img{
  width: 100%;
}
td{
  border-collapse: collapse;
  border: 1px solid pink;
  width: 150px;
  height: 100px;
}
table{
  clear: both;
}
.e1{
  float: left;
}
button{
  width: 50px;
  height: 30px;
}
input{
  height: 28px;
}
.e2{
  float: right;
}
.aa{
  width: 320px;
  height: 300px;
  background-color: rgb(255,174,203,0.9);
  position: fixed;
  left: 0;
  right: 0;
  top: 200px;
  margin: auto;
  border-radius: 10px;
  padding-top: 10px;
}
.aa button{
  margin-top: 10px;
  margin-left: 30px;
}
li{
  list-style: none;
}
</style>

