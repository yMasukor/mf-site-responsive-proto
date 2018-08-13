<template>
  <div id="work">
    <section class="v-padded background-dark">
      <div class="container">
        <div class="row inverse">
          <div class="cell">
            <h1>Our method combines strategy & action, building tangible evidence based outcomes.</h1>
          </div>
          <div class="cell s-two-thirds">
            <p>We rely on a fast cadence of hypothesis driven testing with real prototypes to lower uncertainty. This builds actionable insights, while simultaneously generating business outcomes. </p>
          </div>
        </div>

        <div class="row horizontal" id="science">

          <div class="l-two-thirds v-padded-small">
            <div class="cell">
              <div class="card shadow">
                <div class="card-content">

                  <div class="stat">
                    <h2>4,500+ hours of lab testing</h2>
                    <p class="small">We test and iterate with small groups at least once a sprint to ensure constant feedback.</p>
                  </div>

                  <div class="stat">
                    <h2>38,000+ hours of real world data</h2>
                    <p class="small">We prototype & pilot in real world situations to ensure we’re solving real problems.</p>
                  </div>

                  <div class="stat">
                    <h2>1,200+ hours  of expert interviews</h2>
                    <p class="small">We engage industry experts to quickly gain a deep & nuanced understanding of the problem.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="inverse l-third horizontal v-padded-small">
            <div class="cell xs-full s-half l-full">
              <h3>Improving Wellness & Wellbeing</h3>
              <p class="small">We’ve learnt how to reliably improve wellbeing across finance, fitness, mental health, and sleep.</p>
            </div>

            <div class="cell xs-full s-half l-full">
              <h3>Fostering Institutional Trust</h3>
              <p class="small">We’ve seen how we can generate trust in banks, government, & educational institutions.</p>
            </div>

            <div class="cell xs-full s-half l-full">
              <h3>Driving Behaviour Change</h3>
              <p class="small">We’ve learnt how to sustain behaviour change across fitness, finance, mental health, education, & governement.</p>
            </div>

            <div class="cell xs-full s-half l-full">
              <h3>Harnessing Emergent Technology</h3>
              <p class="small">We’ve seen how to appropriately leverage new tech in entertainment, productivity, retail, government, and cultural institutions</p>
            </div>
          </div>
        </div>

        <div class="row horizontal" id="images">
          <div id="image-one" class="v-padded s-two-thirds m-half">
            <div class="fixed-aspect square">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>

          <div id="image-two" class="xs-two-thirds m-third v-padded">
            <div class="fixed-aspect four-three">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="v-padded">
      <div class="container">
        <div class="row v-padded">
          <h1>Our principles for bringing together strategy & action.</h1>
        </div>

        <div class="row principles">
          <div class="cell s-two-thirds principle">
            <h2>Happy teams create change</h2>
            <p>We know the most powerful and innovative organisations are driven by united teams. Building productive, self-determinate teams with shared missions is the secret to our success.</p>
          </div>
        </div>

        <div class="row horizontal principle-image-row">
          <div class="cell xs-half s-third v-padded-small" id="p-img-one">
            <div class="fixed-aspect square">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>

          <div class="cell xs-two-thirds s-half v-padded-small" id="p-img-two">
            <div class="fixed-aspect square">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>
        </div>

        <div class="row principles">
          <div class="cell s-two-thirds principle">
            <h2>Testing over validating</h2>
            <p>At the heart of our sprint cadence is user testing in our dedicated lab. We never go for more than 48 hours without testing with customers or citizens.</p>
            <p>This drives a culture of learning that is organised around proving or disproving the solutions and decisions we are making.</p>
          </div>
        </div>

        <div class="row horizontal principle-image-row">
          <div class="cell s-two-thirds v-padded-small" id="p-img-three">
            <div class="fixed-aspect four-three">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>
        </div>

        <div class="row principles">
          <div class="cell s-two-thirds principle">
            <h2>The power of co-creation</h2>
            <p>We blend our multidisciplinary team with yours. It is this intersection of diverse experience, thinking and skills that drives real change.  Blended teams drive momentum through knowledge sharing and by empowering your internal teams to own their mission and outcomes. </p>
          </div>
        </div>

        <div class="row horizontal principle-image-row">
          <div class="cell s-offset-third xs-two-thirds m-half v-padded-small" id="p-img-four">
            <div class="fixed-aspect square">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>
        </div>

        <div class="row principles">
          <div class="cell s-two-thirds principle">
            <h2>Make it real</h2>
            <p>We believe that tangibility is the fuel for a team’s vision.</p>
            <p>By prototyping early and often, we make ideas real for your teams so they can start to organise around that reality.</p>
            <p>We rapidly turn strategy into real experiences that can be tested to ensure you are making the best investment in new ideas. </p>
          </div>
        </div>

        <div class="row horizontal principle-image-row">
          <div class="cell xs-half s-third v-padded-small" id="p-img-five">
            <div class="fixed-aspect square">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>
        </div>

        <div class="row principles">
          <div class="cell s-two-thirds principle">
            <h2>Design intelligence over interface</h2>
            <p>The coming generation of products will increasingly prioritise intelligence over interfaces.</p>
            <p>We focus on the development of underlying logic, thinking and background processes that builds out an idea and solves a problem in a way that adds true value.</p>
          </div>
        </div>

        <div class="row horizontal principle-image-row">
          <div class="cell s-half v-padded-small" id="p-img-six">
            <div class="fixed-aspect square">
              <div class="fixed-aspect-inner image"></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'method',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables.scss';

  .stat{
    margin-bottom: 4rem;
  }

  #science{
    flex-direction: row-reverse;
    position: relative;
    z-index: 1;
  }

  #images{
    justify-content: space-between;

    @media (min-width: $mid) {
      flex-direction: row-reverse;
    }

    #image-two{
      transform: translate3d(50%, 0, 0);

      @media (min-width: $mid) {
        transform: translate3d(0, 4rem, 0)
      }

      @media (min-width: $big) {
        transform: translate3d(0, 0, 0)
      }
    }

    #image-one{
      @media (min-width: $big) {
        margin-top: -16rem;
        z-index: 0;
      }
    }
  }

  .principle{
    margin: 0 auto;
  }

  .principle-image-row{
    justify-content: space-between;
    
    padding-bottom: 3rem;
    
    @media (min-width: $small) {
      padding-bottom: 4rem;
    }
    
    @media (min-width: $mid) {
      padding-bottom: 6rem;
    }
    
    @media (min-width: $big) {
      padding-bottom: 8rem;
    }
  }

  #p-img-one{
    transform: translate3d(66%, 0, 0);

    @media (min-width: $small) {
      transform: translate3d(0, 4rem, 0)
    }
  }

  #p-img-four{
    transform: translate3d(50%, 0, 0);

    @media (min-width: $mid) {
      transform: translate3d(100%, 0, 0)
    }
  }

  #p-img-five{
    @media (min-width: $small) {
      transform: translate3d(50%, 0, 0)
    }
  }

  #p-img-six{
    @media (min-width: $small) {
      transform: translate3d(66%, 0, 0)
    }
  }
</style>

