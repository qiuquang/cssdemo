<template>
<div class="father">
  <!-- 2栏 -->
  <div class="common left1">左</div>
  <div class="common right1">右</div>
  <!-- 3栏 -->
  <!-- <div class="common left">左</div>
  <div class="common center">中</div>
  <div class="common right">右</div> -->
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
  // display: flex;
  .common{
    height: 100%;
    color: #fff;
    font-size: 30px;
  }
  .left1{
    width: 50%;
    background-color: red;
    float: left;
  }
  .right1{
    width: 50%;
    background-color: blue;
    float: left;
  }
  .left{
    width: 50%;
    background-color: red;
    // float: left;
  }
  .right{
    width: 20%;
    background-color: blue;
    // float: left;
  }
  .center{
    width: 20%;
    background-color: green;
    // float: left;
  }

}
</style>
