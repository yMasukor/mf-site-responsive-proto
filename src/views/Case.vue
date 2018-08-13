<template>
  <div id="work">
    <section class="v-padded container">
      <staggered-layout overlap="true" reverse="true" class="v-padded">
        <div class="cell xs-half">
          <card>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a vestibulum nulla, a pretium nunc. Duis cursus tortor sed ipsum elementum convallis. </p>
          </card>
        </div>
        <div class="cell xs-five-sixths">
          <aspect-image aspect="four-three" caption-pos="top-left" caption-size="half"></aspect-image>
        </div>
        <div class="cell xs-two-thirds">
          <aspect-image aspect="four-three" caption-pos="bottom-right"></aspect-image>
        </div>
      </staggered-layout>

      <flow-layout class="v-padded">
        <div class="cell xs-two-thirds">
          <aspect-image aspect="square"></aspect-image>
        </div>

        <div class="cell xs-third">
          <aspect-image aspect="square"></aspect-image>
        </div>

        <div class="cell xs-half">
          <aspect-image aspect="square"></aspect-image>
        </div>
      </flow-layout>

      <staggered-layout overlap="true" class="v-padded">
        <div class="cell xs-third">
          <aspect-image aspect="phone-shape"></aspect-image>
        </div>

        <div class="cell xs-two-thirds">
          <aspect-image aspect="four-three" caption-pos="bottom-right" caption-size="half"></aspect-image>
        </div>

        <div class="cell xs-half">
          <aspect-image aspect="four-three" caption-pos="bottom-left"></aspect-image>
        </div>
      </staggered-layout>

      <flow-layout class="v-padded">
        <div class="cell xs-two-thirds">
          <card>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a vestibulum nulla, a pretium nunc. Duis cursus tortor sed ipsum elementum convallis. </p>
          </card>
        </div>
      </flow-layout>


      <flow-layout class="v-padded">
        <div class="cell xs-third">
          <aspect-image aspect="square"></aspect-image>
        </div>

        <div class="cell xs-two-thirds">
          <aspect-image aspect="square"></aspect-image>
        </div>
      </flow-layout>

      <staggered-layout class="v-padded">
        <div class="cell xs-two-thirds">
          <card>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a vestibulum nulla, a pretium nunc. Duis cursus tortor sed ipsum elementum convallis. </p>
          </card>
        </div>

        <div class="cell xs-two-thirds">
          <card>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a vestibulum nulla, a pretium nunc. Duis cursus tortor sed ipsum elementum convallis. </p>
          </card>
        </div>
      </staggered-layout>

    </section>
  </div>
</template>

<script>

import StaggeredLayout from '@/components/StaggeredLayout.vue'
import FlowLayout from '@/components/FlowLayout.vue'
import AspectImage from '@/components/AspectImage.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'case',
  components: {StaggeredLayout, FlowLayout, AspectImage, Card}
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables.scss';
  @import '../assets/scss/layout.scss';
  
</style>

