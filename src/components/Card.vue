<template>
  <div class="card shadow">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flow-layout',
  props: {
    aspect: String,
    captionPos: String,
    captionSize: String
  }
}
</script>


<style scoped lang="scss">
  @import '../assets/scss/variables.scss';
  @import '../assets/scss/layout.scss';
</style>
