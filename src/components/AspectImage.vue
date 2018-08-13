<template>
  <div class="wrapper" :class="captionPos">
    <div class="fixed-aspect" :class="aspect">
      <div class="fixed-aspect-inner image"></div>
    </div>
    <div class="image-caption .card-content.small" :class="[captionPos, captionWidth]">
      <span class="">I'm a caption</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow-layout',
  props: {
    aspect: String,
    captionPos: String,
    captionWidth: String
  }
}
</script>


<style scoped lang="scss">
  @import '../assets/scss/variables.scss';
  @import '../assets/scss/layout.scss';
  .wrapper{
    position: relative;

      .image-caption{
        position: absolute;
        padding-top: 1rem;
        padding-bottom: 1rem;
        bottom: -3rem;
        left: 0rem;

        &.top-left{
          top: -3rem;
          bottom: auto;
          left: 0rem;
          right: auto;
        }

        &.top-right{
          top: -3rem;
          bottom: auto;
          left: auto;
          right: 0rem;
          text-align: right;
        }

        &.bottom-right{
          top: auto;
          bottom: -3rem;
          left: auto;
          right: 0rem;
          text-align: right;
        }

        &.bottom-left{
          top: auto;
          bottom: -3rem;
          left: 0rem;
          right: auto;
        }

        &.half{
          width: 50%;
        }
      }
  }


</style>
