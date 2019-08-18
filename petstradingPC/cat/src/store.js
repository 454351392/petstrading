import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 在本地获取
let cdata = window.localStorage.getItem('car');
if(cdata){
  // 转换成数组
  cdata = JSON.parse(cdata);
}else{
  cdata = [];
}

export default new Vuex.Store({
  state: {
       car:cdata,
        kw:""
  },
  mutations: {
    addCar:function(state,binfo){
        // this.state.car.push(data1);
        // console.log(data1)
        // 先把数组转换成字符串 保存在本地 
       
        let data1 = state.car;
        // 清空一次，让vuex发生变化，computed依赖发生变化会更新
        state.car = [];
        var i = data1.findIndex(item => item.id == binfo.id)
        // var i = data1.findIndex((item)=>{
        //     return item.id==binfo.id
        // })
        if (i == -1) {
          // 如果没有找到 把副本追加进来并追加新的元素
          state.car = data1;
          state.car.push(binfo)
        } else {
          // 如果已经存在，就直接在副本上修改数量，并存到vuex里面
          let a = data1[i].n;
          data1[i].n = a + 1;
          console.log(data1);
          state.car = data1;
        }
        window.localStorage.setItem('car', JSON.stringify(state.car));
      },
      smallhandle:function(state,index){
         var n =  state.car[index].n;
         n=n-1;
         if(n){

           state.car[index].n = n;
         }else{
           state.car.splice(index,1)
         }
         window.localStorage.setItem('car', JSON.stringify(state.car));
      },
      morehandle:function(state,index){
        var n =  state.car[index].n;
        state.car[index].n = n + 1;     
        window.localStorage.setItem('car', JSON.stringify(state.car));
      }
  },
  getters:{
    totalprice:function(state){
      let tp = {totalprice:0,n:0};
      for (let ind = 0; ind < state.car.length; ind++) {
        tp.totalprice += (state.car[ind].price * 10000 * state.car[ind].n) / 10000;
        tp.num += state.car[ind].num;
      }
      return tp;
    },
    changekw(state,data){
     state.kw = data.kw
     }
},
  actions: {

  }
})
