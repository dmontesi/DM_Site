<template>
  <main>
    <section id="about" ref="index" class="section text-image">
      <div class="grid box fade-in">
        <div class="text-image__header col-4">
          <h1 class="heading-secondary">
            Glad you're here!
          </h1>
          <p class="paragraph">
            I began my career over a decade ago as
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
    <section id="work" class="section work bg-light">
      <div class="work__grid">
        <app-card />
      </div>
    </section>
    <section id="contact" class="section contact text-image">
      <div class="grid">
        <div class="text-image__header col-4">
          <h2 class="heading-secondary">
            Contact
          </h2>
          <p class="paragraph">
            Whether you would like my services for a project, get extra
            information on any of my work, ask me about this site or just say
            hello then you're in the right place.
          </p>
          <a
            href="mailto:hello@danmontesinos.com?Subject=Inquiry"
            class="btn btn--dark-2 btn--space"
          >Let's chat.</a>
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
                :data-srcset="require(`~/assets/images/${contactLg}.jpg`)"
                media="(min-width:900px)"
                type="image/jpg"
              >
              <img
                :data-src="require(`~/assets/images/${contact}.jpg`)"
                class="lazyload"
              >
            </picture>
          </div>
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
  data () {
    return {
      image: 'dan-small',
      imageLg: 'dan',
      selected: '',
      contact: 'contact-small',
      contactLg: 'contact'
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
