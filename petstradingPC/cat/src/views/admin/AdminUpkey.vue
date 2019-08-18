<template>
  <div class="aupkey mains">
    <div class="myf">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="密码" prop="psw1">
          <el-col :span="8">
            <el-input v-model="ruleForm.psw1" show-password></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="确认密码" prop="psw2">
          <el-col :span="8">
            <el-input v-model="ruleForm.psw2" show-password></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-col>
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
      .post("/admininfo")
      .then(res => {
        console.log(res);
        //设置本来拥有的
        this.ruleForm.psw1 = res.data[0].apsw;
        this.ruleForm.psw2 = res.data[0].apsw;
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
            .post("/adminupdatakey", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg1 == "upkey-ok") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                //    this.$router.push({ path: "/userhome?id="+res.data.myid });
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
</style>
