<template>
  <div class="sidenav">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds="['1']"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>信息管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/uoperations/uinfo">
              <el-menu-item index="1-1">个人信息</el-menu-item>
            </router-link>
            <router-link to="/uoperations/uupdata">
              <el-menu-item index="1-2">修改信息</el-menu-item>
            </router-link>
            <router-link to="/uoperations/uupkey">
              <el-menu-item index="1-3">修改密码</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2" v-show="flag">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/uoperations/addgoods">
              <el-menu-item index="2-1">添加商品</el-menu-item>
            </router-link>
            <router-link to="/uoperations/ugoodlist">
              <el-menu-item index="2-2">商品list</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="ulogouts">退出登录</span>
        </el-menu-item>

        <!-- 
        <el-menu-item index="2" v-show="flag">
          <i class="el-icon-menu"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>-->
      </el-menu>
    </el-col>
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.axios
      .post("/userinfo")
      .then(res => {
        // console.log(res);
        if (res.data.cx == "普通用户") {
          this.flag = false;
        } else if (res.data.cx == "卖家") {
          this.flag = true;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ulogouts() {
      this.axios
        .get("/uloginout")
        .then(res => {
          console.log(res);
          //退出登录
          this.$router.push('/')
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<style>
.sidenav {
  width: 180px;
  background-color: #545c64;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}
</style>

<style>
.el-submenu .el-menu-item {
  min-width: 180px;
}

.el-menu {
  border-right: 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>

