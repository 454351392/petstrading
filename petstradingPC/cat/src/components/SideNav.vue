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
            <router-link to="/operations/ainfo">
              <el-menu-item index="1-1">个人信息</el-menu-item>
            </router-link>
            <router-link to="/operations/aupdata">
              <el-menu-item index="1-2">修改信息</el-menu-item>
            </router-link>
            <router-link to="/operations/aupkey">
              <el-menu-item index="1-3">修改密码</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>

        <router-link to="/operations/auserm">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/operations/adoogsm">
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">商品管理</span>
          </el-menu-item>
        </router-link>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>选猫知识</span>
          </template>
          <el-menu-item-group>
            <router-link to="/operations/addkw">
              <el-menu-item index="4-1">添加选猫知识</el-menu-item>
            </router-link>
            <router-link to="/operations/catkwlist">
              <el-menu-item index="4-2">选猫知识list</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>


            <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>系统管理</span>
          </template>
          <el-menu-item-group>
             <router-link to="/operations/asddcatclass">
              <el-menu-item index="5-1">添加猫咪种类</el-menu-item>
            </router-link>
            <router-link to="/operations/acontactus">
              <el-menu-item index="5-2">联系/关于我们</el-menu-item>
            </router-link>
           
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title" @click="alogouts">退出登录</span>
        </el-menu-item>



      </el-menu>
    </el-col>
  </div>
</template>


<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    alogouts() {
      this.axios
        .get("/aloginout")
        .then(res => {
          console.log(res);
          //退出登录
          this.$router.push('/adminlogin')
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

