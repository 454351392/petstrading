<template>
  <div>
    <div class="cat_type" v-for="t in typedata" :key="t.id">
      <router-link :to="{path:'/catdetail',query:{id:t.id}} " class="mya">
      <!-- <router-link :to="{path:'/second_page',query:{id:t.id}} " class="mya"> -->

        <div class="pic">
          <img :src="t.pic" alt />
        </div>
        <div class="cat_name">
          <span>{{t.class1}}</span>
        </div>
        <div class="cat_price">
          <span>参考价格:&nbsp;{{t.price1}}-{{t.price2}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      typedata: []
    };
  },
  created: function() {
    this.axios
      .post("/classselect")
      .then(response => {
        // console.log(response);
        this.typedata = response.data;
        // console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>

.mya {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}

.a {
  display: inline-block;
}
.cat_type {
  width: 225px;
  height: 296px;
  background-color: #f6f6f6;
  padding: 10px 10px;
  box-sizing: border-box;
  transition: 1s;
  display: inline-block;
  margin: 3px;
}
.pic,
.pic img {
  width: 205px;
  height: 205px;
}
.cat_name,
.cat_price {
  width: 100%;
  height: 35px;
  font-size: 16px;
  color: #333;
  display: flex;
}
.cat_name span,
.cat_type span {
  margin: auto;
}
.cat_type:hover {
  background-color: orangered;
}
</style>