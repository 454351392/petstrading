<template>
  <div class="aupdata mains">
    <div class="myf">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="aname">
          <el-col :span="8">
            <el-input v-model="ruleForm.aname"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" prop="asex">
          <el-col :span="8">
            <el-radio-group v-model="ruleForm.asex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>
        <el-form-item label="联系电话" prop="aphone">
          <el-col :span="8">
            <el-input v-model="ruleForm.aphone"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="管理名言" prop="amytitle">
          <el-col :span="8">
            <el-input v-model="ruleForm.amytitle"></el-input>
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
    return {
      flag: false,
      ruleForm: {
        aname: "",
        asex: "男",
        aphone: "",
        amytitle: ""
      },
      rules: {
        aname: [
          { required: true, message: "请填写用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        aphone: [
          { required: true, message: "请填写联系电话", trigger: "blur" }
          //   { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        asex: [{ required: true, message: "请选择性别", trigger: "change" }]
      }
    };
  },
  created() {
    this.axios
      .post("/admininfo")
      .then(res => {
        this.ruleForm = res.data[0];
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
            .post("/adminupdata", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg1 == "updata-ok") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
              } else {
                this.$message({
                  message: "修改失败",
                  type: "error"
                });
                //跳转到登陆页面
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


<style>
.myf{
    margin-left: 400px;
    margin-top: 200px;
}
</style>

