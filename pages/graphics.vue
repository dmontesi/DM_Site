<template>
  <main>
    <section ref="about" class="section about">
      <h1>Well, this is about!</h1>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['page'])
  }
}
</script>
