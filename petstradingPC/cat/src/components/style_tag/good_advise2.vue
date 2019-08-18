<template>

    <div class="goodadvise">
      <div class="son1">
        <img :src="pic" alt />
      </div>
      <div class="son2">
        <div class="title_">
          <span class="titles1" v-html="redHot(title1)">&nbsp;{{title1}}&nbsp;</span>
        </div>
        <div class="price">
          <span>价格：</span>
          <span>{{price}}/1只</span>
        </div>
        <div class="shop">
          <span>{{shop}}&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:black">热度:<span style="color:red">{{nums}}</span></span>
          <img src="http://img3.imgtn.bdimg.com/it/u=2922170376,2371336021&fm=26&gp=0.jpg" alt />
        </div>
      </div>
    </div>

</template>

<script>
    export default {
    
    props:["pic", "info", "price", "shop", "title1","nums"], 
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

.goodadvise {
  width: 280px;
  height: 330px;
  /* background-color: aquamarine; */
  position: relative;
  overflow: hidden;
  font-family: MicrosoftYaHei;
  background-color: white;
  border: 1px solid #eeeeee;
  box-sizing: border-box;

}
.son1 {
  overflow: hidden;
}
.son1,
.son1 img {
  width: 280px;
  height: 220px;
}
.son1 img {
  transition: all 1s;
}
.goodadvise:hover .son1 img {
  transform: scale(1.3);
  -ms-transform: scale(1.3);
}
.goodadvise:hover {
  border-color: #ff6542; 
}




.son2 {
  width: 280px;
  height: 110px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  box-sizing: border-box;
}
.son2 .title_{
  overflow: hidden;
  text-overflow: ellipsis;
}
.son2 .title_ span {
  display:inline-block;
  height: 30px;
}
.son2 div:not(.title_) {
  width: 100%;
  height: 25%;
  /* background-color: blueviolet; */
}

.son2 .title_ {
  width: 100%;
  height: 40%;
  /* background-color: green; */
  padding-top: 7px;
  box-sizing: border-box;
}

.son2 .title_ span {
  font-size: 14px;

  color: #333;
}

.son2 .price {
  font-size: 14px;
  font-weight: 800;
  margin-top: 8px;
}

.son2 .price span:nth-of-type(2) {
  color: #ff6542;
}
.son2 .shop {
  margin-top: -3px;
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
