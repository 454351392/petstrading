<template>
  <div class="usermanagement mains">
     <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/adminhome' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>用户管理</el-breadcrumb-item>
</el-breadcrumb>
<br>
    <div class="userm">
    <!-- <h2>用户管理</h2> -->
    <user-search @myevent="searchUsers"></user-search>
    <div class="mytable">
      <el-table :data="tableData" border style="width: 100%" height="600">
        <el-table-column type="index" width="100" label="序号"></el-table-column>
        <el-table-column prop="id" label="id" width="120"></el-table-column>
         <el-table-column prop="pic" label="头像" width="150">
        <template slot-scope="scope">
          <img :src="scope.row.pic" />
        </template>
        </el-table-column>
        <el-table-column prop="username" label="姓名" width="120"></el-table-column>
        <el-table-column prop="sex" label="性别" width="100"></el-table-column>
        <el-table-column prop="tel" label="电话" width="200"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="birth" label="生日" width="150"></el-table-column>
        <el-table-column prop="cx" label="权限" width="120"></el-table-column>
        <el-table-column prop="shop" label="店铺名" width="150"></el-table-column>
        <el-table-column prop="state" label="状态" width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" width="170">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">状态编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  </div>
</template>

  <script>
import usersearch from './usersearch.vue'
export default {
  data() {
    return {
      tableData: []
    };
  },
  components: {
    "user-search": usersearch
  },
  created() {},
  methods: {
    searchUsers(data) {
      this.tableData = data;
    },
    handleEdit(index, row) {
      this.$alert("是否改变该用户目前状态", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `用户状态修改成功`
          });
          if (action == "confirm") {
              let _this = this;
            this.axios
              .post("/updatastate", row)
              .then(res => {
                //res.data---后端返回数据库修改后的用户状态
                console.log(res.data);
                // window.location.reload();
                for (let ind = 0; ind < this.tableData.length; ind++) {
                    if(row.id == this.tableData[ind].id){
                        _this.tableData[ind].state = res.data.state ? '通过':'禁止';
                        break ;
                    }
                    
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          }

        }
      });

    //   console.log(index, row);
    }
  }
};
</script>


<style scoped>
.mytable{
    width: 100%;
}
.userm {
    width: 100%;
margin: auto;
}


.el-table .cell img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
 position: relative;

}




</style>
