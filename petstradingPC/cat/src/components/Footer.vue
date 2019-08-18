<template>
  <div class="myfooter">
    <div class="logo">
      <div class="logo-quan">
        <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/logo.png" alt />
      </div>
    </div>
    <div class="descon">
      <li>关于我们</li>
      <li>|</li>
      <li>联系我们</li>
      <li>|</li>
      <li>友情链接</li>
      <li>|</li>
      <li>版权声明</li>
      <li>|</li>
      <li>更多</li>
    </div>
    <div class="descon">版权所有：喵喵交易网 www.miaomiaojiaoyi.com 友情链接互换:qq 3416807899</div>
    <div class="descon">【免责声明：本站所有猫猫交易信息内容系用户自行发布，其真实性、合法性由发布人负责，本站不提供任何保证，亦不承担任何法律责任！】</div>
    <div class="descon">沪ICP备180226699号-1</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.myfooter {
  width: 100%;
  height: 220px;
  margin-top: 40px;
  background-color: #666;
  position: relative;
  font-size: 14px;
  color: #fff;
}

.logo {
  height: 80px;
  margin-bottom: 5px;
}

.logo-quan {
    width: 80px;
    height: 80px;
    border: 6px solid orange;
    border-radius: 50%;
    position: absolute;
    top: -40px;
    left: 46%;
}
.logo img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.descon {
  height: 30px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
}

li {
  list-style: none;
  height: 100%;
  text-align: center;
  line-height: 30px;
  margin: 0 2px;
}
</style>
