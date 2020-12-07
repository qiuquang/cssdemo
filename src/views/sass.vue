<template>
<div class="sassDemo">
  <div class="lineOne">欢迎使用sass-t1</div>
  <div class="important">这是从mixin来的样式--t2</div>
  <div class="changeStyle">文字居中</div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '@/style/common.scss';
.sassDemo{
  color: $common-color;
  .lineOne{
    font-size: $common-fontSize;
  }
  .important {
  @include important-text;
  font-size: 25px;
  background-color: #eee;
  }
  .changeStyle {
    @extend .important;
    margin: 10px;
    background-color: #eee;
    height: $com-size;
    line-height: $com-size;
    font-size: $com-fontsize;
  }
}
</style>
