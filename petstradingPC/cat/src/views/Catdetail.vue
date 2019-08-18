<template>
  <div>
    <top-nav></top-nav>
    <div class="top"></div>
    <div class="w">     
      <div class="detialcomp">
          <!-- <second-page  v-for="L in list1"  :lists="L"></second-page> -->
          <second-page></second-page>

      </div>
    </div>
      <div class="myfo">
    <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
export default {
};
</script>


<style scoped>
.w {
    width: 1200px;
    height: auto;
    margin: 0 auto;
}
.top {
    width: 100%;
    height: 60px;
    border-top: 1px solid #aaa;
    box-shadow: 0 0 10px #aaa;
}
.detialcomp {
    width: 100%;
    height: 600px;
    margin-top: 160px;
    /* background-color: #562; */

}
</style>
