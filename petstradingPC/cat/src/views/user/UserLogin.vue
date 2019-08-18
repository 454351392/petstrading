<template>
  <div class="reg">
    <top-nav></top-nav>
    <div class="myf2">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw1">
          <el-input v-model="ruleForm.psw1" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      没有账号？
     <a href="/reg" class="zhuce">注册一个呗</a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        psw1: ""
      },
      rules: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" }
        ],
        psw1: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/logins", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg1 == "该用户不存在") {
                this.$alert("该用户不存在", "提示", {
                  confirmButtonText: "确定",
                  callback: action => {
                    // this.$message({
                    //   type: "info",
                    //   message: `action: ${action}`
                    // });
                  }
                });
              } else if (res.data.msg1 == "密码错误") {
                this.$message({
                  showClose: true,
                  message: "密码错误",
                  type: "error"
                });
              } else if (res.data.msg1 == "登陆成功") {
                this.$message({
                  message: "恭喜您，登陆成功",
                  type: "success"
                });
                //跳转到个人中心页面
                this.$router.push({ path: "/"});
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
.myf2 {
  width: 30%;
  margin: 200px auto;
}

.zhuce{
  color: red;
}
</style>
