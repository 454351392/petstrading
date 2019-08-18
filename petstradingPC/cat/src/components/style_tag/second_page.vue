<template>
  <div class="second_page">
    <div class="top">
      <div class="top_left">
        <div class="pic">
          <div class="pic_son1">
            <img :src="list2.pic" alt />
          </div>
          <div class="pic_son2">
            <div>
              <img :src="list2.pic" alt />
            </div>
            <div>
              <img :src="list2.pic" alt />
            </div>
            <div>
              <img :src="list2.pic" alt />
            </div>
            <div>
              <img :src="list2.pic" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="top_right">
        <div class="cat_show_info">
          <div class="cat_type">
            <span>{{list2.class1}}</span>
            <span>&nbsp;Bo&nbsp;Si&nbsp;Miao</span>
          </div>
          <div class="price">
            <span>参考价格:&nbsp;</span>
            <span>{{list2.price1}}-{{list2.price2}}元</span>
          </div>

          <div class="detail">
            <table>
              <tr>
                <td>
                  <span>中文学名:</span>
                </td>
                <td>
                  <span> {{list2.class1}}</span>
                </td>
                <td>
                  <span>别名:</span>
                </td>
                <td>
                  <span>喜马拉雅</span>
                </td>
                <td>
                  <span>祖先:</span>
                </td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>分布区域:</span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span>原产地:</span>
                </td>
                <td>
                  <span>阿富汗</span>
                </td>
                <td>
                  <span>体型:</span>
                </td>
                <td>
                  <span>小型</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>原始用途:</span>
                </td>
                <td>
                  <span>宠物猫</span>
                </td>
                <td>
                  <span>今日用途:</span>
                </td>
                <td>
                  <span></span>
                </td>
                <td>
                  <span>分组:</span>
                </td>
                <td>
                  <span></span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>身高:</span>
                </td>
                <td>
                  <span>0CM</span>
                </td>
                <td>
                  <span>体重:</span>
                </td>
                <td>
                  <span>0KG</span>
                </td>
                <td>
                  <span>寿命:</span>
                </td>
                <td>
                  <span>0年</span>
                </td>
              </tr>
            </table>
          </div>
          <div class="info">
            <div class="info_top">
              <div>
                <div class="myblock">
                  <span>整体</span>
                </div>
                <div class="mydetail_">
                  <span>
                    {{list2.class1}}（Persian
                    cat）是以阿富汗的土种长毛猫和土耳其的安哥拉长毛猫为基础，在英国经过100多年的选种繁殖，于1860年诞生的一个品种。波斯猫是最常见的长毛猫，波斯猫有一张讨人喜爱的面庞，长而华丽的背毛，优雅的举止，故有“猫中王子”、“王妃”之称，是世界上爱猫者最喜欢的纯种猫之一，占有极其重要的地位。
                  </span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>毛发</span>
                </div>
                <div class="mydetail_">
                  <span></span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>颜色</span>
                </div>
                <div class="mydetail_">
                  <span>波斯猫的毛色大致分五大色系，近88种毛色。其中单色系有白色、黑色、蓝色、红色、奶油色等。金吉拉色系（=金吉拉猫）有鼠灰色（毛尖色）、渐变银色、渐变金色等。烟色系有烟色(毛根白色、渐变蓝色、渐变红色等。虎斑色有银色、棕色、红色、奶油色、蓝色等。混合色系包括玳瑁色、三色、蓝奶油色，以及黑白、蓝白、红白等双色。毛色中红色（多半雄性）和玳瑁色（多半雌性）较为罕见，故此毛色的波斯猫也十分珍贵。</span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>头部</span>
                </div>
                <div class="mydetail_">
                  <span>波斯猫的头又圆又大，头盖骨甚宽阔，两颊丰满。</span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>眼睛</span>
                </div>
                <div class="mydetail_">
                  <span>
                    既大且圆， 眼色亮泽，双眼间距宽阔，
                    予人可爱的神情。(扫盲：眼睛颜色不一样的是血统很杂的)眼色因毛色而定，一般认为波斯猫眼睛的颜色有蓝色、绿色、紫铜色、金色、琥珀色、怪色和两只眼睛具有不同颜色(即鸳鸯眼)
                  </span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>耳朵</span>
                </div>
                <div class="mydetail_">
                  <span>耳朵细小，浑圆，向前倾斜，耳朵底部不会过分宽阔，双耳间距阔，位于头上偏低位置。</span>
                </div>
              </div>
            </div>

            <div class="info_buttom">
              <div>
                <div class="myblock">
                  <span>鼻子</span>
                </div>
                <div class="mydetail_">
                  <span>短、扁、宽阔；纯种波斯猫鼻子和眼睛处于一线，因此也叫一线猫。</span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>尾巴</span>
                </div>
                <div class="mydetail_">
                  <span>波斯猫的尾巴短，但与身体成比例协调。</span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>胸部</span>
                </div>
                <div class="mydetail_">
                  <span></span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>颈部</span>
                </div>
                <div class="mydetail_">
                  <span></span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>前驱</span>
                </div>
                <div class="mydetail_">
                  <span>短而粗壮，前肢笔直。</span>
                </div>
              </div>
              <div>
                <div class="myblock">
                  <span>后驱</span>
                </div>
                <div class="mydetail_">
                  <span>短而粗壮，前肢笔直；从后面看，后肢笔直</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
       list2: {}
    }
  },

  methods: {
    myshowone: function() {
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
    myshowtwo: function() {
      var myblock = document.getElementsByClassName("myblock");
      var mydetail_ = document.getElementsByClassName("mydetail_");
      for (let i = 0; i < myblock.length; i++) {
        myblock[i].onmouseover = function() {
          for (let j = 0; j < mydetail_.length; j++) {
            mydetail_[j].style.display = "none";
          }
          mydetail_[i].style.display = "block";
          myblock[i].style.backgroundColor = "#fe3b00";
          myblock[i].style.fontWeight = "700";
        };
        myblock[i].onmouseout = function() {
          mydetail_[i].style.display = "none";
          myblock[i].style.backgroundColor = "#f3f7fa";
          myblock[i].style.fontWeight = "normal";
        };
      }
    }
  },
  mounted: function() {
    this.myshowone();
    this.myshowtwo();
  },
  created: function() {
    // 获取跳转的时候传过来的id
    // var newid=this.$route.query.id
    // console.log(newid)
    this.axios
      .get("/pzxiangqing", {
        params: {
          kw1: this.$route.query.id
        }
      })
      .then(response => {
        // console.log(response);
        this.list2 = response.data;
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style>
/* 顶部 */
.top {
  display: flex;
  flex-direction: row;
}

/* 顶部左侧 */
.top_left .pic {
  width: 420px;
  height: 540px;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top_left .pic_son1,
.top_left .pic_son1 img {
  width: 420px;
  height: 420px;
  /* background-color: aquamarine; */
}

.top_left .pic_son2 {
  height: 120x;
  /* background-color: bisque; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.top_left .pic_son2 div {
  width: 20%;
  height: 100%;
  display: flex;
  /* background-color: yellow; */
}

.top_left .pic_son2 img {
  width: 95%;
  height: 95%;
  margin: auto;
}

.top_left .addColor {
  border: 1px solid #ff6542;
}

/* 顶部右侧 */
.top_right .cat_show_info {
  position: relative;
  width: 725px;
  height: 540px;
  /* background-color: pink; */
  font-family: MicrosoftYaHei;
  margin-left: 20px;
}

.top_right .cat_show_info .cat_type,
.top_right .cat_show_info .price,
.top_right .cat_show_info .info {
  width: 100%;
  height: 108px;
  /* background-color: yellow; */
  padding-left: 10px;
  box-sizing: border-box;
}

.top_right .cat_show_info .cat_type span:nth-of-type(1) {
  font-size: 40px;
  color: #262626;
}

.top_right .cat_show_info .cat_type span:nth-of-type(2) {
  font-size: 16px;
  color: #262626;
}

.top_right .cat_show_info .price {
  background-color: #f3f7fa;
  line-height: 108px;
}

.top_right .cat_show_info .price span:nth-of-type(1) {
  font-size: 20px;
  color: #333;
}

.top_right .cat_show_info .price span:nth-of-type(2) {
  font-size: 30px;
  color: #fe3b00;
}

.top_right .cat_show_info .detail {
  width: 100%;
  height: 216px;
  /* background-color: green; */
  padding-left: 10px;
  box-sizing: border-box;
}

.top_right .cat_show_info .detail table td {
  width: 100px;
  height: 43px;
  font-size: 16px;
}

.top_right .cat_show_info .detail table tr td:nth-child(odd) {
  color: #aca0ac;
}

.top_right .cat_show_info .detail table tr td:nth-child(even) {
  color: #373c3c;
}

.top_right .cat_show_info .info {
  display: flex;
  flex-direction: column;
}

.top_right .cat_show_info .info .info_top,
.top_right .cat_show_info .info .info_buttom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
}

.top_right .cat_show_info .info .info_top div div:nth-of-type(1),
.top_right .cat_show_info .info .info_buttom div div:nth-of-type(1) {
  width: 96px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #262626;
  background-color: #f3f7fa;
}

.top_right .cat_show_info .info .info_top div div:nth-of-type(2),
.top_right .cat_show_info .info .info_buttom div div:nth-of-type(2) {
  width: 725px;
  /* display: none; */
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #fe3b00;
  display: none;
  background-color: white;
  font-size: 12px;
  padding: 10px;
  box-sizing: border-box;
  text-indent: 2em;
}

.top_right .cat_show_info .info .info_top div div:nth-of-type(2) {
  position: absolute;
  left: 0px;
}

.top_right .cat_show_info .info .info_buttom div div:nth-of-type(2) {
  position: absolute;
  left: 0px;
}
</style>