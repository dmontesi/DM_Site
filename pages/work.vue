<template>
  <main>
    <section ref="services" class="section services">
      <div class="row fade-in">
        <div class="services__header">
          <h2 class="heading-secondary">
            Some of my work
          </h2>
          <div class="paragraph">
            Offering modern, highly responsive and optimized front end
            websites and graphics for any of your needs. From wireframe
            designs to final production.
          </div>
        </div>
        <div class="cards">
          <select v-model="selected">
            <option disabled value="">
              Filter with a label
            </option>
            <option v-for="category in categories" :key="category">
              {{ category }}
            </option>
          </select>
          <app-card />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import AppCard from '~/components/AppCard'

export default {
  components: {
    AppCard
  },
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    ...mapState(['page', 'categories']),

    filteredLabel () {
      const filter = new RegExp(this.selected, 'i')
      return this.posts.filter(el => el.label.match(filter))
    }
  }
}
</script>
