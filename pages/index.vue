<template>
  <main>
    <section id="about" ref="index" class="section about bg-light">
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
        </div>
        <div class="col-1-of-3 composition">
          <div class="composition__box fade-box">
            <picture>
              <!-- <source
          :data-srcset="require(`~/assets/images/${card.imageLg}.webp`)"
          media="(min-width:900px)"
          type="image/webp"
        > -->
              <source
                :data-srcset="require(`~/assets/images/${imageLg}.jpg`)"
                media="(min-width:900px)"
                type="image/jpg"
              >
              <img
                :data-src="require(`~/assets/images/${image}.jpg`)"
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
        </div>
        <select v-model="selected">
          <option disabled value="">
            Filter by category
          </option>
          <option v-for="category in categories" :key="category">
            {{ category }}
          </option>
        </select>
        <div class="cards">
          <app-card />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppItems from '~/components/AppItems'
import AppCard from '~/components/AppCard'

export default {
  components: {
    AppCard,
    AppItems
  },
  data () {
    return {
      image: 'dan-small',
      imageLg: 'dan'
    }
  },
  computed: {
    ...mapState(['page, about', 'cards', 'categories', 'selected']),
    ...mapGetters(['filteredCards'])
  }
}
</script>
