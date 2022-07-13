<template>
    <el-carousel height="600px">
      <el-carousel-item v-for="(item,index) in msg" :key="index">
        <img :src="'http://www.qhdlink-student.top/'+item.path_banner" alt=""/>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  name: 'HomeView',
  data:()=>{
    return{
      msg:""
    }
  },
  beforeMount:function(){
    fetch(
        "http://www.qhdlink-student.top/student/banner.php",
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
</style>
