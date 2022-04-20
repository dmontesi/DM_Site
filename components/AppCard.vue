<template>
  <div class="grid">
    <div class="work__header">
      <h2 class="heading-secondary">
        Featured Work
      </h2>
    </div>

    <select v-model="selected" class="work__list filter" aria-label="Select">
      <option disabled value="">
        Filter by Category
      </option>
      <option v-for="category in categories" :key="category">
        {{ category }}
      </option>
    </select>

    <div class="cards">
      <div class="cards__grid">
        <div
          v-for="post in filteredLabel"
          :key="post.title"
          class="card bg-dark"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <picture>
            <source
              :data-srcset="require(`~/assets/images/${post.imageLg}.jpg`)"
              media="(min-width:56.25em)"
              type="image/jpg"
            >
            <img
              :data-src="require(`~/assets/images/${post.image}.jpg`)"
              class="card__img lazyload"
            >
          </picture>

          <div class="card__content">
            <p v-if="post.category" class="category small">
              {{ post.category }}
            </p>
            <h3 class="heading-tertiary u-margin-bottom-tiny">
              {{ post.title }}
            </h3>
            <p class="paragraph">
              {{ post.description }}
            </p>
          </div>
          <div class="card__footer">
            <a
              :href="post.url"
              :target="post.target"
              rel="noreferrer"
              class="card__cta text-link"
              aria-label="Visit link"
            >{{ post.cta }}
              <span
                v-if="post.external"
                class="card__icon"
              ><ph-arrow-square-out :size="20" /></span></a>
            <div class="card__labels">
              <span v-for="el in post.labels" :key="el.label">
                {{ el }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PhArrowSquareOut } from 'phosphor-vue'
import aosMixin from '~/mixins/aos'

export default {
  components: {
    PhArrowSquareOut
  },
  mixins: [aosMixin],
  data () {
    return {
      selected: ''
    }
  },

  computed: {
    ...mapState(['posts', 'categories']),
    filteredLabel () {
      const filter = new RegExp(this.selected, 'i')
      return this.posts.filter(el => el.label.match(filter))
    }
  }
}
</script>
