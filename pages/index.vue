<template>
  <main>
    <section id="about" ref="index" class="section about">
      <div class="row box fade-in">
        <div class="col-2-of-3">
          <h1 class="heading-secondary">
            Glad you found me
          </h1>
          <p class="paragraph u-margin-bottom-med">
            I began my career over a decade ago as a Graphic Designer in my
            home country, Venezuela. Later on, I expanded my passion for clean
            and minimal design to the digital world of web development. Outside of work, I enjoy spending
            time in nature, traveling, recording music at home, photographing,
            hiking, and sharing time with my wife, kids and cats.
          </p>

          <app-items />
          <!-- <NuxtLink to="/work" class="btn btn--dark-2 btn--space">
            View Work
          </NuxtLink> -->
        </div>
        <div class="col-1-of-3 composition">
          <div class="composition__box fade-box">
            <picture>
              <source
                data-srcset="~/assets/images/WebP/dan-small.webp 1x, ~/assets/images/WebP/dan.webp 2x"
                type="image/webp"
              >
              <source
                data-srcset="~/assets/images/dan-small.jpg 1x, ~/assets/images/dan.jpg 2x"
                type="image/jpg"
              >
              <img
                data-srcset="~/assets/images/dan-small.jpg 1x, ~/assets/images/dan.jpg 2x"
                alt="Logo"
                src="~/assets/images/dan-small.jpg"
                class="lazyload"
              >
            </picture>
          </div>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="row">
        <div class="services__header">
          <h2 class="heading-secondary">
            Some of my work
          </h2>
          <!-- <div class="paragraph">
            Offering modern, highly responsive and optimized front end
            websites and graphics for any of your needs. From wireframe
            designs to final production.
          </div> -->
        </div>
        <div class="cards">
          <app-card />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppItems from '~/components/AppItems'
import AppCard from '~/components/AppCard'

export default {
  components: {
    AppCard,
    AppItems
  },
  computed: {
    ...mapState(['page'])
  }
}
</script>
