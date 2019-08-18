<template>
  <div class="reg">
    <top-nav></top-nav>
    <div class="myf4">
      <h4>管理员登陆</h4>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="aname">
          <el-input v-model="ruleForm.aname"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="apsw">
          <el-input v-model="ruleForm.apsw" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        aname: "",
        apsw: ""
      },
      rules: {
        aname: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        apsw: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          //管理员登陆
          this.axios
            .post("/adminlogin", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg1 == "用户名不存在") {
                this.$message({
                  showClose: true,
                  message: "用户名不存在",
                  type: "error"
                });
                return;
              }
              if (res.data.msg1 == "密码错误") {
                this.$message({
                  showClose: true,
                  message: "密码错误",
                  type: "error"
                });
                return;
              }
              if (res.data.msg1 == "ok") {
                this.$message({
                  message: "恭喜你，登录成功",
                  type: "success"
                });
                  //跳转到个人中心页面
                this.$router.push({ path: "/adminhome"});
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>



<style scoped>
.myf4 {
  width: 30%;
  margin: 170px auto;
}
</style>
