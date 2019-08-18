<template>
  <div class="fist_page">
    <top-nav></top-nav>
    <div class="w">
      <div class="top">
        <div class="pic">
          <div class="pic_son1">
            <img :src="msg.pic" />
          </div>
          <div class="pic_son2">
            <div>
              <img :src="msg.pic" alt />
            </div>
            <div>
              <img :src="msg.pic" alt />
            </div>
            <div>
              <img :src="msg.pic" alt />
            </div>
            <div>
              <img :src="msg.pic" alt />
            </div>
          </div>
        </div>
        <div class="cat_info">
          <div class="title_">
            <span>&nbsp;&nbsp;{{msg.class1}}&nbsp;&nbsp;</span>
          </div>
          <div class="price">
            <div class="son1">
              <span>价格&nbsp;&nbsp;&nbsp;</span>
              <span>{{msg.price}}&nbsp;</span>
              <span>元/只</span>
              <span>浏览次数:&nbsp;</span>
              <span>{{msg.nums}}</span>
            </div>
            <div class="son2">
              <span>卖家承诺:&nbsp;无条件包退换</span>
            </div>
          </div>
          <div class="now_info">
            <div class="son">
              <div>
                <span>在售只数</span>
                <span>{{msg.num}}只</span>
              </div>
              <div>
                <span>年龄</span>
                <span>{{msg.age}}个月</span>
              </div>
              <div>
                <span>品种</span>
                <span>{{msg.class1}}</span>
              </div>
              <div>
                <span>预防</span>
                <span>2针疫苗</span>
              </div>
            </div>
          </div>
          <div class="contact">
            <div class="son">
              <div>
                <span>联系人:&nbsp;</span>
                <span>{{msg.username}}</span>
              </div>
              <div>
                <span>联系电话:&nbsp;</span>
                <span>{{msg.tel}}</span>
              </div>
              <div>
                <span>异地运费:&nbsp;</span>
                <span>包运费！&nbsp;签协议！&nbsp;</span>
              </div>
            </div>
          </div>
          <div class="tel_wechat">
            <div class="son">
              <div class="gobuy">
                <div>
                  <a href="/car">立即购买</a>
                </div>
              </div>
              <div class="wechat">
                <span class="el-icon-shopping-cart-2"></span>
                <span @click="addCar">加入购物车{{n}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="cat_basic_info">
          <div class="title_">
            <span>猫咪信息</span>
          </div>
          <table>
            <tr>
              <th>基本信息</th>
              <th></th>
              <th>健康防御</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <span>是否纯种:&nbsp;</span>
                <span>是</span>
              </td>
              <td>
                <span>猫咪品种:&nbsp;</span>
                <span>{{msg.class1}}</span>
              </td>
              <td>
                <span>疫苗情况:&nbsp;</span>
                <span>1针疫苗</span>
              </td>
              <td>
                <span>驱虫情况:&nbsp;</span>
                <span>已驱虫</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>待售数量:&nbsp;</span>
                <span>{{msg.num}}只待售</span>
              </td>
              <td>
                <span>猫咪品种:&nbsp;</span>
                <span>公母都有</span>
              </td>
              <td>
                <span>猫咪年龄:&nbsp;</span>
                <span>{{msg.age}}个月</span>
              </td>
              <td>
                <span>是否视频:&nbsp;</span>
                <span>可视频看猫咪</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="bottom">
        <div class="cat_bar">
          <div class="title_">
            <span>帖子详情</span>
          </div>
          <div class="detail">
            <p v-html="msg.info"></p>
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
export default {
  data: function() {
    return {
      msg: {},
      n: 0
    };
  },
  components: {},
  methods: {
    myshow: function() {
      var mydiv = document.getElementsByClassName("pic_son2")[0].children;
      var myshow = document
        .getElementsByClassName("pic_son1")[0]
        .getElementsByTagName("img")[0];
      for (let i = 0; i < mydiv.length; i++) {
        mydiv[i].onmouseover = function() {
          for (let j = 0; j < mydiv.length; j++) {
            mydiv[j].classList.remove("addColor");
          }
          myshow.src = mydiv[i].getElementsByTagName("img")[0].src;
          mydiv[i].classList.add("addColor");
        };
        mydiv[i].onmouseout = function() {
          myshow.src = mydiv[0].getElementsByTagName("img")[0].src;
        };
      }
    },
    addCar: function() {
      this.n += 1;
      this.msg.n = 1;
      this.$store.commit("addCar", this.msg);
    }
  },
  created: function (){
    console.log(this.$route)
    this.axios.get("xiangqing",{
      params:{kw1:this.$route.query.id}
    })
      .then(res => {
        console.log(res.data[0]);
        this.msg = res.data[0];
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted: function() {
    this.myshow();
  }
};
</script>
<style scoped>
.w {
  width: 80%;
  margin: 0 auto;
}
.buyc {
  width: 100%;
  height: 100px;
  margin-top: 180px;
  background-color: pink;
}
.gobuy {
  width: 180px;
  height: 70%;
  line-height: 38px;
  text-align: center;
  margin-left: 20px;
  background-color: orange;
}

.gobuy a {
  text-decoration: none;
  color: #fff;
}

/* 顶部 */
/* 顶部左侧 */
.top {
  display: flex;
  flex-direction: row;
  margin-top: 120px;
}

.top .pic {
  width: 470px;
  height: 470px;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top .pic_son1,
.top .pic_son1 img {
  width: 470px;
  height: 370px;
  /* background-color: aquamarine; */
}

.top .pic_son2 {
  height: 80px;
  /* background-color: bisque; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top .pic_son2 div {
  width: 20%;
  height: 100%;
  display: flex;
  /* background-color: yellow; */
}

.top .pic_son2 img {
  width: 95%;
  height: 95%;
  margin: auto;
}

.top .addColor {
  border: 1px solid #ff6542;
}

/* 顶部右侧 */
@font-face {
  font-family: "icomoon";
  src: url("fonts/icomoon.eot?xgbb24");
  src: url("fonts/icomoon.eot?xgbb24#iefix") format("embedded-opentype"),
    url("fonts/icomoon.ttf?xgbb24") format("truetype"),
    url("fonts/icomoon.woff?xgbb24") format("woff"),
    url("fonts/icomoon.svg?xgbb24#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
}

.top .cat_info {
  width: 460px;
  height: 470px;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  font-family: MicrosoftYaHei;
  padding: 8px 15px;
  box-sizing: border-box;
}

.top .cat_info .title_ {
  height: 10%;
  /* background-color: aqua; */
  font-size: 18px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}

.top .cat_info .contact {
  height: 30%;
  /* background-color: yellow; */
}

.top .cat_info .price,
.top .cat_info .now_info,
.top .cat_info .tel_wechat {
  height: 20%;
  /* background-color: lightsalmon; */
}

.top .cat_info .price {
  background-color: #f3f3f3;
}

.top .cat_info .price .son1 {
  height: 60%;
  margin-top: 20px;
}

.top .cat_info .price .son1 span:nth-of-type(1) {
  margin-left: 20px;
  display: inline-block;
}

.top .cat_info .price .son1 span:nth-of-type(1),
.top .cat_info .price .son1 span:nth-of-type(3),
.top .cat_info .price .son1 span:nth-of-type(4) {
  font-size: 14px;
  color: #666666;
}

.top .cat_info .price .son1 span:nth-of-type(2) {
  color: #ff3600;
  font-size: 24px;
}

.top .cat_info .price .son1 span:nth-of-type(4) {
  margin-left: 90px;
}

.top .cat_info .price .son1 span:nth-of-type(5) {
  color: #ff3600;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.top .cat_info .price .son2 {
  height: 40%;
  font-size: 14px;
  color: #ff3600;
  margin-left: 20px;
  margin-top: -15px;
}

.top .cat_info .now_info {
  display: flex;
}

.top .cat_info .now_info .son {
  width: 100%;
  height: 50px;
  /* background-color: yellow; */
  margin: auto;
  display: flex;
  flex-direction: row;
}

.top .cat_info .now_info .son div {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.top .cat_info .now_info .son div:not(:nth-of-type(4)) {
  border-right: 1px solid #666;
}

.top .cat_info .now_info .son div span {
  display: block;
  margin: auto;
}

.top .cat_info .now_info .son div span:nth-of-type(1) {
  font-size: 16px;
  color: #666;
}

.top .cat_info .now_info .son div span:nth-of-type(2) {
  font-size: 16px;
  color: #ff3600;
}

.top .cat_info .contact {
  padding: 10px;
  box-sizing: border-box;
}

.top .cat_info .contact .son div {
  margin-top: 5px;
}

.top .cat_info .contact .son div:nth-of-type(1) {
  color: #999;
  font-size: 12px;
}

.top .cat_info .contact .son div:nth-of-type(2) {
  color: #333;
  font-size: 12px;
  overflow: hidden;
}

.top .cat_info .tel_wechat {
  display: flex;
}

.top .cat_info .tel_wechat .son {
  height: 60%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top .cat_info .tel_wechat .tel,
.top .cat_info .tel_wechat .wechat {
  width: 180px;
  height: 70%;
  /* background-color: lawngreen; */
  text-align: center;
  line-height: 33px;
  box-sizing: border-box;
  color: white;
   margin-left: 60px;
}

.top .cat_info .tel_wechat .tel {
  background-color: #ff6542;
}

.top .cat_info .tel_wechat .wechat {
  background-color: #6abd00;
}

/* 中部 */
.middle {
  margin-top: 20px;
}

.middle .cat_basic_info {
  width: 960px;
  height: 166px;
  background-color: white;
}

.middle .cat_basic_info .title_ {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
  display: flex;
}

.middle .cat_basic_info .title_ span {
  height: 20px;
  display: inline-block;
  border-left: 2px solid #ff6542;
  margin: auto;
  margin-left: 0px;
  padding-left: 10px;
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
}

.middle table tr:nth-of-type(1) {
  height: 40%;
  width: 100%;
}

.middle table th {
  text-align: left;
  height: 35px;
  font-size: 16px;
  font-weight: normal;
}

.middle table td {
  width: 210px;
  height: 25px;
}

.middle table tr td span:nth-of-type(1) {
  color: #999;
  font-size: 12px;
  overflow: hidden;
}

.middle table tr td span:nth-of-type(2) {
  color: #333;
  font-size: 12px;
}

/* 底部 */
.bottom .cat_bar {
  width: 960px;
  height: auto;
  background-color: white;
}

.bottom .cat_bar .title_ {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
  display: flex;
}

.bottom .cat_bar .title_ span {
  height: 20px;
  display: inline-block;
  border-left: 2px solid #ff6542;
  margin: auto;
  margin-left: 0px;
  padding-left: 10px;
  box-sizing: border-box;
  line-height: 20px;
  font-size: 16px;
}

.bottom .cat_bar .detail {
  font-size: 1em;
  text-indent: 2em;
  line-height: 1.5em;
  text-align: left;
}

.bottom .cat_bar .pic {
  width: 920px;
  display: flex;
}
.bottom .cat_bar .pic div,
.bottom .cat_bar .pic img {
  width: 770px;
  height: 2206px;
}
.bottom .cat_bar .pic div {
  margin: auto;
}
</style>