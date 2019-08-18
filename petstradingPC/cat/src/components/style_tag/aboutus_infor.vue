<template>
  <div class="cat_info">
    <div class="pic">
      <div class="block-line"></div>
      <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/about3.jpg" alt />
    </div>
    <div class="info">
      <div class="title_">COMPANY&nbsp;&nbsp;PROFILE</div>
      <div class="date_num">
       猫咪交易网
      </div>
      <div class="short_line">
        <span></span>
      </div>
      <div class="detail">
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{title}}
        </span><br><br>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{title1}}
        </span><br><br>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{title2}}
        </span><br><br>
        
      </div>
    </div>
    <div class="red_line"></div>
  </div>
</template>
<script>
  export default{

    data:function (){
      return {}
    },
    props:["title","title1","title2"]
  }
</script>
<style scoped>

.cat_info {
  width: 1080px;
  height: 540px;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  position: relative;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  margin-bottom: 30px;
  text-align: left;
}
.block-line {
  width: 410px;
  height: 480px;
  border: 4px solid #ff6542;
  color: #ff6542;
  position: relative;
  top: -20px;
  left: 0px;
}
/* .pic {
  width: 410px;
  height: 480px;
  position: relative;
} */
.pic img {
  width: 410px;
  height: 480px;
  position: absolute;
  bottom: 41px;
  left: 49px;
  /* background-color: pink; */
}

.info {
  width: 513px;
  height: 180px;
  /* background-color: brown; */
}

.info .title_ {
  /* width: 100%; */
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 30px;
  padding-top: 5px;
  box-sizing: border-box;
  color: #ff6542;
  text-align: left;
}
.info .date_num,
.info .short_line {
  height: 50px;
  line-height: 30px;
  margin-top: 7px;
}

.info .date_num {
  font-size: 24px;
  color: #ff6542;
  text-align: left;
}

.info .short_line span {
  display: block;
  width: 185px;
  height: 3px;
  background-color: #ff6542;
  border-width: 1px;
}

.info .detail {
  margin-top: -12px;
  font-size: 14px;
  color: #333;
  font-family: MicrosoftYaHei;
  width: 513px;
  height: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.red_line {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 1px;
  background-color: #ea5413;
}


</style>