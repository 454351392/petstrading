<template>
  <div class="addkw mains">
    <div class="myf1">
         <h1>添加选猫知识</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-col :span="8">
            <el-input v-model="ruleForm.title"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="图片地址" prop="pic">
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

        <el-form-item label="详情" prop="info">
          <el-col :span="20">
            <div id="wangeditor">
              <div ref="editorElem" style="text-align:left"></div>
            </div>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入富文本编辑器
import E from "wangeditor";

export default {
  data() {
    return {
      flag: true,
      ruleForm: {
        title: "",
        imageUrl: "",
        imagesrc: "",
        info: ""
        // id:'',    //页面中没有显示，只是为了方便有值之后传给服务器----使数据库goods表的userid为user表的id
      },
      rules: {
        title: [{ required: true, message: "请填写标题", trigger: "blur" }],
        info: [{ required: true, message: "请填文字详情", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/addcatkw", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.r == "ok") {
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
                // this.$router.push({ path: "/userhome?id=" + res.data.myid });
              } else {
                this.$message({
                  message: "添加失败",
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
  },
  mounted() {
    var editor = new E(this.$refs.editorElem); //创建富文本实例
    editor.customConfig.onchange = html => {
      this.ruleForm.info = html; //把这个html通过catchData的方法传入父组件
    };
    editor.customConfig.uploadImgServer = "http://localhost:47/uploadimgs/";
    editor.customConfig.uploadFileName = "myimgs";
    editor.create();
  }   
};
</script>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


<style scoped>
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>
