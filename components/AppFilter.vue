<template>
  <!-- <app-filter /> -->
  <select v-model="selected" class="work__list list" aria-label="Select work">
    <option disabled value="">
      Filter by Category
    </option>
    <option v-for="category in categories" :key="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selected: ''
    }
  },

  computed: {
    ...mapState(['posts', 'categories']),
    // ...mapGetters(['filteredLabel']),
    filteredLabel () {
      const filter = new RegExp(this.selected, 'i')
      return this.posts.filter(el => el.label.match(filter))
    }
  }
}
</script>

<style></style>
