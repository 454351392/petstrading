<template>
  <div class="addclass mains">
    <div class="myf1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="品种" prop="class1">
          <el-input v-model="ruleForm.class1"></el-input>
        </el-form-item>

        <el-form-item label="图片地址" prop="pic">
          <el-input v-model="ruleForm.pic"></el-input>
        </el-form-item>

        
        <el-form-item class="myaa" label="价格" prop="price1,price2">
          <el-input class="price" v-model="ruleForm.price1"></el-input><span>——</span> 
           <el-input class="price" v-model="ruleForm.price2"></el-input><span>元</span> 
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
export default {
  data() {
    return {
      flag: true,
      ruleForm: {
        class1: "",
        pic: "",
        price1: "",
         price2: "",
        // id:'',    //页面中没有显示，只是为了方便有值之后传给服务器----使数据库goods表的userid为user表的id
      },
      rules: {
        class1: [
          { required: true, message: "请选择猫咪品种", trigger: "blur" }
        ],
        pic: [
          { required: true, message: "请填写图片地址", trigger: "blur" }
        ],
        price1: [
          { required: true, message: "请填写猫咪价格区间", trigger: "blur" }
        ],
         price2: [
          { required: true, message: "请填写猫咪价格区间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/addctaclass", this.ruleForm)
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
    }
  }
};
</script>


<style scoped>
.myf1 {
  width: 700px;
  margin-top: 200px;
}


.price{
    width:30%;
}





</style>
