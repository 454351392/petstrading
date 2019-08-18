<template>
  <div>
    <top-nav></top-nav>
    <div class="toppic">
      <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about1.jpg" alt />
    </div>
    <div class="w">
      <div class="knowledbox">
        <div class="titknow">
          <div class="choosecat">ABOUT OUR BRIEF RNTIOTUCTING</div>
          <div class="engname">—— 关于我们 ——</div>
        </div>
        <div class="contents">
          <!-- 循环遍历，绑定key值，可防止报错 -->
          <div v-for="n in msg" :key="n.title">
          <aboutus-infor :title="n.title" :title1="n.title1" :title2="n.title2"></aboutus-infor>
          </div>
        </div>

        <ul class="brand">
          <li>
            <div class="circle">
              <img
                src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about_pinzhi1.jpg"
                alt
              />
            </div>
            <div>100%纯种</div>
          </li>
         <li>
            <div class="circle">
              <img
                src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about_pinzhi2.jpg"
                alt
              />
            </div>
            <div>99天质保</div>
          </li>
          <li>
            <div class="circle">
              <img
                src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about_pinzhi3.jpg"
                alt
              />
            </div>
            <div>万能顾问</div>
          </li>
          <li>
            <div class="circle">
              <img
                src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about_pinzhi4.jpg"
                alt
              />
            </div>
            <div>售后服务</div>
          </li>
        </ul>
        <div class="butfpic">
          <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about2.png" alt="">
        </div>
        <div class="joinus">
          <div class="cont1">诚信品质，期待为你服务，欢迎您成为我们的顾客</div>
          <div class="contme">诚邀致电</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutusinfor from '@/components/style_tag/aboutus_infor.vue';
export default {
  data:function (){
    return {
      msg:[]
    }
  },
  components: {
    "aboutus-infor":aboutusinfor
  },
  created:function (){
    this.axios.get("contatus")
    .then((res)=>{
      console.log(res.data);
      this.msg=res.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
};
</script>

<style scoped>
li {
  list-style: none;
  font-size: 18px;
  color: #333;
  text-align: center;
}
.w {
  width: 1100px;
  margin: 0 auto;
}
.toppic {
  width: 100%;
  height: 322px;
}
.toppic img {
  width: 100%;
  height: 100%;
}
.knowledbox {
  width: 100%;
  height: auto;
}
.titknow {
  width: 100%;
  height: 90px;
}
.choosecat {
  width: 100%;
  height: 60px;
  line-height: 40px;
  text-align: center;
  color: #a0a0a0;
  text-align: center;
  margin-top: 98px;
  font-size: 36px;
}
.engname {
  color: orangered;
  font-size: 20px;
}
.contents {
  width: 100%;
  height: 540px;
  margin-top: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}


.brand {
  width: 100%;
  height: 140px;
  margin: 80px 0;
  display: flex;
  justify-content: space-around;
}
.circle {
  width: 90px;
  height: 90px;
  border: 1px solid orangered;
  border-radius: 50%;
  margin-bottom: 10px;
}
.circle img {
  width: 50px;
  height: 51px;
  margin-top: 20px;
}
.butfpic {
  width: 100%;
  height: 360px;
}

.butfpic img {
  width: 100%;
  height: 100%;
}

.joinus {
  width: 100%;
  height: 300px;
  background-color: #ff6542;
  margin: 40px 0;
}
.cont1 {
  width: 100%;
  height: 100px;
  margin: 40px 0;
  font-size: 30px;
  text-align: center;
  line-height: 100px;
}
.contme {
  width: 200px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #ccc;
  margin: 0 auto;
  font-weight: 100;
  background-color: #fff;
  text-align: center;
  color: #000;
  border-radius: 5px;
}
</style>
