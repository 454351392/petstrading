<template>
  <div class="ss mains">
    <div class="myf1">
      <h1>关于/联系我们</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="联系我们标题" prop="title">
          <el-input  v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="联系我们话语" prop="title1">
          <el-input type="textarea" v-model="ruleForm.title1"  rows="5"></el-input>
        </el-form-item>

        <el-form-item label="联系我们地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>

        <el-form-item label="联系我们电话" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>

        <el-form-item label="联系我们邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="关于我们话语" prop="title2">
          <el-input type="textarea" v-model="ruleForm.title2"  rows="5"></el-input>
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
    return {
      ruleForm: {
        title: "",
        title1: "",
        address: "",
        tel: "",
        email: "",
        title2: ""
      },
      rules: {
        adminname: [
          { required: true, message: "请填写联系我们标题", trigger: "blur" }
        ],
        title1: [
          { required: true, message: "请填写联系我们话语", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请填写联系我们地址", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请填写联系我们电话", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请填写联系我们邮箱", trigger: "blur" }
        ],
        title2: [
          { required: true, message: "请填写关于我们话语", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.axios
      .get("/contactusall", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res);
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
            .post("/updatecontactus", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg3 == "修改成功") {
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


<style scoped>
.myf1 {
  max-width:700px;
  margin-top: 100px;

}

</style>
