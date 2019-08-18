<template>
    <div class="ainfo mains">
        <ul>
        <li><span class="s">用户名：</span><span>{{userinfo.username}}</span></li>
        <li><span class="s">性别：</span><span>{{userinfo.sex}}</span></li>
        <li><span class="s">权限：</span><span>{{userinfo.cx}}</span></li>
        <li><span class="s">电话：</span><span>{{userinfo.tel}}</span></li>
        <li><span class="s">邮箱：</span><span>{{userinfo.email}}</span></li>
        <li><span class="s">生日：</span><span>{{userinfo.birth}}</span></li>
        <li><span class="s">用户名言：</span><span>{{userinfo.title}}</span></li>

    </ul>
    </div>
</template>

<script>
export default {
data() {
    return {
     userinfo:{}
    }
},
created() {
 this.axios
            .post("/userinfo")
            .then(res => {
              console.log(res.data);
              res.data.birth= res.data.birth.substring(0,10)
              this.userinfo=res.data;
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
  /* background-color: pink; */
margin-left: 500px;
  list-style: none;
}

.ainfo li{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}


</style>
