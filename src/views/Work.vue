<template>
  <div id="work">
    <section class="v-padded">

      <div class="row horizontal">
        <h1 class="cell">Some of our work.</h1>
      </div>
      <div class="row horizontal case-studies">

        <div v-for="(work, index) in works" :key="`work-${index}`" class="cell s-two-thirds m-half v-padded-small work-tile" :class="{big: (works.length % 2) === 1 && index === 0}">
          <div class="card shadow">
            <div class="fixed-aspect four-three" :class="{square: (works.length % 2) === 1 && index === 0}">
              <div class="fixed-aspect-inner image"></div>
            </div>
            <div class="card-content small">
              <p>Designed & prototyped a groundbreaking wellbeing-focused face-to-face banking service.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="v-padded">

      <div class="row horizontal">
        <h2 class="cell">Other stuff</h2>
      </div>

      <div id="extra">
        <div class="scroller l-third">
          <div class="scroller-content row">
            <div v-for="(otherWork, index) in otherWorks" :key="`other-work-${index}`" class="cell older-work-title">
              <h4>Older Work {{index}}</h4>
            </div>
          </div>
        </div>

        <div class="row l-two-thirds">
          <div class="fixed-aspect four-three">
            <div class="fixed-aspect-inner image"></div>
          </div>
        </div>
      </div>

    </section>

  </div>
</template>

<script>

export default {
  name: 'work',
  data () {
    return {
      works: [...Array(5)],
      otherWorks: [...Array(12)]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables.scss';
  @import '../assets/scss/layout.scss';

  .case-studies{
    > .cell:nth-child(even){
      @media (min-width: $small) {
        transform: translate3d(50%, 0rem, 0rem);
      }

      @media (min-width: $big) {
        transform: translate3d(0%, 0%, 0rem);
      }
    }
  }


  .big{    
    @media (min-width: $mid) {
      width: 100%;
      .card{
        display: flex;
        align-items: center;
        > *{
          width: 50%;
          box-sizing: border-box;
        }
      }
    }
  }

  .older-work-title{
    min-width: 352px;
  }

  #extra{
    .scroller-content{
      @media (min-width: $big) {
        white-space: auto;

        > .cell{
          display: block;
          width: auto;
        }
      }
    }

    .row{
      @media (min-width: $big) {
        padding: 0px;
      }
    }

    @media (min-width: $big) {
      padding-left: 4rem;
      padding-right: 4rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }


</style>

