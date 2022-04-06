<template>
  <main>
    <section id="about" ref="index" class="section text-image bg-light">
      <div class="grid box fade-in">
        <div class="text-image__header col-4">
          <h1 class="heading-secondary">
            Glad you're here!
          </h1>
          <p class="paragraph">
            Here's a little bit about me: I began my career over a decade ago as
            a Graphic Designer in my home country, Venezuela. Later in life, I
            expanded my passion for clean and minimal design to the digital
            world of web development.
          </p>
          <p class="paragraph">
            Outside of work, I enjoy spending time in nature, traveling,
            recording music at home, photographing, hiking, and sharing time
            with my wife, kids and cats.
          </p>

          <app-items />
        </div>
        <div class="col-2 composition">
          <div class="composition__box fade-box">
            <picture>
              <!-- <source
          :data-srcset="require(`~/assets/images/${card.imageLg}.webp`)"
          media="(min-width:900px)"
          type="image/webp"
              >-->
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
    <section class="section work">
      <div class="work__grid">
        <app-card />
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppItems from '~/components/AppItems'
import AppCard from '~/components/AppCard'
// import AppFilter from '~/components/AppFilter'

export default {
  components: {
    AppCard,
    // AppFilter,
    AppItems
  },
  data () {
    return {
      image: 'dan-small',
      imageLg: 'dan',
      selected: ''
    }
  },
  computed: {
    ...mapState(['page, about', 'posts', 'categories']),
    filteredLabel () {
      const filter = new RegExp(this.selected, 'i')
      return this.posts.filter(el => el.label.match(filter))
    }
  }
}
</script>
