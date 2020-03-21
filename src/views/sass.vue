<template>
<div class="sassDemo">
  <div class="lineOne">欢迎使用sass</div>
  <div class="important">这是从mixin来的样式</div>
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
  background-color: blue;
}
}
</style>
