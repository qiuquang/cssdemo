<template>
<div class="usesassDemo">
<div class="human">
  <div class="finger">
    <div class="little"></div>
  </div>
</div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '@/style/mixin.scss';

.usesassDemo{
@include b(human) {
    @include e(finger) {
      @include m(little) {
        width: 100px;;
      }
    }

    @include m(male) {
      @include e(leg) {}
    }

    @include pseudo(hover) {
      @include e(hand) {}
    }

    @include when(hurt) {
      @include e(hand) {}
    }

    @include e(arm) {
      @include pseudo(focus) {
        @include spec-selector('+') {
          @include m(left) {}
        }
        @include spec-selector('~', hand, right) {}
      }
    }
  }
}
</style>
