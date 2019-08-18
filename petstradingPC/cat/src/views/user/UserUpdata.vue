<template>
  <div class="uinfo mains">
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
              action="http://192.168.7.171:47/uploads/"
              :show-file-list="false"
              name="images"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="ruleForm.pic" :src="ruleForm.pic" class="avatar" />
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
    var validatecx = (rule, value, callback) => {
      if (this.ruleForm.cx == "卖家") {
        this.flag = true;
      } else {
        this.flag = false;
      }
      callback();
    };

    return {
      flag: false,
      ruleForm: {
        username: "",
        sex: "男",
        tel: "",
        email: "",
        birth: "",
        cx: "普通用户",
        shop: "",
        title: "",
        imageUrl: "",
        imagesrc: ""
      },
      rules: {
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请填写联系电话", trigger: "blur" }
          //   { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        cx: [
          { required: true, message: "请选择权限", trigger: "change" },
          { validator: validatecx, trigger: "change" }
        ]
        // shop: [{ required: true, message: "请填写店铺名称", trigger: "blur" }]
      }
    };
  },
  created() {
    this.axios
      .post("/userinfo")
      .then(res => {
        console.log(res);
         this.ruleForm = res.data;
         this.ruleForm.pic = res.data.pic;
       
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
            .post("/updata", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg3 == "修改成功") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                // this.$router.push({ path: "/uoperations/uinfo" });
                window.location.reload();
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
    },
     handleAvatarSuccess(res, file) {
      console.log(res);
      this.ruleForm.pic = URL.createObjectURL(file.raw);
      this.ruleForm.pic = res.imgsrc;
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
  width:700px;
  margin: 70px auto;
}
</style>
