<template>
  <div class="layout" :class="{reverse: reverse, overlap: overlap}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'staggered-layout',
  props: {
    overlap: Boolean,
    reverse: Boolean
  }
}
</script>


<style scoped lang="scss">
  @import '../assets/scss/variables.scss';
  @import '../assets/scss/layout.scss';

  .layout{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > *{
      @extend .v-padded-small;
    }

    > *:nth-child(even){
      align-self: flex-end;
    }

    &.reverse{
      align-items: flex-end;

      > *:nth-child(even){
        align-self: flex-start;
      }
    }

    &.overlap{
      > *{
        padding-top: 0px;
        padding-bottom: 0px;
        margin-top: -4rem;

        &:first-child{
          margin-top: 0rem;
        }
      }
    }
  }

</style>
