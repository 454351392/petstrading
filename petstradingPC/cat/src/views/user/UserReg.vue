<template>
  <div class="reg">
    <top-nav></top-nav>
    <div class="myf1">
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
        <el-form-item label="确认密码" prop="psw2">
          <el-input v-model="ruleForm.psw2" show-password></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="上传头像" prop="pic">
          <el-col :span="8">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:47/uploads/"
              :show-file-list="false"
              name="images"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-col>
        </el-form-item>

        <el-form-item label="联系电话" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="生日">
          <el-col :span="11">
            <el-form-item prop="birth">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.birth"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="权限选择" prop="cx">
          <el-radio-group v-model="ruleForm.cx">
            <el-radio label="普通用户"></el-radio>
            <el-radio label="卖家"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item v-show="flag" label="店铺名称" prop="shop">
          <el-input v-model="ruleForm.shop"></el-input>
        </el-form-item>

        <el-form-item label="我的标签" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatecx = (rule, value, callback) => {
      if (this.ruleForm.cx == "卖家") {
        this.flag = true;
      } else {
        this.flag = false;
      }
      callback();
    };

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
        username: "",
        psw1: "",
        psw2: "",
        sex: "男",
        tel: "",
        email: "",
        birth: "",
        cx: "普通用户",
        shop: "",
        title: "",
         imageUrl: "",
        imagesrc: "",
      },
      rules: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        psw1: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16个字符", trigger: "blur" },
          { validator: validatePass, trigger: "change" }
        ],
        psw2: [
          { required: true, message: "请输再次入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16个字符", trigger: "blur" },
          { validator: validatePass2, trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请填写联系电话", trigger: "blur" }
          //   { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        // date1: [
        //   {
        //     type: "date",
        //     required: true,
        //     message: "请选择日期",
        //     trigger: "change"
        //   }
        // ],
        // sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        cx: [
          { required: true, message: "请选择权限", trigger: "change" },
          { validator: validatecx, trigger: "change" }
        ]
        //  shop: [
        //   { required: true, message: "请填写店铺名称", trigger: "blur" }
        // ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/regs", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg == "username_is_already") {
                this.$alert("该用户名已存在，请重新注册一个哦", "消息", {
                  confirmButtonText: "确定",
                  callback: action => {
                    // this.$message({
                    //   type: "info",
                    //   message: `action: ${action}`
                    // });
                  }
                });
              } else if (res.data.msg == "reg_success") {
                this.$message({
                  message: "恭喜你，注册成功",
                  type: "success"
                });
                //跳转到登陆页面
                this.$router.push({ path: "/login" });
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
    },
     handleAvatarSuccess(res, file) {
      console.log(res);
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
      this.ruleForm.imgsrc = res.imgsrc;
    },
    beforeAvatarUpload(file) {
      //   const isJPG = file.type === "image/jpeg";
      //   const isLt2M = file.size / 1024 / 1024 < 2;

      //   if (!isJPG) {
      //     this.$message.error("上传头像图片只能是 JPG 格式!");
      //   }
      //   if (!isLt2M) {
      //     this.$message.error("上传头像图片大小不能超过 2MB!");
      //   }
      //   return isJPG && isLt2M;
      return true;
    }
  }
};
</script>


<style scoped>
.myf1 {
  width: 30%;
  margin: 130px auto;
}
</style>
