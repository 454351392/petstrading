<template>

    <div class="goodadvise">
      <div class="son1">
        <div>推荐</div>
       
        <img :src="pic"/>
      
      </div>
      <div class="son2">
        <div class="red_line">
          <span></span>
        </div>
        <div class="title_">
          <span>精品推荐:</span>
          <span class="titles1" v-html="redHot(title1)">&nbsp;{{title1}}&nbsp;</span>
        </div>
        <div class="price">
          <span>价格：</span>
          <span>{{price}}/1只</span>
        </div>
        <div class="shop">
          <span>{{shop}}&nbsp;&nbsp;</span>
          <img src="http://img5.imgtn.bdimg.com/it/u=3768890033,68770272&fm=26&gp=0.jpg" alt />
        </div>
      </div>
    </div>
</template>
<script>
  export default {
   
    props:["pic", "info", "price", "shop", "title1"],
    computed:{
      keywords:function (){
        return this.$store.state.kw;
      }
    },
    methods:{
      redHot:function (str){
        return str.replace(this.keywords,'<span class="H">'+this.keywords+'</span>')
      }
    }
  }
</script>
<style scoped>
.titles1 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goodadvise {
  width: 228px;
  height: 340px;
  /* background-color: aquamarine; */
  position: relative;
  overflow: hidden;
  font-family: MicrosoftYaHei;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  margin-top: 30px;
  text-align: left;
}
.son1,
.son1 img {
  width: 228px;
  height: 195px;
}

.son1 div {
  position: absolute;
  top: 7px;
  left: -21px;
  transform: rotate(-45deg);
  width: 80px;
  height: 25px;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
  background-color: #ea5413;
}

.son2 {
  width: 228px;
  height: 163px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  box-sizing: border-box;
}

.son2 div:not(.title_) {
  width: 100%;
  height: 20%;
  /* background-color: blueviolet; */
}

.son2 .title_ {
  width: 100%;
  height: 25%;
  /* background-color: green; */
}
.son2 .title_ span:nth-of-type(1) {
  color: #ff6542;
  font-size: 12px;
}
.son2 .title_ span:nth-of-type(2) {
  font-size: 14px;
  text-overflow: ellipsis;
}

.son2 .red_line span {
  display: inline-block;
  height: 3px;
  background-color: #ea5413;
  width: 24px;
  transition: 0.5s;
  -webkit-transition: 0.5s; /* Safari */
}

.goodadvise:hover .son2 .red_line span {
  width: 212px;
}
.son2 .price {
  font-size: 14px;
  font-weight: 800;
}

.son2 .price span:nth-of-type(2) {
  color: #ff6542;
}
.son2 .shop span {
  color: #999999;
  font-size: 12px;
}
.son2 .shop img {
   width: 30px;
    height: 20px;
    border-radius: 50%;
}
</style>
<style>
.H{
  color: #FF0066;
  font-weight: bolder;
}
</style>
