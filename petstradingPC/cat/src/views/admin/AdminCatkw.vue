<template>
  <div class="catkwlist mains">
    <div class="catkws"> 
      <el-table :data="tableData" height="700" border style="width: 100%">
        <el-table-column type="index" label="序号" width="120"></el-table-column>
        <el-table-column prop="title" label="标题" width="470"></el-table-column>
        <el-table-column prop="addname" label="发表人" width="380"></el-table-column>
        <el-table-column prop="addtimes" label="添加时间" width="300" :formatter="formatDate"></el-table-column>
        <el-table-column label="操作" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    //让表格中的时间显示成正常样式  在表格中绑定事件:formatter="formatDate"
    formatDate: (row, column, cellValue, index) => {
      return new Date(cellValue).toLocaleString();
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push('/operations/catkwedit?id='+row.id)
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .post("/deleteknowledge", row)
            .then(res => {
              // console.log(res.data);
              if ((res.data.msg = "delet-ok")) {
                this.tableData.splice(index, 1);
              }
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
    }
  },
  created() {
    this.axios
      .get("/catknowlelist")      //请求服务器获得列表
      .then(res => {
        // console.log(res.data);
        this.tableData = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style scoped>
.catkws{
  width: 100%;
}
</style>

