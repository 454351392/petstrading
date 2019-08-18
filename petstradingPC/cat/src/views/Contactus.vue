<template>
  <div>
    <top-nav></top-nav>
    <div v-for="c in contdata" :key="c.id">
      <div class="toppic">
        <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/lianxi1.png" alt />
        <div class="img_title">{{c.title}}</div>
        <div class="img_words">{{c.title1}}</div>
      </div>
      <div class="w">
        <div class="addrs">
          <div class="titknow">
            <div class="choosecat">CONTACT US</div>
            <div class="engname">—— 联系我们 ——</div>
          </div>
          <div class="constyle">
            <ul class="rightcout">
              <li class="leftcontent">
                <p>{{c.title2}}</p>
              </li>
              <li class="shadowss">
                <img
                  src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/lianxi_location.png"
                  alt
                />
                <div>公司名称</div>
                <p>{{c.address}}</p>
              </li>
              <li class="shadowss">
                <img
                  src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/lianxi_tel.png"
                  alt
                />
                <div>联系电话</div>
                <span>{{c.tel}}</span>
              </li>
              <li class="shadowss">
                <img
                  src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/lianxi_email.png"
                  alt
                />
                <div>电子邮箱地址</div>
                <span>{{c.email}}</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 地图 -->
        <div class="mappic">
          <div id="container"></div>
        </div>

        <div class="line"></div>
        <div class="knowledbox">
          <div class="titknow">
            <div class="choosecat">LOOKING FORWARD TO EACH OF OUR ENCOUNTERS</div>
            <div class="engname">期待我们的每一次相遇</div>
          </div>
          <div class="contents">
            <img
              src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/lianxi2.png"
              alt
            />
          </div>
          <div class="title3">
            <div class="yptj">友情链接</div>
            <div>—— FRIENDLY LINK ——</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      contdata: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
  
  },
  created: function() {
    this.axios
      .get("/contatus")
      .then(response => {
        // console.log(response);
        this.contdata = response.data;
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  background-color: pink;
}
.w {
  width: 1220px;
  margin: 0 auto;
}
.toppic {
  width: 100%;
  height: 322px;
  margin-top: 100px;
  position: relative;
  color: aliceblue;
}
.toppic img {
  width: 100%;
  height: 100%;
}
.img_title {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 80px;
  text-align: center;
  line-height: 80px;
  font-size: 28px;
  font-weight: 300;
}

.img_words {
  width: 100%;
  height: 150px;
  position: absolute;
  top: 100px;
  left: 30%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  margin: 60px 0;
  max-width: 600px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
}

.addrs {
  width: 100%;
  height: 660px;
}

.titknow {
  width: 100%;
  height: 90px;
}
.choosecat {
  width: 100%;
  height: 60px;
  line-height: 40px;
  color: #000;
  margin-top: 20px;
  font-size: 20px;
}
.engname {
  color: #000;
  font-size: 18px;
}
.constyle {
  width: 100%;
  height: 800px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

.rightcout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.rightcout .shadowss {
  list-style: none;
  width: 20%;
  height: 280px;
  margin: 30px;
  background-color: #fff;
}

.leftcontent {
  list-style: none;
  width: 40%;
  height: 300px;
  margin: 30px;
  background-color: #fff;
}
.leftcontent p {
  width: 400px;
  height: 260px;
  margin: 30px auto;
  line-height: 24px;
  text-align: left;
  text-indent: 2rem;
  font-size: 18px;
  color: black;
  font-weight: 300;
}

.shadowss {
  border: 1px solid #eee;
  box-shadow: 0px 0px 10px rgb(141, 137, 137);
  font-size: 15px;
}

.shadowss img {
  margin: 60px 0 20px 0;
}

.shadowss div {
  margin-bottom: 10px;
}

.shadowss p {
  max-width: 190px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  margin-left: 25px;
}

.mappic {
  width: 100%;
  height: 500px;
  margin-top: 300px;
}

.line {
  width: 100%;
  height: 3px;
  background-color: #ccc;
  margin: 50px 0;
}

.knowledbox {
  width: 100%;
  height: 700px;
  background-color: #fff;
}
.titknow {
  width: 100%;
  height: 80px;
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
  height: 436px;
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
}
.contents img {
  width: 100%;
  height: 100%;
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
