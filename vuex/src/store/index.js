import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr:[1,5,9,4,6,7,8,6],
    news:""
  },
  getters: {
    px:function(state){
      return state.arr.sort(function(a,b){return a-b})
    },
    xw:function(state){
      return state.news
    }
  },
  mutations: {
    add(state,c){
      state.arr.push(c)
    },
    setnews(state,news){
      state.news=news
    }
  },
  actions: {
    getnews(context){
      Axios({
        url:"http://www.qhdlink-student.top/student/newsa.php",
        method:"post",
        headers:{"content-type":"application/x-www-form-urlencoded"},
        data:"username=zyp&userpwd=123456&userclass=70&type=4"
      }).then(function(res){
        console.log(context);
        context.commit("setnews",res.data)
      })
    }
  },
  modules: {
  }
})
