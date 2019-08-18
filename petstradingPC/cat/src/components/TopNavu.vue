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
      <el-menu-item class="fr denglu" index="8">
      <img class="upic" :src="pic" alt=""> {{name}},欢迎您登录！
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
      activeIndex2: "1"
    };
  },
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
          this.$router.push("/login");
          return;
        }
        this.name = res.data.uname;
        this.pic=res.data.upic;
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
    }
  }
};
</script>


<style scoped>
.topgd {
  width: 100%;
  height: 80px;
  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999999; */
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
  z-index: 4;
}

.upic{
    width: 40px;
    height: 40px;
    border-radius: 40px;
}


</style>
