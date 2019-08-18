<template>
  <div>
    <top-nav></top-nav>
    <div class="toppic">
      <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/pinzhong.jpg" alt />
    </div>
    <div class="w">
      <div class="knowledbox">
        <div class="titknow">
          <div class="choosecat">猫咪品种</div>
          <div class="engname">—— THE CAT INFORMATION ——</div>
        </div>
        <div class="contents">
          <div class="left">
            <cat-type></cat-type>
          </div>
          <div class="right">
            <div class="titletj">优质宠物猫商家推荐</div>
            <div v-for="n in datasmall" :key="n.id"  >
              <router-link :to='{path:"/firstpage",query:{id:n.id}}' class="myrouter">
            <good-advise
              :pic="n.pic"
              :info="n.info"
              :price="n.price"
              :shop="n.shop"
              :title1="n.title1"
            ></good-advise>
            </router-link>
          </div>
          
          
          </div>
        </div>
        <div class="title3">
          <div class="yptj">友情链接</div>
          <div>—— FRIENDLY LINK ——</div>
        </div>
      </div>
    </div>
      <div class="myfo">
    <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import Cattype from "@/components/style_tag/cat_type.vue";

export default {

  "cat-type": Cattype,
  data:function(){
    return {
      datasmall: []
    }
  },
  created: function() {
    this.axios
      .get("/goodszhanshi")
      .then(response => {
        // this.datasmall = response.data;
        for(var i = 0;i<response.data.length;i++){
            if(this.datasmall.length<5){
            this.datasmall.push(response.data[i])
            }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.myrouter {
   text-decoration: none;
   color: #333;
}

.w {
  width: 1340px;
  margin: 10px auto;
}
.toppic {
  width: 100%;
  height: 322px;
  margin-bottom: 40px;
}
.toppic img {
  width: 100%;
  height: 100%;
}
.knowledbox {
  width: 100%;
}
.titknow {
  width: 100%;
  height: 100px;
}
.choosecat {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  margin: 16px 0;
}
.engname {
  margin-bottom: 10px;
}
.contents {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
}

.contents .left {
  width: 70%;
  height: 100%;
  text-align: left;
}
.contents .right {
  width: 20%;
  height: auto;
  margin: 0 auto;
}

.titletj {
  width: 85%;
  height: 40px;
  border: 1px solid #ff6542;
  line-height: 40px;
 color: #333;
 text-align: center;
 font-size: 18px;
 font-weight: 800;
}
.title3 {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  line-height: 40px;
  text-align: center;
}
.title3 .yptj {
  font-size: 24px;
  margin: 5px 0;
}
</style>
