<template>
  <div class="grid">
    <div class="work__header">
      <h2 class="heading-secondary">
        Featured Work
      </h2>
    </div>

    <select v-model="selected" class="work__list filter" aria-label="Select">
      <!-- "All Categories" Option -->
      <option value="">
        All Categories
      </option>

      <!-- Category Options -->
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
          @click="openModal(post)"
        >
          <picture>
            <source
              :data-srcset="require(`~/assets/images/${post.imageLg}.jpg`)"
              media="(min-width:56.25em)"
              type="image/jpg"
            >
            <img :data-src="require(`~/assets/images/${post.image}.jpg`)" class="card__img lazyload">
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
            <div class="card__labels">
              <span v-for="el in post.labels" :key="el.label">{{ el }}</span>
            </div>
            <span>Created using:</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <AppModal v-if="showModal" :show="showModal" @close="showModal = false">
      <div class="modal-card-content">
        <!-- Featured Image -->
        <img :src="currentImage" class="modal__featuredImage lazyload" alt="Featured Image">

        <!-- Thumbnails -->
        <div class="thumbnail-gallery">
          <img
            v-for="(thumbnail, index) in selectedCard.thumbnails"
            :key="index"
            :src="thumbnail"
            class="thumbnail-image"
            alt="Thumbnail"
            @click="setFeaturedImage(thumbnail)"
          >
        </div>

        <div class="modal__text">
          <h3 class="heading-tertiary">
            {{ selectedCard.title }}
          </h3>
          <p class="paragraph">
            {{ selectedCard.modalDescription }}
          </p>
          <a :href="selectedCard.url" :target="selectedCard.target" class="card__cta text-link">
            {{ selectedCard.cta }}
            <span v-if="selectedCard.external" class="card__icon"><ph-arrow-square-out :size="20" /></span>
          </a>
        </div>
      </div>
    </AppModal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { PhArrowSquareOut } from 'phosphor-vue'
import aosMixin from '~/mixins/aos'
import AppModal from '~/components/AppModal.vue'

export default {
  components: {
    PhArrowSquareOut,
    AppModal
  },
  mixins: [aosMixin],
  data () {
    return {
      showModal: false,
      selectedCard: null,
      currentImage: null, // Store the currently displayed image
      selected: ''
    }
  },

  computed: {
    ...mapState(['posts', 'categories']),
    filteredLabel () {
      if (!this.selected) { return this.posts }

      const filter = new RegExp(this.selected, 'i')
      return this.posts.filter(el => el.label.match(filter))
    }
  },

  methods: {
    openModal (post) {
      this.selectedCard = post
      this.currentImage = require(`~/assets/images/${post.image}.jpg`) // Set initial featured image
      this.showModal = true
    },
    setFeaturedImage (thumbnail) {
      this.currentImage = thumbnail
    }
  }
}
</script>
