<template>
  <div class="usermanagement mains">
       <br>
    <!-- <goods-search @myevent="searchUsers"></goods-search> -->
    <div class="mytable">
      <el-table :data="tableData" border style="width: 100%" height="700">
        <el-table-column type="index" width="100" label="序号"></el-table-column>
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="class1" label="品种" width="190"></el-table-column>
        <el-table-column prop="pic" label="图片" width="240">
        <template slot-scope="scope">
          <img :src="scope.row.pic" />
        </template>
        </el-table-column>
        <el-table-column prop="sexs" label="性别" width="140"></el-table-column>
        <el-table-column prop="price" label="价格" width="140"></el-table-column>
        <el-table-column prop="num" label="数量" width="140"></el-table-column>
        <el-table-column prop="shop" label="店铺" width="150"></el-table-column>
        <el-table-column prop="tel" label="联系电话" width="170"></el-table-column>
        <el-table-column label="操作" fixed="right" width="300">
          <template slot-scope="scope">
            <el-popover placement="left" width="500" trigger="click">
              <h4 class="goodinfo">详情</h4>
              <div class="catinfo">
                <div>
                  <span class="ass">id:</span>
                  <span>{{goodinfo.id}}</span>
                </div>
                <div>
                  <span class="ass">品种:</span>
                  <span>{{goodinfo.class1}}</span>
                </div>
                <div>
                <span  class="ass mypic1">图片:</span>
                  <img class="mypic2" :src="goodinfo.pic" alt="">
                </div>
                <div>
                  <span class="ass">性别:</span>
                  <span>{{goodinfo.sexs}}</span>
                </div>
                <div>
                  <span class="ass">年龄:</span>
                  <span>{{goodinfo.age}}个月</span>
                </div>
                <div>
                  <span class="ass">价格:</span>
                  <span>{{goodinfo.price}}元</span>
                </div>
                <div>
                  <span class="ass">数量:</span>
                  <span>{{goodinfo.num}}只</span>
                </div>
                <div>
                  <span class="ass">售卖人:</span>
                  <span>{{goodinfo.username}}</span>
                </div>
                <div>
                  <span class="ass">店铺:</span>
                  <span>{{goodinfo.shop}}</span>
                </div>
                <div>
                  <span class="ass">简介:</span>
                  <span>{{goodinfo.title1}}</span>
                </div>
                <!-- <div>
                  <span class="ass">详情:</span>
                  <span>{{goodinfo.info}}</span>
                </div> -->
              </div>
              <el-button
                size="mini"
                slot="reference"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)"
              >详情</el-button>
            </el-popover>
            <el-button
              class="myxiugai"
              size="mini"
              @click="handleEdit2(scope.$index, scope.row),dialogFormVisible = true"
            >编辑</el-button>
            <el-dialog title="商品修改" :visible.sync="dialogFormVisible">
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="120px"
                class="demo-ruleForm"
              >
                <el-form-item label="猫咪品种" prop="class1">
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
                </el-form-item>

                <el-form-item label="图片地址" prop="pic">
                  <el-input v-model="ruleForm.pic"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="sexs">
                  <el-radio-group v-model="ruleForm.sexs">
                    <el-radio label="公"></el-radio>
                    <el-radio label="母"></el-radio>
                    <el-radio label="公母均有"></el-radio>
                  </el-radio-group>
                </el-form-item>

                <el-form-item label="年龄" prop="age">
                  <el-input v-model="ruleForm.age"></el-input>
                </el-form-item>

                <el-form-item label="价格" prop="price">
                  <el-input v-model="ruleForm.price"></el-input>
                </el-form-item>

                <el-form-item label="数量" prop="num">
                  <el-input v-model="ruleForm.num"></el-input>
                </el-form-item>

                <el-form-item label="联系电话" prop="tel">
                  <el-input v-model="ruleForm.tel"></el-input>
                </el-form-item>

                <el-form-item label="猫咪简介" prop="title1">
                  <el-input v-model="ruleForm.title1"></el-input>
                </el-form-item>

                <el-form-item label="详情" prop="info">
                  <el-input type="textarea" v-model="ruleForm.info"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button
                    type="primary"
                    @click="submitForm('ruleForm'),dialogFormVisible = false"
                  >确认修改</el-button>
                </el-form-item>
              </el-form>

              <!-- <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false,tijiao">确 定</el-button>
              </div>-->
            </el-dialog>
            <el-button
              size="mini"
              class="mydelet"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

  <script>
// import goodssearch from "@/components/admin/goodssearch.vue";
export default {
  data() {
    return {
      flag: true,
      tableData: [],
      goodinfo: {},
      dialogFormVisible: false,
      ruleForm: {
        class1: "",
        pic: "",
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
  // components: {
  //   "goods-search": goodssearch
  // },
  created() {
    this.axios
      .get("/usergoodsselect", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        // console.log(response);
        // this.employee = response.data;
        //拿到数据之后去触发自定义事件，不允许大驼峰式写法
        console.log(res.data);
        this.tableData = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    // searchUsers(data) {    //父传子
    //   this.tableData = data;
    // },
    handleEdit(index, row) {
      this.goodinfo = row;
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let _this = this;
          this.axios
            .post("/deletegoogd", row)
            .then(res => {
              // console.log(response);
              // this.employee = response.data;
              //拿到数据之后去触发自定义事件，不允许大驼峰式写法
              console.log(res.data);
              _this.tableData.splice(index, 1);

            })
            .catch(function(error) {
              console.log(error);
            });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleEdit2(index, row) {
      console.log(index, row);
      this.ruleForm = row;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/usergoodsupdata", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg5 == "修改成功") {
                this.$message({
                  message: "修改成功",
                  type: "success"
                });
                // this.$router.push({ path: "/userhome?id=" + res.data.myid });
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
          console.log("全部通过");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>

.myxiugai {
  margin-left: 17px;
  margin-right: 17px;
}

.goodinfo {
  text-align: center;
  font-size: 24px;
}

.catinfo {
  margin: 0px auto;
}

.catinfo div {
  margin: 10px auto;
  border-bottom: 1px solid rgb(209, 206, 206);
}

.ass {
  font-weight: bold;
  font-size: 22px;
}

span {
  font-size: 17px;
}
.mypic1{
  display: block;
}

.mypic2{
  width: 200px;
  height: 200px;
}


.mytable{
    width:100%;
  
    
}
.el-table .cell img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.el-table td, .el-table th {
   
}



</style>

