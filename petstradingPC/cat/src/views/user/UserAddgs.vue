<template>
  <div class="addgoods mains">
    <div class="myf1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item v-show="flag" label="售卖人" prop="username">
          <el-col :span="7">
            <el-input v-model="ruleForm.username" :disabled="true"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="猫咪品种" prop="class1">
          <el-col :span="7">
            <el-select v-model="ruleForm.class1" placeholder="请选择猫咪品种">
              <el-option label="布偶猫" value="布偶猫"></el-option>
              <el-option label="折耳猫" value="折耳猫"></el-option>
              <el-option label="狸花猫" value="狸花猫"></el-option>
              <el-option label="蓝猫" value="蓝猫"></el-option>
              <el-option label="英短" value="英短"></el-option>
              <el-option label="加菲猫" value="加菲猫"></el-option>
              <el-option label="暹罗猫" value="暹罗猫"></el-option>
              <el-option label="无毛猫" value="无毛猫"></el-option>
              <el-option label="本地猫" value="本地猫"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="图片地址" prop="pic">
          <el-col :span="7">
            <el-input v-model="ruleForm.pic"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="性别" prop="sexs">
          <el-col :span="7">
            <el-radio-group v-model="ruleForm.sexs">
              <el-radio label="公"></el-radio>
              <el-radio label="母"></el-radio>
              <el-radio label="公母均有"></el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-col :span="7">
            <el-input v-model="ruleForm.age"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="价格" prop="price">
          <el-col :span="7">
            <el-input v-model="ruleForm.price"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="数量" prop="num">
          <el-col :span="7">
            <el-input v-model="ruleForm.num"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="猫咪简介" prop="title1">
          <el-col :span="7">
            <el-input v-model="ruleForm.title1"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="联系电话" prop="tel">
          <el-col :span="7">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item v-show="flag" label="店铺名称" prop="shop">
          <el-col :span="7">
            <el-input v-model="ruleForm.shop" :disabled="true"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="详情" prop="info">
          <el-col :span="14">
            <div id="wangeditor">
              <div ref="editorElem" style="text-align:left"></div>
            </div>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
        class1: "",
        pic: "",
        username: "",
        sexs: "公",
        age: "",
        price: "",
        num: "",
        title1: "",
        info: "",
        tel: "",
        shop: "",
        id: "" //页面中没有显示，只是为了方便有值之后传给服务器----使数据库goods表的userid为user表的id
      },
      rules: {
        class1: [
          { required: true, message: "请选择猫咪品种", trigger: "change" }
        ],
        pic: [{ required: true, message: "请填写图片地址", trigger: "blur" }],
        username: [
          { required: true, message: "请填写用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请填写联系电话", trigger: "blur" }
          //   { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "请填写猫咪年龄", trigger: "blur" }],
        price: [{ required: true, message: "请填写猫咪价格", trigger: "blur" }],
        num: [{ required: true, message: "请填写猫咪数量", trigger: "blur" }],
        title1: [
          { required: true, message: "请填写猫咪简介", trigger: "blur" }
        ],
        info: [{ required: true, message: "请填写猫咪详情", trigger: "blur" }],
        sexs: [{ required: true, message: "请选择猫咪性别", trigger: "change" }]
      }
    };
  },  
  created() {
    this.axios
      .post("/userinfo")
      .then(res => {
        console.log(res);
        this.ruleForm.username = res.data.username;
        this.ruleForm.tel = res.data.tel;
        this.ruleForm.shop = res.data.shop;
        this.ruleForm.id = res.data.id; //传值给表单
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted() {
    var editor = new E(this.$refs.editorElem); //创建富文本实例
    editor.customConfig.onchange = html => {
      this.ruleForm.info = html; //把这个html通过catchData的方法传入父组件
    };
    editor.customConfig.uploadImgServer = "http://localhost:47/uploadimgs/";
    editor.customConfig.uploadFileName = "myimgs";
    editor.create();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/addgoods", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg5 == "添加成功") {
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
      //重置时禁止填写的选项也不会改变
      this.axios
        .get("/userinfo", {
          params: {
            userid: this.$route.query.id
          }
        })
        .then(res => {
          console.log(res);
          this.ruleForm.username = res.data.username;
          this.ruleForm.tel = res.data.tel;
          this.ruleForm.shop = res.data.shop;
          this.ruleForm.id = res.data.id;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<style>
.myf1 {
  margin-left: 400px;
}

.fuwen {
  width: 400px;
}
</style>
