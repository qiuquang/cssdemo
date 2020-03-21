<template>
<div class="father">
  <div class="common">我是第1个</div>
  <div class="common">我是第2个</div>
  <div class="common">我是第3个</div>
  <div class="common">我是第4个</div>
  <div class="common">我是第5个</div>
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
  .common{
    height: 100px;
    width: 100px;
  }
}
</style>
