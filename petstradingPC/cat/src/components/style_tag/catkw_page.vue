<template>
  <div>
    <top-nav></top-nav>
    <div class="pic">
      <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/zhishi.jpg" alt />
    </div>
    <div class="w">
      <div class="knowledbox">
        <div class="titknow">
          <div class="choosecat">选猫知识</div>
          <!-- <div class="engname">—— THE CAT knowledge ——</div> -->
        </div>


        <div class="contents">
          <div class="left">
            <h2>{{msg.title}}</h2>
            <div class="myt"><span>发布时间：{{msg.addtimes}}</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>浏览次数：{{msg.number}}</span></div>
            <div class="catkwinfo" v-html="msg.info"></div>
              
          </div>


          <div class="right">
            <div v-for="n in msgright" :key="n.id">
               <router-link :to='{path:"/firstpage",query:{id:n.id}}' class="myrouter">
              <good-advise :pic="n.pic" :info="n.info" :price="n.price" :shop="n.shop" :title1="n.title1"></good-advise>
              </router-link>
            </div>

          </div>
        </div>


          <!-- <div class="title3">
        <div class="yptj">友情链接</div>
        <div>—— FRIENDLY LINK ——</div>
      </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import catinfor from '@/components/style_tag/cat_infor.vue';
import goodadvise from '@/components/style_tag/good_advise.vue';
export default {
  data: function (){
    return {
      msg:{},
      msgright:[]
    }
  },
  components:{
    "cat-infor":catinfor,
    "good-advise":goodadvise
  },
  created:function (){
    this.axios.get('/catkwinfo',{
       params:{id:this.$route.query.id}
    })
    .then((res)=>{
      console.log(res.data[0]);
      res.data[0].addtimes=res.data[0].addtimes.slice(0, 10);
      this.msg=res.data[0];
    })
    .catch(err=>{
      console.log(err)
    })

    this.axios.get("goodszhanshi",{
      params:{kw:"推荐"}
    })
    .then((res)=>{
      console.log(res.data);
      this.msgright = res.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
};
</script>

<style scoped>
.myrouter {
   text-decoration: none;
   color: #333;
}
.w {
  width: 1220px;
  margin: 0 auto;
}

.choosecat {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  margin: 10px;
}
.contents {
  width: 100%;
  height: 400px;
  /* background-color: #ccc; */
  display: flex;
  justify-content: space-between;
}

.contents .left {
 width: 65%;
 min-height: 400px;
  /* background-color: pink; */
  margin-right: 200px;
}
.contents .right {
  width: 30%;
  height: 100%;
  /* background-color: green; */
}
.title3 {
  width: 100%;
  height: 100px;
  /* background-color: #ff0; */
  text-align: center;
}
.title3 .yptj {
  font-size: 24px;
  margin: 10px 0;
}

 .left .myt{
  width: 100%;
  height: 40px;
  background-color: rgb(226, 222, 222);
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 30px;
  line-height: 40px;

  
}

.left .catkwinfo{
  width: 100%;
  min-height: 100px;
  /* background-color: burlywood; */
  text-align: left;
}



</style>


