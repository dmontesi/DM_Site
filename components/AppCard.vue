<template>
  <div class="cards__grid">
    <div v-for="card in cards" :key="card.title" class="card bg-dark">
      <picture>
        <!-- <source
          :data-srcset="require(`~/assets/images/${card.imageLg}.webp`)"
          media="(min-width:56.25em)"
          type="image/webp"
        > -->
        <source
          :data-srcset="require(`~/assets/images/${card.imageLg}.jpg`)"
          media="(min-width:56.25em)"
          type="image/jpg"
        >
        <img
          :data-src="require(`~/assets/images/${card.image}.jpg`)"
          class="card__img lazyload"
        >
      </picture>

      <div class="card__content">
        <p v-if="card.category" class="category small">
          {{ card.category }}
        </p>
        <h3 class="heading-tertiary u-margin-bottom-tiny">
          {{ card.title }}
        </h3>
        <p class="paragraph">
          {{ card.description }}
        </p>
        <!-- <ul v-if="card.labels">
          <li v-for="label in labels" :key="label.length">
            {{ label.length }}
          </li>
        </ul> -->
      </div>
      <a
        :href="card.url"
        :target="card.target"
        rel="noreferrer"
        class="card__cta text-link"
      ><span v-if="card.year" class="card__year">{{ card.year }} |</span> {{ card.cta }} <span v-if="card.external" class="card__icon"><ph-arrow-square-out :size="20" /></span></a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { PhArrowSquareOut } from 'phosphor-vue'

export default {
  components: {
    PhArrowSquareOut
  },

  computed: {
    ...mapState(['cards', 'selected']),
    ...mapGetters(['filteredCards'])
  }
}

</script>

<style></style>
