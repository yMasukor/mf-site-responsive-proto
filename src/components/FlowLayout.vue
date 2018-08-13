<template>
  <div class="layout" :class="{reverse: reverse}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'flow-layout',
  props: {
    reverse: Boolean
  }
}
</script>


<style scoped lang="scss">
  @import '../assets/scss/variables.scss';
  @import '../assets/scss/layout.scss';

  .layout{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;

    > *{
      @extend .v-padded-small;
    }
  }

</style>
