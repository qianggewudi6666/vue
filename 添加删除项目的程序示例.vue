<template>
  <div id="app">
	<input type="text" v-model="pt"/><button @click="add">添加按钮</button>
	<ul>
		<li v-for="(value,index) in project" :key="index" v-show="value.hide">
			<input type="checkbox" v-model="value.state">
			<span :class="{'del':value.state}">{{value.title}}</span>
			<a href="javascript:;" :title="index" @click="remove">删除</a>
		</li>
	</ul>
	<button @click="hide">已完成显示开关</button>
	<button @click="del_all">清除已完成</button>
  </div>
</template>
<script>
 
  export default {
     name:"app",
     data:()=>{
         return {
			project:[],
			pt:"",
			xy:"show"
         }
     },
	 methods:{
		  add:function(){
			 let newpj={"title":this.pt,"state":false,"hide":true};
			 this.project.push(newpj);
		  },
		  remove:function(e){
			  let index=e.target.getAttribute("title");
			  this.project.splice(index,1);
		  },
		  hide:function(){
			 if(this.xy=="show"){ 
			  for(var i in this.project){
				  if(this.project[i].state){
					  this.project[i].hide=false;
				  }
			  }
			  this.xy="hide";
			}else{
				for(var h in this.project){
					this.project[h].hide=true;				
				}
				this.xy="show";
			}
		  },
		  del_all:function(){
			  let newpro=this.project;
			  //console.log(newpro)
			  for(var i=0;i<newpro.length;i++){
			  	if(newpro[i].state){
					console.log(i);
					newpro.splice(i,1)
					i--;
				}			
			  }
			   this.project=newpro;
		  }
		} 
	 }
</script>

<style scoped>
 .del{
	 text-decoration: line-through;
 }
</style>