<template>
  <div class="uupkey mains">
    <div class="myf1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="psw1">
          <el-input v-model="ruleForm.psw1" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="psw2">
          <el-input v-model="ruleForm.psw2" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (this.ruleForm.psw2 !== "") {
        this.$refs.ruleForm.validateField("psw2");
      }
      callback();
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.psw1) {
        callback(new Error("确认密码与密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      flag: false,
      ruleForm: {
        psw1: "",
        psw2: ""
      },
      rules: {
        psw1: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16个字符", trigger: "blur" },
          { validator: validatePass, trigger: "change" }
        ],
        psw2: [
          { required: true, message: "请输再次入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16个字符", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.axios
      .post("/userinfo", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res.data);
        //设置本来拥有的
        this.ruleForm.psw1 = res.data.psw;
        this.ruleForm.psw2 = res.data.psw;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/updatakey", this.ruleForm)
            .then(res => {
            //   console.log(res);
              if (res.data.msg4 == "修改成功") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                //  this.$router.push({ path: "/uoperations/uinfo" });
              } else {
                this.$message({
                  message: "修改失败",
                  type: "error"
                });
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
.myf1 {
  width: 40%;
  margin: 70px auto;
 
}



</style>
