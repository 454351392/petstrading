<template>
  <div class="topgd">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#000"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link class="a" to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link class="a" to="/salebuy">买猫卖猫</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link class="a" to="/knowledge">选猫知识</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link class="a" to="/variety">猫咪品种</router-link>
      </el-menu-item>

       <el-menu-item class="searchKey"  v-if="!noShowSearch">
          <input ref="myinput" @keyup.enter="mysearch" v-model="keywords" placeholder="请搜索关键词" @focus="noshow" @blur="needshow">
          <img src="../views/img/search.png" @click="mysearch2">
      </el-menu-item>

      <el-menu-item class="centerpic">
        <img
          class="centerpic1"
          src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/top_logo.png"
          alt
        />
      </el-menu-item>
      <el-menu-item class="fr" index="5">
        <router-link class="a" to="/contactus">联系我们</router-link>
      </el-menu-item>
      <el-menu-item class="fr" index="6">
        <router-link class="a" to="/aboutus">关于我们</router-link>
      </el-menu-item>
      <el-menu-item v-show="flag" class="fr" index="7">
        <router-link class="a" to="/reg">注册</router-link>
      </el-menu-item>
      <el-menu-item v-show="flag" class="fr" index="8">
        <router-link class="a" to="/login">登录</router-link>
      </el-menu-item>

      <!-- <el-menu-item v-show="flag1" class="fr" index="8">
       <a href="/userhome"> <img class="upic" :src="pic" alt=""> {{name}},欢迎您登录！</a>
      </el-menu-item>-->

      <el-menu-item v-show="flag1" class="fr denglu" index="8">
        <el-dropdown>
          <span class="el-dropdown-link">
            <a href="/userhome">
              <img class="upic" :src="pic" alt />
              {{name}},欢迎您登录！
            </a>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a class="myps" href="/uoperations/uinfo">个人信息</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a class="myps" href="/uoperations/uupdata">修改信息</a>
            </el-dropdown-item>
            <!-- <el-dropdown-item><a class="myps" href="/uoperations/uupkey">修改密码</a></el-dropdown-item> -->
            <el-dropdown-item>
              <span @click="ulogout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      pic:'',
      flag: true,
      flag1: false,
      activeIndex2: "1",    
       keywords:""
    };
  },
  props:['noShowSearch'],
  watch: {
    "$route.path": function() {
      console.log(this.$route.path);
      this.jiantiluyou();
    }
  },
  created() {
    this.jiantiluyou();
    this.axios
      .get("/checku")
      .then(res => {
        console.log(res);
        //如果没有登录信息，应该回到到登陆页面
        if (!res.data.id) {
          this.flag = true;
          this.flag1 = false;
        } else if (res.data.id) {
          this.flag = false;
          this.flag1 = true;
        }
        this.name = res.data.uname;
        this.pic = res.data.upic;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    jiantiluyou() {
      if (this.$route.path == "/salebuy") {
        this.activeIndex2 = "2";
      } else if (this.$route.path == "/knowledge") {
        this.activeIndex2 = "3";
      } else if (this.$route.path == "/variety") {
        this.activeIndex2 = "4";
      } else if (this.$route.path == "/contactus") {
        this.activeIndex2 = "5";
      } else if (this.$route.path == "/aboutus") {
        this.activeIndex2 = "6";
      } else if (this.$route.path == "/reg") {
        this.activeIndex2 = "7";
      } else if (this.$route.path == "/login") {
        this.activeIndex2 = "8";
      }
    },
       noshow (){
      this.$refs.myinput.placeholder = "";
    },
    needshow (){
      if(this.$refs.myinput.value == ""){
        this.$refs.myinput.placeholder = "请搜索关键词";
      }
    },
    mysearch (){
       console.log(this.keywords);
      this.$store.commit("changekw",{
        kw:this.keywords
      })
     
      this.$router.push("/searchpage");
    },
     mysearch2 (){
         console.log(this.keywords);
      this.$store.commit("changekw",{
        kw:this.keywords
      })
     
      this.$router.push("/searchpage");
    },
    ulogout() {
      this.axios
        .get("/uloginout")
        .then(res => {
          console.log(res);
          //退出登录
          if (!res.data.id) {
            this.flag = true;
            this.flag1 = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
 .el-menu li.denglu:hover {
  background-color: #fff !important;
}
</style>


<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.topgd {
  width: 100%;
  min-width: 980px;;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999999;
  /* background-color: pink; */
}
.fl {
  float: left;
}

.fr {
  float: right;
}

.a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

.centerpic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  left: 42%;
  top: -130px;
  box-shadow: 2px 4px 10px 1px #ccc;
}
.centerpic1 {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 46px;
  top: 136px;
  z-index: 999999;
}

.upic {
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
input {
  height: 30px;
  line-height: 30px;
  width: 200px;
  border-radius: 20px;
  border: 1.5px solid #ea5413;
  padding: 0px 12px;
  outline: transparent;
}
input::placeholder {
  color:  grey;
}
  .el-menu li.searchKey:hover {
  background-color: #fff !important;
}
.searchKey {
  position: relative;
}
.searchKey img {
  width: 20px;
  height: 20px;
  position: absolute;
  top:22px;
  right: 35px;
}
</style>
