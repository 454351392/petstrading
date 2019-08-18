<template>
    <div class="ainfo mains">
        <ul>
        <li><span class="s">用户名：</span><span>{{admininfo.aname}}</span></li>
        <li><span class="s">性别：</span><span>{{admininfo.asex}}</span></li>
         <li><span class="s">权限：</span><span>{{admininfo.acx}}</span></li>
        <li><span class="s">电话：</span><span>{{admininfo.aphone}}</span></li>
        <li><span class="s">管理名言：</span><span>{{admininfo.amytitle}}</span></li>
    </ul>
    </div>
</template>

<script>
export default {
data() {
    return {
     admininfo:{}
    }
},
created() {
 this.axios
            .post("/admininfo", this.ruleForm)
            .then(res => {
              console.log(res.data[0]);
              this.admininfo=res.data[0];
            })
            .catch(function(error) {
              console.log(error);
            });
},
    
}
</script>


<style scoped>
.ainfo .s{
   font-size:24px;
}

.ainfo span{
  font-size: 17px;
}


.ainfo ul{
  width: 400px;
  margin-top: 200px;
margin-left: 500px;
  list-style: none;
}

.ainfo li{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
