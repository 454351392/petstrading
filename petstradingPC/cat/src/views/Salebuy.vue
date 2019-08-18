<template>
  <div>
    <top-nav></top-nav>
    <div class="w">
        <div class="topadvise">
          <div class="yptj">优品推荐</div>
          <div>—— OPTIMAL PRODUCT ——</div>
        </div>

        <div class="buytop">
          <div v-for="(n,index) in msg" :key="n.id" v-if="index<5&&n.id<6">
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

        <div class="nicecat">
          <div class="title3">
            <div class="mainshow">
              <div v-for="n in msg" :key="n.id" v-if="!(n.id<5)" class="mainshow_son">
                <router-link :to='{path:"/firstpage",query:{id:n.id}}' class="myrouter">
                <good-advise2
                  :pic="n.pic"
                  :info="n.info"
                  :price="n.price"
                  :shop="n.shop"
                  :title1="n.title1"
                  :nums='n.nums'
                ></good-advise2>
                </router-link>
              </div>
            </div>
          </div>
        </div>
   
      <!--  -->
       
    </div>
    <div class="title4">
          <div class="yptj">友情链接</div>
          <div>—— FRIENDLY LINK ——</div>
        </div>
 
  </div>
</template>

<script>
import goodadvise from "@/components/style_tag/good_advise.vue";
import goodadvise2 from "@/components/style_tag/good_advise2.vue";
export default {
  data: function() {
    return {
      msg: {}
    };
  },
  components: {
    "good-advise": goodadvise,
    "good-advise2": goodadvise2
  },
  created: function() {
    this.axios
      .get("goodszhanshi")
      .then(res => {
        console.log(res.data);
        this.msg = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.w {
  width: 1220px;
  margin: 10px auto;
  margin-bottom: 200px;
}

.topadvise {
  width: 100%;
  height: 50px;
  font-size: 24px;
  margin-top: 140px;

}

.buytop {
  width: 100%;
  height: 360px;
  margin-top: 20px;
  /* background-color: blue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.nicecat {
  width: 100%;
  height: 1000px;
  /* background-color: #f6f; */
}
.title3 .mainshow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}
.title3 .mainshow .mainshow_son {
  margin-bottom: 30px;
}
.title4 {
  width: 100%;
  height: 100px;
  /* background-color: #ff0; */
  /* text-align: center; */
  background-color: #eeeeee;
  margin-top: 30px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
}
.myrouter {
  text-decoration: none;
  color: #333;
}
</style>
