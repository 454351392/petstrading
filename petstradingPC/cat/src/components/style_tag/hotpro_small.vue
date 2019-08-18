<template>
  <div class="catlist">
    <div class="hotcat" v-for="i in list1" :key="(i,index)" >
      <!-- @mouseenter.capture="shadowshow(index)" -->

      <div class="son1">
      
          <img :src="i.pic" alt />
      </div>

      <div class="son2 ">
        <div class="info">
          <span class="deriction">{{i.class1}}</span> <br><br>
          <span class="price">{{i.price1}}-{{i.price2}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list1: []
    };
  },
  created: function() {
    this.axios
      .post("/classselect")
      .then(response => {
        for(var i=0;i<response.data.length;i++){
         if(this.list1.length<8 ){
         this.list1.push(response.data[i])
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
a {
  text-decoration: none;
  color: #333;
}
.catlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.hotcat,
.son1,
.son1 img,
.son2 {
  width: 260px;
  height: 260px;
}
.hotcat {
  position: relative;
  overflow: hidden;
  margin: 20px;
  background-color: green;
}

.son2 {
  width: 260px;
  position: absolute;
  top: 0;
  left: -260px;
  -webkit-transition: all 0.8s;
  transition: all 0.8s;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 20;
}
.hotcat:hover > .son2 {
  left: 0;
  color: white;
}
.son2 .info {
  margin: auto;
  font-family: MicrosoftYaHei;
  font-size: 16px;
  font-stretch: normal;
  position: absolute;
  top: 100px;
  left: 40%;
}

</style>