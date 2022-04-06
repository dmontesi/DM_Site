<template>
  <main>
    <section ref="services" class="section work">
      <div class="work__grid">
        <app-card />
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppCard from '~/components/AppCard'

export default {
  components: {
    AppCard
  },
  data () {
    return {
      selected: 'Filter by category'
    }
  },
  computed: {
    ...mapState(['page', 'categories', 'cards', 'selected']),
    ...mapGetters(['filteredCards'])
  }
}
</script>
