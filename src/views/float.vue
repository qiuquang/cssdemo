<template>
<div class="father">
  <!-- 1.盒子 -->
  <div class="containBox">
  <div class="box">I am Box</div></div>
  <!-- 2.float -->
  <!-- <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div> -->
  <!-- 3.块级和行内元素 -->
  <!-- <div>我是div我占一行</div><div>我是div，虽然我和别的div写在一行上，但我还是占一行</div>
  <span>我是span，我自己写在一行上，我想占一行</span>
  <span>-----------我是span，我喜欢上面的span，所以我跟他一行</span>
  <div>我是div，上面的span我不惜的跟他在一行，所以我占一行</div> -->
</div>
</template>

<script>
export default {
  name: 'float',
};
</script>

<style lang="scss" scoped>
// @import '@/style/common.scss';
$common-backgroundColor: yellow;
.father {
  height: calc(100% - 78px);
  width: 100%;
  background-color: $common-backgroundColor;
  .containBox{
    height: 600px;
    width: 600px;
    // 水平居中
    margin: 0 auto;
    background-color: red;
    padding: 40px;
  }
  .box{
    margin: 10px;
    height: 100px;
    width: 100px;
    border: 2px solid #000;
    padding: 20px;
    // box-sizing: border-box;
  }
  .one{
    height: 100px;
    width: 100px;
    background-color: red;
  }
  .two{
    height: 200px;
    width: 200px;
    background-color: green;
  }
  .three{
    height: 300px;
    width: 300px;
    background-color: blue;
  }
}
</style>
