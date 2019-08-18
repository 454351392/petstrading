<template>
  <div class="a1">
    <el-input class="b1" v-model="keyw1" placeholder="请输入关键字"></el-input>
    <el-button type="primary" @click="usersearch">查询</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyw1: ""
    };
  },
  methods: {
    usersearch() {
      this.axios
        .get("/goodssearch", {
          params: {
            keyw1: this.keyw1
          }
        })
        .then(res => {
          // console.log(res);
          // this.employee = res.data;
          //拿到数据之后去触发自定义事件，不允许大驼峰式写法
          this.$emit("myevent", res.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.axios
      .get("/goodssearch")
      .then(res => {
        // console.log(response);
        // this.employee = response.data;
        //拿到数据之后去触发自定义事件，不允许大驼峰式写法
        console.log(res.data);
        this.$emit("myevent", res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

      

</script>



<style scoped>
.a1 {
  width: 310px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.b1 {
  width: 200px;
}
</style>

