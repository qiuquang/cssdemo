<template>
<div class="father">
  <div class="one">我是第1个</div>
  <!-- <div class="two">我是第2个</div> -->
  <!-- <div class="three">我是第3个</div> -->
  <!-- <div class="four">我是第4个</div>
  <div class="five">我是第5个</div> -->
  <!-- <div style="clear:both;">333</div> -->
</div>
</template>

<script>
export default {
  name: 'float',
};
</script>

<style lang="scss" scoped>
.father {
  height: calc(100% - 78px);
  width: 100%;
  background-color: #ff0;
  position: relative;
  .one{
    height: 100px;
    width: 100px;
    background-color: red;
    position: fixed;
    bottom: 100px;
  }
  .two{
    height: 200px;
    width: 200px;
    background-color: green;
    position: absolute;
    top: 100px;
    left: 240px;
  }
  .three{
    height: 300px;
    width: 300px;
    background-color: blue;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;;
  }
  .four{
    height: 400px;
    width: 400px;
    background-color: #901;
    color: #fff;
    float: left;
    z-index: 0;
    // position: relative;
  }
  .five{
    height: 400px;
    width: 400px;
    line-height: 400px;
    background-color: #772;
    color: #000;
    z-index: 1;
    // clear: both;
    // position: relative;
    // float: left;
  }
}
</style>
