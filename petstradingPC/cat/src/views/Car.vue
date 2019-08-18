<template>
  <div class="bigbox">
     <top-nav></top-nav>
    <div class="mycar"> 
      <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
        <el-step title="1. 确认订单信息 "></el-step>
        <el-step title=" 2.确认支付 "></el-step>
        <el-step title="3.确认收货 "></el-step>
        <el-step title="4.双方互评 "></el-step>
      </el-steps>
      <ul class="mymodel" v-for="(g, ind) in carlist " :key="ind">
        <li class="xiao">猫名：{{g.class1}}</li>
        <li class="xiao">价格：{{g.price}}</li>
        <li class="xiao">卖家名：{{g.username}}</li>
        <li class="xiao">
          <img class="carinimg" :src="g.pic" />
        </li>
        <li class="munb">
          <div class="shuliang">
          <button type="button" @click="smallhandle(ind)">—</button>
          <input type="text" v-model="g.n" />
          <button type="button" @click="morehandle(ind)">+</button>
          </div>
        </li>
        <li class="xiao">价格：{{g.n*g.price}}</li>
      </ul>
      <div>总价：{{tp.totalprice}}</div>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      <el-button style="margin-top: 12px;" @click="callback">上一步</el-button>

    </div>
      <div class="myfo">
    <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 设置当前激活步骤，默认值是0
      active: 0
    };
  },
  methods: {
    smallhandle: function(index) {
      this.$store.commit("smallhandle", index);
    },
    morehandle: function(index) {
      this.$store.commit("morehandle", index);
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    callback(){
      if(this.active>0){
        this.active--;
      }
      
    }
  },
  computed: {
    carlist: {
      get: function() {
        // 获取vuex里面购物车的数据
        console.log(this.$store.state.car);
        return this.$store.state.car;
      },
      set: function(newValue) {}
    },
    tp: function() {
      return this.$store.getters.totalprice;
    }
  }
};
</script>

<style scoped>
.bigbox {
  width: 100%;
}

.mymodel {
  width: 80%;
  height: 100px;
  line-height: 100px;
  /* background-color: #ff0; */
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  margin: 20px auto;
}

.xiao {
  width: 14%;
}

li {
  list-style: none;
}
.mycar {
  width: 100%;
  padding: 10px;
  margin: 120px auto 30px;
  height: auto;
  background-color: #eee;
  box-sizing: border-box;
}

.munb {
  width: 25%;
  display: flex;
  height: 100%;
}

.shuliang {
 width: 100%;
 /* height: 100px; */
 /* background-color: #ff8; */
 margin: 2px auto;
}

.munb button {
  width: 40px;
  height: 30px;
  
}
.munb input {
  width: 100px;
  height: 26px;
  text-align: center;
  line-height: 26px;
}

.carinimg {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 20px auto;
}
</style>
