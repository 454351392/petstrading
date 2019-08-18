<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="lbt">
      <el-carousel :interval="3000" type="card" height="360px" width="1000px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <img class="imgssize" v-bind:src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div> 
    <div class="w">
      <!-- 热门猫咪 -->
      <div class="title">
        <div class="name">热门猫咪</div>
        <div class="engname">-------- FAVORITE PET CAT -------</div>
      </div>
      <div class="hotcat">
    

        <!-- <hotpro-small v-for="i in datasmall" :class1="i.class1" :pic="i.pic" :price1="i.price1"  :price2="i.price2"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            :key="i.id"></hotpro-small> -->
        <router-link to="/variety">
          <hotpro-small></hotpro-small>
        </router-link>

        <div class="more">
          <router-link class="a" to="/variety">查看更多 &nbsp;>></router-link>
        </div>
      </div>

      <!-- 优品推荐 -->
      <div class="goodvariety">
        <div class="title">
          <div class="name">优品推荐</div>
          <div class="engname">-------- OPTIMAL PRODUCT -------</div>
        </div>
        <div class="hotpic">
           <!-- v-if="datasmall.length<5" -->
          <div class="goodpic1" >
            <!-- v-for 和v-if 同时使用 用index判断只传5条给子组件 -->
            <div v-for="n in datasmall" :key="n.id">
              <router-link :to="{path:'/firstpage',query:{id:n.id}}" class="myrouter">
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
      </div>

      <!-- 各猫种 -->
      <div class="bomao">
        <div class="f1titles">
          <div class="title_left">
            <div class="left">1F</div>
            <div class="fang"></div>
            <div class="catvariety">布偶猫 &nbsp;&nbsp; 》</div>
          </div>
        </div>
        <div class="listforbox">
        
        <div v-for="n in bodata" :key="n.id" >
              <router-link :to='{path:"/firstpage",query:{id:n.id}}' class="myrouter">
            <good-advise2
              :pic="n.pic"
              :info="n.info"
              :price="n.price"
              :shop="n.shop"
              :title1="n.title1"
              :nums="n.nums"
            ></good-advise2>
            </router-link>
          </div>
        
        
        </div>
      </div>
       <div class="bomao">
        <div class="f1titles">
          <div class="title_left">
            <div class="left">2F</div>
            <div class="fang"></div>
            <div class="catvariety">加菲猫 &nbsp;&nbsp; 》</div>
          </div>
        </div>
        <div class="listforbox">
        
        <div v-for="n in jfdata" :key="n.id" >
              <router-link :to='{path:"/firstpage",query:{id:n.id}}' class="myrouter">
            <good-advise2
              :pic="n.pic"
              :info="n.info"
              :price="n.price"
              :shop="n.shop"
              :title1="n.title1"
               :nums="n.nums"
            ></good-advise2>
            </router-link>
          </div>
        </div>

      </div>
       <div class="bomao">
        <div class="f1titles">
          <div class="title_left">
            <div class="left">3F</div>
            <div class="fang"></div>
            <div class="catvariety">英国短毛猫 &nbsp;&nbsp; 》</div>
          </div>
        </div>
        <div class="listforbox">
          <div v-for="n in jfdata" :key="n.id" >
            <router-link :to="{path:'/firstpage',query:{id:n.id}}" class="myrouter">
            <good-advise2
              :pic="n.pic"
              :info="n.info"
              :price="n.price"
              :shop="n.shop"
              :title1="n.title1"
               :nums="n.nums"
            ></good-advise2>
            </router-link>
          </div>
        </div>
        </div>
      </div>
    <div class="myfo">
    <my-footer></my-footer>
    </div>
  </div>
</template>

<script>

import Goodadvise2 from '@/components/style_tag/good_advise2.vue'

export default {
  data: function() {
    return {
      imgs: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=424444204,1909484845&fm=26&gp=0.jpgz",
        "http://desktop.kole8.com/desktop/desk_file-11/15/39/2014/7/201472910012613_view.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2662132161,990049312&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3416351716,1338785097&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3144584891,1669491080&fm=26&gp=0.jpg",
        "http://dik.img.kttpdq.com/pic/45/31186/2bfea1f2ce2be47c.jpg"
      ],
      datasmall: [],
      bodata:[],
      jfdata:[],
      ygdmdata:[]

    };
  },

  components:{
   "good-advise2":Goodadvise2
  },

  created: function() {
    this.axios
      .get("/goodszhanshi")
      .then(response => {
        // console.log(response);
        // this.datasmall=response.data;
        // console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].class1 == "布偶猫" && this.bodata.length < 8) {
            this.bodata.push(response.data[i]);
          } else if (
            response.data[i].class1 == "加菲猫" &&
            this.jfdata.length < 8
          ) {
            this.jfdata.push(response.data[i]);
          } else if (
            response.data[i].class1 == "英短" &&
            this.ygdmdata.length < 8
          ) {
            this.ygdmdata.push(response.data[i]);
          } else if (this.datasmall.length < 5) {
            this.datasmall.push(response.data[i]);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.myrouter {
   text-decoration: none;
   color: #333;
}
.a {
  text-decoration: none;
  color: black;
  font-size: 16px;
}
.router-link-active {
  text-decoration: none;
}

.imgssize {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lbt {
  width: 100%;
  margin-top: 130px;
  height: 400px;
}
.w {
  width: 1200px;
  height: auto;
  margin: 20px auto;
}
.hotcat {
  width: 100%;
  height: 600px;
  position: relative;
}

.title {
  width: 100%;
  height: 80px;
  text-align: center;
}

.name {
  width: 100%;
  font-size: 24px;
  height: 50px;
  text-align: center;
}

.engname {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #b9b9b9;
  margin-bottom: 20px;
}

.more {
  width: 200px;
  height: 40px;
  line-height: 40px;
   border: 1px solid #aaa;
   border-radius: 6px;
  position: absolute;
  bottom: -60px;
left: 40%;
}

/* 优品推荐部分样式 */
.goodvariety {
  width: 100%;
  height: 550px;
  margin-top: 120px;
}

.goodpic1 {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

/* 分类猫 */

.bomao {
  width: 100%;
  height: 700px;
  margin:0 0 100px 0;
}
.listforbox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: pink; */
}
.f1titles {
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #64c9b9;
  margin-bottom: 30px;
}
.title_left {
  width: 300px;
  height: 100%;
  background-color: #189;
  position: relative;
}
.title_left .left {
  float: left;
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;

  overflow: hidden;
  background-color: #f8fae5;
}
.title_left .fang {
  width: 36px;
  height: 36px;
  background-color: #f8fae5;
  position: absolute;
  left: 61px;
  top: 7px;
  transform: rotate(45deg);
}
.catvariety {
  width: 186px;
  height: 100%;
  font-size: 24px;
  float: right;
  line-height: 50px;
  color: white;
}
</style>

<style>
/* 底部 */
.myfo {
  width: 100%;
  height: 220px;
  margin-top: 150px;
}
</style>

